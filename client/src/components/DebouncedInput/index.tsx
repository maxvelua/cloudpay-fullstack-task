import { useEffect, useState } from "react";

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
  debounce?: number;
}

export function DebouncedInput({
  initialValue,
  onChange,
  placeholder,
  className = "",
  debounce = 500,
}: Props) {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      className={className}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    ></input>
  );
}
