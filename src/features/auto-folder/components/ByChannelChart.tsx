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

interface ByChannelData {
  channel: string;
  created: number;
  sent: number;
  views: number;
  orders: number;
  percentage?: number;
}

interface ByChannelChartProps {
  data: ByChannelData[];
}

const chartColors = [
  colors.chart.primary,
  colors.chart.series2,
  colors.chart.series3,
  colors.chart.series4,
  colors.chart.series5,
];

export const ByChannelChart: React.FC<ByChannelChartProps> = React.memo(({ data }) => {
  const chartData = useMemo(() => data.map((item) => ({
    name: item.channel,
    "Revistas Creadas": item.created,
    "Órdenes Generadas": item.orders,
    views: item.views,
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
          style={{ fontSize: "12px" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value: number) => value.toLocaleString("es-AR")}
          labelFormatter={(label) => `Canal: ${label}`}
        />
        <Bar dataKey="Revistas Creadas" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-created-${index}`} fill={chartColors[index % chartColors.length]} />
          ))}
        </Bar>
        <Bar dataKey="Órdenes Generadas" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-orders-${index}`} fill={chartColors[(index + 2) % chartColors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

ByChannelChart.displayName = "ByChannelChart";
