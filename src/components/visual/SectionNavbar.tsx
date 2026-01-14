import React, { ReactNode } from "react";
import { colors, spacingPresets } from "../../shared/design-system";
import { Button } from "primereact/button";

export interface SectionNavbarAction {
  label: string;
  icon?: string;
  onClick: () => void;
  severity?: "primary" | "secondary" | "success" | "warning" | "danger";
  outlined?: boolean;
}

export interface SectionNavbarProps {
  title: string;
  subtitle?: string;
  actions?: SectionNavbarAction[];
  breadcrumbs?: ReactNode;
  className?: string;
}

export const SectionNavbar: React.FC<SectionNavbarProps> = React.memo(({
  title,
  subtitle,
  actions = [],
  breadcrumbs,
  className = "",
}) => {
  return (
    <div
      className={`border-b ${className}`}
      style={{
        borderColor: colors.border.light,
        backgroundColor: colors.background.paper,
        padding: spacingPresets.container.md,
      }}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="mb-3">
          {breadcrumbs}
        </div>
      )}

      {/* Title and Actions */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1
            className="text-2xl font-bold mb-1"
            style={{ color: colors.text.primary }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Actions */}
        {actions.length > 0 && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {actions.map((action, index) => (
              <Button
                key={index}
                label={action.label}
                icon={action.icon}
                onClick={action.onClick}
                outlined={action.outlined}
                severity={action.severity || "info"}
                size="small"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

SectionNavbar.displayName = "SectionNavbar";
