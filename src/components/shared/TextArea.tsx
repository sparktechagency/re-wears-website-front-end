"use client";

interface TextAreaProps {
  name?: string;
  rows?: number;
  placeholder: string;
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
}

const TextArea = ({
  name,
  rows,
  placeholder,
  className,
  value,
  setValue,
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      rows={rows || 4}
      value={value}
      placeholder={placeholder}
      className={`bg-[#F5F5F5] border-2 border-[#DCDCDC] rounded-3xl p-4 w-full ${className}`}
      style={{ resize: "none" }}
      onChange={(e) => setValue && setValue(e.target.value)}
    />
  );
};

export default TextArea;
