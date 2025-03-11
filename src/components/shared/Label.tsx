interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const Label = ({ children, className }: LabelProps) => {
  return <label className={`font-bold py-2 ${className}`}>{children}</label>;
};

export default Label;
