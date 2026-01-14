import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { useAppSelector } from "../../app/hooks";
// import { selectIsAuthenticated } from "../../features/auth/store/authSlice";
import { Sidebar, SidebarItem } from "./Sidebar";
import { TopBar } from "./TopBar";
import { colors } from "../../shared/design-system";
import GlobalToast from "../visual/GlobalToast";
import GlobalLoader from "../visual/GlobalLoader";

// Configuración de items del sidebar
const sidebarItems: SidebarItem[] = [
  {
    label: "Ticket Plus",
    icon: "pi pi-shopping-cart",
    path: "/ticket-plus",
  },
  {
    label: "Dashboard",
    icon: "pi pi-home",
    path: "/dashboard",
  },
  {
    label: "auto-FOLDER",
    icon: "pi pi-folder",
    path: "/auto-folder",
  },
  {
    label: "Empowered Seller",
    icon: "pi pi-users",
    path: "/empowered-seller",
  },
  {
    label: "Perfil",
    icon: "pi pi-user",
    path: "/profile",
  },
];

export const PrivateLayout: React.FC = () => {
  // Saltando autenticación para desarrollo sin backend
  // const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Si no está autenticado, redirige a login
  // if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.background.light as string }}>
      <GlobalToast />
      <GlobalLoader />
      
      {/* Layout Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar items={sidebarItems} />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* TopBar */}
          <TopBar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
