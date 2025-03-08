interface FillButtonProps {
  children: React.ReactNode;
  className?: string;
}

const FillButton = ({ children, className }: FillButtonProps) => {
  return (
    <button
      className={`h-16 px-12 bg-primary text-white font-normal lg:text-lg rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default FillButton;
