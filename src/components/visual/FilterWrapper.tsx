import React from "react";

interface FilterWrapperProps {
  width?: string;
  children: React.ReactNode;
}

export const FilterWrapper: React.FC<FilterWrapperProps> = ({ width = "40%", children }) => {
  return (
    <div className={`h-full flex ml-[100px]`} style={{ width }}>
      {children}
    </div>
  );
};

export default FilterWrapper;
