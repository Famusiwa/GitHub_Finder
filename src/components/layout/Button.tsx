interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn btn-md ${className}`}>
      {children}
    </button>
  );
};

export default Button;
