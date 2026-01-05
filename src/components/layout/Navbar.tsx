import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { MenuItem } from "primereact/menuitem";
import { selectUserData } from "../../features/users/store/userSlice";
import { selectIsAuthenticated, useLogoutMutation } from "../../features/auth";
import { UserRoles } from "../../features/users";
import XonaLogoImage from "../../assets/logo.png";
import Button from "../visual/Button";
import { PrimeIcons } from "primereact/api";

export const Navbar: React.FC = () => {
  const isCurrentAutenticated = useSelector(selectIsAuthenticated);
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  // Función de logout
  const handleLogOut = () => {
    logout(userData?.id);
  };

  const getInitials = (name: string) => {
    const letters = name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");

    if (letters.length > 2) {
      return `${letters[0]}${letters[letters.length - 1]}`;
    }
    return letters;
  };

  // Items principales del Menubar para FitTracker
  const items: MenuItem[] = [
    isCurrentAutenticated && {
      label: "Dashboard",
      icon: "pi pi-home",
      command: () => navigate("/dashboard"),
    },
    isCurrentAutenticated && {
      label: "Registro Diario",
      icon: "pi pi-calendar-plus",
      command: () => navigate("/daily-log"),
    },
    isCurrentAutenticated && {
      label: "Menu 1",
      icon: "pi pi-chart-bar",
      items: [
        {
          label: "Sub Menu 1",
          icon: "pi pi-database",
          command: () => navigate("/sub-menu-1"),
        },
        {
          label: "Sub Menu 2",
          icon: "pi pi-list",
          command: () => navigate("/sub-menu-2"),
        },
      ],
    },
    isCurrentAutenticated && {
      label: "Menu 2",
      icon: "pi pi-calendar",
      command: () => navigate("/menu-2"),
    },
    isCurrentAutenticated && {
      label: "Menu 3",
      icon: "pi pi-heart",
      command: () => navigate("/menu-3"),
    },
    isCurrentAutenticated && {
      label: "Menu 4",
      icon: "pi pi-chart-line",
      command: () => navigate("/menu-4"),
    },
    isCurrentAutenticated && {
      label: "Mi Perfil",
      icon: "pi pi-user",
      command: () => navigate("/profile"),
    },
    isCurrentAutenticated && {
      label: "Salir",
      icon: "pi pi-power-off",
      command: handleLogOut,
    },
  ].filter(Boolean) as MenuItem[];

  // Logo FitTracker - Al hacer click va al dashboard si está autenticado, sino a login
  const start = (
    <></>
    // <img
    //   alt="FitTracker Logo"
    //   src={XonaLogoImage}
    //   className="mr-2 cursor-pointer h-9 w-auto mr-10"
    //   onClick={() => navigate(isCurrentAutenticated ? "/dashboard" : "/login")}
    // />
  );

  // Sección derecha del Menubar (nombre + avatar + logout)
  const end = isCurrentAutenticated ? (
    <div className="flex items-center gap-2">
      <span className="hidden md:inline text-white">{userData?.name}</span>
      <Avatar label={userData?.name ? getInitials(userData.name) : ""} shape="circle" size="large" />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button label="Iniciar Sesión" icon="pi pi-sign-in" onClick={() => navigate("/login")} className="p-button-sm p-button-outlined" />
    </div>
  );

  return <Menubar model={items} start={start} end={end} />;
};

export default Navbar;
