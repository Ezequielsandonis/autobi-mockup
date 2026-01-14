import React from "react";
import { colors } from "../../shared/design-system";
import { Button } from "primereact/button";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: string;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon = "pi pi-inbox",
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full mb-6"
        style={{ backgroundColor: colors.primary[50] }}
      >
        <i
          className={`${icon} text-4xl`}
          style={{ color: colors.primary.main }}
        />
      </div>

      <h3
        className="text-xl font-semibold mb-2 text-center"
        style={{ color: colors.text.primary }}
      >
        {title}
      </h3>

      {description && (
        <p
          className="text-center mb-6 max-w-md"
          style={{ color: colors.text.secondary }}
        >
          {description}
        </p>
      )}

      {action && (
        <Button
          label={action.label}
          icon={action.icon}
          onClick={action.onClick}
          style={{
            backgroundColor: colors.primary.main,
            borderColor: colors.primary.main,
          }}
          className="p-button"
        />
      )}
    </div>
  );
};
