import React from "react";

interface ButtonWrapperProps {
  width?: string;
  children: React.ReactNode;
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ width = "40%", children }) => {
  return (
    <div
      className="h-full flex justify-end items-center"
      style={{
        width,
      }}
    >
      {children}
    </div>
  );
};
