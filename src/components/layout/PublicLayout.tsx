// src/components/layout/PublicLayout.tsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
