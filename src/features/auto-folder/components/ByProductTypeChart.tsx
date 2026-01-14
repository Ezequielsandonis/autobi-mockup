import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { colors } from "../../../shared/design-system";

interface ByProductTypeData {
  type: string;
  total: number;
  percentage: number;
  color?: string;
}

interface ByProductTypeChartProps {
  data: ByProductTypeData[];
}

export const ByProductTypeChart: React.FC<ByProductTypeChartProps> = React.memo(({ data }) => {
  const chartData = useMemo(() => data.map((item) => ({
    name: item.type,
    "Cantidad": item.total,
    percentage: item.percentage,
    color: item.color || colors.chart.primary,
  })), [data]);

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-sm" style={{ color: colors.text.secondary }}>
        No hay datos disponibles
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis 
          dataKey="name" 
          stroke={colors.text.secondary}
          style={{ fontSize: "12px" }}
        />
        <YAxis
          stroke={colors.text.secondary}
          label={{ value: "Cantidad de Productos", angle: -90, position: "insideLeft", style: { fontSize: "12px", fill: colors.text.secondary } }}
          style={{ fontSize: "12px" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value: number, name: string) => {
            if (name === "Cantidad") {
              return [value.toLocaleString("es-AR"), name];
            }
            return [`${value.toFixed(1)}%`, name];
          }}
          labelFormatter={(label) => `Tipo: ${label}`}
        />
        <Bar dataKey="Cantidad" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

ByProductTypeChart.displayName = "ByProductTypeChart";
