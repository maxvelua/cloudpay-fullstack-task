import "./style.css";
import { useMemo, useState } from "react";
import {
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Company, Services } from "./types";
import {
  fuzzyFilter,
  getDropdownServiceOptions,
  getTableColumns,
} from "./table.service";
import { DebouncedInput } from "../DebouncedInput";
import { MultiSelect } from "../MultiSelect";
import { ActionMeta, MultiValue } from "react-select";
import { SelectOptions } from "../../interfaces/select.interface";

interface Props {
  items: Company[];
}

export function CompaniesTable({ items }: Props) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const columnHelper = createColumnHelper<Company>();

  const options = useMemo(() => getDropdownServiceOptions(Services), []);
  const columns = useMemo(() => getTableColumns(columnHelper), [columnHelper]);

  const table = useReactTable<Company>({
    data: items,
    columns,
    state: {
      columnFilters,
      globalFilter,
    },
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  function handleDropdownChange(
    newValue: MultiValue<SelectOptions>,
    actionMeta: ActionMeta<SelectOptions>
  ): void {
    const values = newValue.map((obj: SelectOptions) => obj.value);

    values.length < 1
      ? setColumnFilters([])
      : setColumnFilters([{ id: "services", value: values }]);
  }

  return (
    <>
      <DebouncedInput
        initialValue={globalFilter}
        onChange={(value) => setGlobalFilter(value)}
        placeholder="Search by name..."
        className="search-bar"
      />

      <MultiSelect
        name="services"
        options={options}
        className="multi-dropdown"
        onChange={handleDropdownChange}
      />

      <div className="companies_table-wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
