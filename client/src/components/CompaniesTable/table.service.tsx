import { rankItem } from "@tanstack/match-sorter-utils";
import { ColumnHelper, Row } from "@tanstack/react-table";
import { SelectOptions } from "../../interfaces/select.interface";
import { Company } from "./types";

export const fuzzyFilter = (
  row: Row<Company>,
  columnId: string,
  value: string,
  addMeta: (meta: any) => void
): boolean => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const getTableColumns = (columnHelper: ColumnHelper<Company>) => {
  return [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
      enableGlobalFilter: true,
    }),
    columnHelper.accessor("logo", {
      header: "Logo",
      cell: (info) => <img alt="company logo" src={info.getValue()}></img>,
      enableGlobalFilter: false,
    }),
    columnHelper.accessor("services", {
      id: "services",
      header: "Services",
      cell: (info) => info.getValue().join(", "),
      enableGlobalFilter: false,
      enableColumnFilter: true,
      filterFn: "arrIncludesAll", // TODO: whe can change this function to arrIncludesSome
    }),
    columnHelper.accessor("country", {
      header: "Country",
      cell: (info) => info.getValue(),
      enableGlobalFilter: false,
    }),
  ];
};

// TODO: any can be fixed with an const object,
// right now ENUM can't be defined as a type of param
export const getDropdownServiceOptions = (
  enumOfOptions: any
): SelectOptions[] => {
  let options: SelectOptions[] = [];

  Object.values(enumOfOptions).forEach((value) =>
    options.push({ value: value as string, label: value as string })
  );

  return options;
};
