"use client";

interface InputProps {
  className?: string;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  setValue?: (e: string | number | undefined) => void;
}

const Input = ({
  className,
  placeholder,
  defaultValue,
  value,
  setValue,
}: InputProps) => {
  return (
    <input
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => setValue && setValue(e.target.value)}
      placeholder={placeholder}
      className={`bg-[#F5F5F5] border-2 border-[#DCDCDC] rounded-full p-4 w-full ${className}`}
    />
  );
};

export default Input;
