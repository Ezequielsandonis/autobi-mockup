import React from "react";

interface InputWrapperProps {
  width?: string;
  margin?: string;
  display?: string;
  direction?: any;
  align?: string;
  justify?: string;
  color?: string;
  children: React.ReactNode;
  className?: string;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({ width = "25%", margin, display = "block", direction = "block", align = "block", justify = "block", color, children, className = "" }) => {
  return (
    <div
      className={`mr-4 self-center ${className || ""}`}
      style={{
        width,
        margin,
        display,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        color,
      }}
    >
      {children}
    </div>
  );
};
