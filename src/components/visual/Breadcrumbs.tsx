import React from "react";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../shared/design-system";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
}) => {
  const location = useLocation();

  return (
    <nav className={`flex items-center space-x-2 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = item.path === location.pathname;

        if (isLast || !item.path) {
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <i
                  className="pi pi-angle-right text-sm"
                  style={{ color: colors.text.disabled }}
                />
              )}
              <span
                className="font-medium"
                style={{
                  color: isActive ? colors.primary.main : colors.text.primary,
                }}
              >
                {item.label}
              </span>
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <i
                className="pi pi-angle-right text-sm"
                style={{ color: colors.text.disabled }}
              />
            )}
            <Link
              to={item.path}
              className="hover:underline transition-all duration-200"
              style={{ color: colors.text.secondary }}
            >
              {item.label}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};
