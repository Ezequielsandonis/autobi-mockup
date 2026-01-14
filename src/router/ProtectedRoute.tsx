import React from "react";
import { Outlet } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
// import { selectIsAuthenticated } from "../features/auth/store/authSlice";

interface ProtectedRouteProps {
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo = "/login" }) => {
  // Saltando autenticación para desarrollo sin backend
  // const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // if (!isAuthenticated) {
  //   return <Navigate to={redirectTo} replace />;
  // }

  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
