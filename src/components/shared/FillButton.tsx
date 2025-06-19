interface FillButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => any;
}

const FillButton = ({ children, className, onClick }: FillButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-12 px-12 bg-primary text-white font-normal rounded-full hover:bg-primary-dark transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default FillButton;
