import React from "react";
import { Outlet } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "../../features/auth";

export const ProtectedRoute: React.FC = () => {
  // Saltando autenticación para desarrollo sin backend
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
};
