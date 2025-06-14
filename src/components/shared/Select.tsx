"use client";

import { ChevronDown } from "lucide-react";

interface SelectProps {
  name?: string;
  className?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  setValue?: (e: string | number | undefined) => void;
}

const Select = ({
  name,
  className,
  options,
  placeholder,
  defaultValue,
  value,
  setValue,
}: SelectProps) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => setValue && setValue(e.target.value)}
        className={`w-full p-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 ${className} appearance-none`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, idx: number) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Custom Icon */}
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default Select;
