import React from "react";
import { Outlet } from "react-router-dom";

export const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
