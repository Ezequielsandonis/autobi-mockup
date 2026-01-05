import React from "react";
import Navbar from "./Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/auth";
import { Footer } from "./Footer";

export const PrivateLayout: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // Si por alguna razón se invoca este layout sin autenticación, redirige a login.
  if (!isAuthenticated) return <Navigate to="/login" />;
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
