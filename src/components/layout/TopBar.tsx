import React, { useRef, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { colors } from "../../shared/design-system";
import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/users/store/userSlice";
import { useLogoutMutation } from "../../features/auth";

export interface TopBarProps {
  onSidebarToggle?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onSidebarToggle }) => {
  const navigate = useNavigate();
  const userData = useAppSelector(selectUserData);
  const [logout] = useLogoutMutation();
  const menu = useRef<Menu>(null);

  const handleLogout = useCallback(async () => {
    if (userData?.id) {
      try {
        await logout(userData.id).unwrap();
        navigate("/login");
      } catch (error) {
        console.error("Error en logout:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [userData?.id, logout, navigate]);

  const menuItems: MenuItem[] = useMemo(() => [
    {
      label: "Mi Perfil",
      icon: "pi pi-user",
      command: () => navigate("/profile"),
    },
    {
      label: "Configuración",
      icon: "pi pi-cog",
      command: () => {
        // Navegar a configuración cuando esté disponible
      },
    },
    {
      separator: true,
    },
    {
      label: "Cerrar Sesión",
      icon: "pi pi-sign-out",
      command: handleLogout,
    },
  ], [navigate, handleLogout]);

  const getUserInitials = useCallback((name?: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }, []);

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-6 h-16 border-b"
      style={{
        backgroundColor: colors.background.paper,
        borderColor: colors.border.light,
      }}
    >
      {/* Left Section - Logo/Toggle */}
      <div className="flex items-center gap-4">
        {onSidebarToggle && (
          <button
            onClick={onSidebarToggle}
            className="p-2 rounded-lg hover:opacity-80 transition-opacity lg:hidden"
            style={{
              color: colors.text.secondary,
            }}
            aria-label="Toggle sidebar"
          >
            <i className="pi pi-bars text-xl" />
          </button>
        )}
        <div className="flex items-center gap-2">
          <span
            className="text-2xl font-bold hidden md:block tracking-tight"
            style={{ 
              color: colors.primary.main,
              background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
                  Cibus Distribuidora
          </span>
        </div>
      </div>

      {/* Right Section - User Menu */}
      <div className="flex items-center gap-4">
        {userData && (
          <>
            <div className="hidden md:block text-right">
              <p
                className="text-sm font-medium"
                style={{ color: colors.text.primary }}
              >
                {userData.name || "Usuario"}
              </p>
              <p
                className="text-xs"
                style={{ color: colors.text.secondary }}
              >
                {userData.email || ""}
              </p>
            </div>

            <button
              onClick={(e) => menu.current?.toggle(e)}
              className="flex items-center gap-2 p-2 rounded-lg hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: colors.background.light,
              }}
              aria-label="User menu"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm"
                style={{
                  backgroundColor: colors.primary.main,
                  color: colors.primary.contrastText,
                }}
              >
                {getUserInitials(userData.name)}
              </div>
              <i
                className="pi pi-chevron-down hidden md:block"
                style={{ color: colors.text.secondary }}
              />
            </button>

            <Menu
              ref={menu}
              model={menuItems}
              popup
              className="mt-2"
            />
          </>
        )}
      </div>
    </header>
  );
};
