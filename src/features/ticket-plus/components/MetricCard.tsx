import React from "react";
import { Card } from "primereact/card";
import { colors } from "../../../shared/design-system";

export interface MetricCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const MetricCard: React.FC<MetricCardProps> = React.memo(({
  title,
  value,
  icon,
  color,
  subtitle,
  trend,
}) => {
  return (
    <Card className="shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div
            className="text-sm font-medium mb-2"
            style={{ color: colors.text.secondary }}
          >
            {title}
          </div>
          <div
            className="text-3xl font-bold mb-1"
            style={{ color: colors.text.primary }}
          >
            {value}
          </div>
          {subtitle && (
            <div
              className="text-xs"
              style={{ color: colors.text.disabled }}
            >
              {subtitle}
            </div>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <i
                className={`pi ${trend.isPositive ? "pi-arrow-up" : "pi-arrow-down"} text-xs`}
                style={{
                  color: trend.isPositive ? colors.success.main : colors.error.main,
                }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: trend.isPositive ? colors.success.main : colors.error.main,
                }}
              >
                {Math.abs(trend.value)}%
              </span>
            </div>
          )}
        </div>
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg"
          style={{ backgroundColor: `${color}15` }}
        >
          <i className={`${icon} text-2xl`} style={{ color }} />
        </div>
      </div>
    </Card>
  );
});

MetricCard.displayName = "MetricCard";
