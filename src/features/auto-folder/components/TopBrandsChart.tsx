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

interface BrandData {
  brand: string;
  total: number;
  percentage: number;
}

interface TopBrandsChartProps {
  data: BrandData[];
}

const chartColors = [
  colors.chart.primary,
  colors.chart.series2,
  colors.chart.series3,
  colors.chart.series4,
  colors.chart.series5,
];

export const TopBrandsChart: React.FC<TopBrandsChartProps> = React.memo(({ data }) => {
  const chartData = useMemo(() => data.slice(0, 10).map((item) => ({
    name: item.brand,
    cantidad: item.total,
    percentage: item.percentage,
  })), [data]);

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-sm" style={{ color: colors.text.secondary }}>
        No hay datos disponibles
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis type="number" stroke={colors.text.secondary} style={{ fontSize: "12px" }} />
        <YAxis
          dataKey="name"
          type="category"
          width={120}
          stroke={colors.text.secondary}
          style={{ fontSize: "11px" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value: number) => [value.toLocaleString("es-AR"), "Productos"]}
        />
        <Bar dataKey="cantidad" radius={[0, 4, 4, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

TopBrandsChart.displayName = "TopBrandsChart";
