"use client";

interface InputProps {
  name?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  setValue?: (e: string | number | undefined) => void;
}

const Input = ({
  name,
  className,
  type,
  placeholder,
  required,
  defaultValue,
  value,
  setValue,
}: InputProps) => {
  return (
    <input
      name={name}
      required={required}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => setValue && setValue(e.target.value)}
      placeholder={placeholder}
      className={`bg-[#F5F5F5] border-2 border-[#DCDCDC] rounded-full p-4 w-full text-base ${className}`}
    />
  );
};

export default Input;
