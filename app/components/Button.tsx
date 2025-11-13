import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export default function Button({ onClick, children, variant, className="", ...props }: ButtonProps) {
  const baseStyle = "rounded-md p-3 text-lg font-normal transition-colors min-w-[200px] cursor-pointer";

  const variantStyle = {
    primary: "bg-principal text-white hover:bg-opacity-90",
    secondary: "bg-fundo-pagina text-black hover:bg-opacity-90",
  };

const combinedClassName = `${baseStyle} ${variantStyle[variant]} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
