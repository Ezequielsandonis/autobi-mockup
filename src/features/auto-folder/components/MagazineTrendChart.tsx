import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../../shared/design-system";

interface TrendData {
  month: string;
  created: number;
  sent: number;
  views: number;
  orders: number;
  orderValue: number;
}

interface MagazineTrendChartProps {
  data: TrendData[];
}

export const MagazineTrendChart: React.FC<MagazineTrendChartProps> = React.memo(({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis
          dataKey="month"
          stroke={colors.text.secondary}
          style={{ fontSize: "12px" }}
        />
        <YAxis
          yAxisId="left"
          stroke={colors.text.secondary}
          label={{ value: "Revistas / Órdenes", angle: -90, position: "insideLeft", style: { fontSize: "12px", fill: colors.text.secondary } }}
          style={{ fontSize: "12px" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={colors.text.secondary}
          label={{ value: "Visualizaciones", angle: 90, position: "insideRight", style: { fontSize: "12px", fill: colors.text.secondary } }}
          style={{ fontSize: "12px" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value: number | undefined, name: string) => {
            if (name === "Valor de Órdenes") {
              return [value ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 }).format(value) : "$0", name];
            }
            return [value.toLocaleString("es-AR"), name];
          }}
          labelFormatter={(label) => `Mes: ${label}`}
        />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="created"
          name="Revistas Creadas"
          stroke={colors.chart.primary}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.primary, r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="orders"
          name="Órdenes Generadas"
          stroke={colors.chart.success}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.success, r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="views"
          name="Visualizaciones"
          stroke={colors.chart.info}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.info, r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

MagazineTrendChart.displayName = "MagazineTrendChart";
