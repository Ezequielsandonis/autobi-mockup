import React from "react";

const HeaderDashboard = ({ children, justifyContent = "space-between", heigth = "6rem", filters, filterOpen, setFilterOpen }: any) => {
  return (
    <div
      className={`w-full flex flex-col transition-all duration-300 ease-in-out`}
      style={{
        height: !filterOpen ? heigth : `calc(${heigth}*2)`,
        justifyContent: justifyContent,
      }}
    >
      <div
        className={"flex align-items-center"}
        style={{
          height: !filterOpen ? "100%" : `50%`,
          width: "100%",
          justifyContent: justifyContent,
        }}
      >
        {children}
      </div>
      {filterOpen ? <div className="w-full h-1/2">{filters}</div> : ""}
    </div>
  );
};

export default HeaderDashboard;
