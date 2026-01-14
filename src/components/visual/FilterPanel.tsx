import React, { useState, ReactNode, useCallback } from "react";
import { Button } from "primereact/button";
import { colors } from "../../shared/design-system";

export interface FilterPanelProps {
  children: ReactNode;
  onApply?: () => void;
  onClear?: () => void;
  onSave?: () => void;
  defaultExpanded?: boolean;
  className?: string;
  title?: string;
  activeFiltersCount?: number;
}

export const FilterPanel: React.FC<FilterPanelProps> = React.memo(({
  children,
  onApply,
  onClear,
  onSave,
  defaultExpanded = true,
  className = "",
  title = "Filtros",
  activeFiltersCount = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleApply = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onApply?.();
  }, [onApply]);

  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClear?.();
  }, [onClear]);

  const handleSave = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onSave?.();
  }, [onSave]);

  return (
    <div className={`${className}`}>
      {/* Header - Dinámico y fluido */}
      <div
        className="flex items-center justify-between py-3 px-0 cursor-pointer transition-all duration-200"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            style={{ color: colors.text.secondary }}
          >
            <i
              className={`pi ${isExpanded ? "pi-chevron-up" : "pi-chevron-down"} text-sm transition-transform duration-200`}
            />
          </button>
          <span
            className="font-semibold text-base"
            style={{ color: colors.text.primary }}
          >
            {title}
          </span>
          {activeFiltersCount > 0 && (
            <span
              className="flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: colors.primary.main,
                color: colors.primary.contrastText,
              }}
            >
              {activeFiltersCount}
            </span>
          )}
        </div>
        {(onApply || onClear) && isExpanded && (
          <div className="flex items-center gap-2">
            {onClear && (
              <Button
                label="Limpiar"
                icon="pi pi-times"
                onClick={handleClear}
                text
                size="small"
                style={{
                  color: colors.text.secondary,
                }}
              />
            )}
            {onApply && (
              <Button
                label="Aplicar"
                icon="pi pi-check"
                onClick={handleApply}
                size="small"
                style={{
                  backgroundColor: colors.primary.main,
                  borderColor: colors.primary.main,
                }}
              />
            )}
          </div>
        )}
      </div>

      {/* Content - Se expande dinámicamente */}
      {isExpanded && (
        <div
          className="pb-4 space-y-4 transition-all duration-200"
          style={{
            borderTop: `1px solid ${colors.border.light}`,
            paddingTop: "1rem",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
});

FilterPanel.displayName = "FilterPanel";
