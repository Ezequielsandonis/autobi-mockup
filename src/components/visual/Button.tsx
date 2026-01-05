import React from "react";
import { Button as PrimeButton } from "primereact/button"; // Importa el Button de PrimeReact

interface ButtonProps {
  main?: boolean;
  danger?: boolean;
  none?: boolean;
  height?: string;
  width?: string;
  margin?: string;
  smallHeight?: string;
  smallWidth?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void; // Actualizado
  label?: string; // Propiedad específica de PrimeReact Button
  icon?: string; // Icono de PrimeReact Button
  rest: any; // Propiedades adicionales para PrimeReact Button
}

const Button = ({ main, danger, none, height, width, margin, smallHeight, smallWidth, label, icon, onClick, ...rest }: any) => {
  // Combinar clases dinámicas
  const classNames = [
    "prime-button", // Clase base
    main && "main",
    danger && "danger",
    none && "none",
  ]
    .filter(Boolean)
    .join(" ");

  // Estilos en línea opcionales
  const inlineStyles: React.CSSProperties = {
    height: height || undefined,
    width: width || undefined,
    margin: margin || undefined,
  };

  return (
    <PrimeButton
      className={classNames}
      style={inlineStyles}
      label={label}
      icon={icon}
      onClick={onClick}
      {...rest} // Propiedades adicionales para PrimeReact
    />
  );
};

export default Button;
