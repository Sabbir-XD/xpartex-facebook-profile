type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = "" }: ButtonProps) => {
  const base =
    "p-2 text-sm font-medium transition";

  return (
    <button className={`${base} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

