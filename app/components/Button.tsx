import React from "react";
import Link from "next/link";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  className?: string;
};

type ButtonAsButton = BaseProps & 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: never;
  };

type ButtonAsLink = BaseProps & 
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> & {
    href: string; // 'href' é obrigatório e uma string
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;


export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  
  const baseStyle = "rounded-md p-3 text-lg font-normal transition-colors min-w-[200px] cursor-pointer flex items-center justify-center";

  const variantStyle = {
    primary: "bg-principal text-white hover:bg-opacity-90",
    secondary: "bg-fundo-pagina text-black hover:bg-opacity-90",
    tertiary: "bg-indigo-200 text-black hover:bg-indigo-300",
    quaternary: "bg-transparent text-principal !text-xs !font-bold !min-w-0 !p-0 hover:underline"
  };

  const combinedClassName = `${baseStyle} ${variantStyle[variant]} ${className}`;

  if (props.href) {
    
    const { href, ...linkProps } = rest as Omit<ButtonAsLink, 'children' | 'variant' | 'className'>;

    return (
      <Link 
        href={href} 
        className={combinedClassName} 
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(rest as Omit<ButtonAsButton, 'children' | 'variant' | 'className'>)}
    >
      {children}
    </button>
  );
}