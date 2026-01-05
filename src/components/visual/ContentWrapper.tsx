import React from "react";

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className=" h-[80%] ml-[2%]">{children}</div>;
};

export default ContentWrapper;
