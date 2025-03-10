interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
}

const OutlineButton = ({ children, className }: OutlineButtonProps) => {
  return (
    <button
      className={`h-12 px-8 text-primary border-2 border-primary font-normal rounded-full hover:bg-primary hover:text-white transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
