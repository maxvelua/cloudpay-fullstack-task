import Select, { ActionMeta, MultiValue } from "react-select";
import { SelectOptions } from "../../interfaces/select.interface";

interface Props {
  name: string;
  options: SelectOptions[];
  className: string;
  onChange: (
    newValue: MultiValue<SelectOptions>,
    actionMeta: ActionMeta<SelectOptions>
  ) => void;
}

export function MultiSelect({ name, options, className, onChange }: Props) {
  return (
    <Select
      name={name}
      className={className}
      options={options}
      closeMenuOnSelect={false}
      onChange={onChange}
      isMulti
    />
  );
}
