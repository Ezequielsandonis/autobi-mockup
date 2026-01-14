import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../../shared/design-system";
import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/users/store/userSlice";

export interface SidebarItem {
  label: string;
  icon: string;
  path: string;
  badge?: number;
}

export interface SidebarProps {
  items: SidebarItem[];
}

const SIDEBAR_STORAGE_KEY = "sidebarCollapsed";

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    return stored ? JSON.parse(stored) : true;
  });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useAppSelector(selectUserData);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev: boolean) => !prev);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  }, [location.pathname]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Cuando está colapsado, se expande con hover. Cuando está expandido, permanece expandido.
  const isExpanded = !isCollapsed || isHovered;
  const sidebarWidth = isExpanded ? "280px" : "80px";

  return (
    <>
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-in-out flex flex-col"
        style={{
          width: sidebarWidth,
          backgroundColor: colors.background.dark,
          borderRight: `1px solid ${colors.border.dark}`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo/Brand Section */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{
            borderColor: colors.border.dark,
            minHeight: "72px",
          }}
        >
          {isExpanded && (
            <h1
              className="text-xl font-bold transition-opacity duration-300 tracking-tight"
              style={{ 
                color: colors.primary.light,
                opacity: isExpanded ? 1 : 0,
              }}
            >
                      Cibus Distribuidora
            </h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2.5 rounded-lg hover:opacity-80 transition-opacity flex-shrink-0"
            style={{
              backgroundColor: isExpanded ? colors.background.darkSecondary : "transparent",
              color: colors.text.darkSecondary,
            }}
            aria-label="Toggle sidebar"
          >
            <i className={`pi ${isCollapsed ? "pi-angle-right" : "pi-angle-left"} text-lg`} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {items.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-lg transition-all duration-200 relative ${
                      active ? "" : "hover:opacity-90"
                    }`}
                    style={{
                      backgroundColor: active
                        ? colors.primary.main
                        : "transparent",
                      color: active
                        ? colors.primary.contrastText
                        : colors.text.darkSecondary,
                    }}
                    title={!isExpanded ? item.label : undefined}
                  >
                    <i className={`${item.icon} text-xl flex-shrink-0`} />
                    {isExpanded && (
                      <>
                        <span className="font-medium flex-1 text-left text-base">
                          {item.label}
                        </span>
                        {item.badge !== undefined && item.badge > 0 && (
                          <span
                            className="flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: active
                                ? colors.primary.contrastText
                                : colors.primary.main,
                              color: active
                                ? colors.primary.main
                                : colors.primary.contrastText,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section (opcional, si hay userData) */}
        {userData && isExpanded && (
          <div
            className="p-5 border-t"
            style={{
              borderColor: colors.border.dark,
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-base"
                style={{
                  backgroundColor: colors.primary.main,
                  color: colors.primary.contrastText,
                }}
              >
                {userData.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2) || "U"}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: colors.text.darkPrimary }}
                >
                  {userData.name || "Usuario"}
                </p>
                <p
                  className="text-xs truncate mt-0.5"
                  style={{ color: colors.text.darkSecondary }}
                >
                  {userData.email || ""}
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Spacer para el contenido principal */}
      <div style={{ width: sidebarWidth }} className="flex-shrink-0 transition-all duration-300 ease-in-out" />
    </>
  );
};
