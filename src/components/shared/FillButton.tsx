interface FillButtonProps {
  children: React.ReactNode;
  className?: string;
}

const FillButton = ({ children, className }: FillButtonProps) => {
  return (
    <button
      className={`h-14 px-12 bg-primary text-white font-normal rounded-full hover:bg-primary-dark transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default FillButton;
