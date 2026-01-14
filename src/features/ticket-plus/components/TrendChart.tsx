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
  conversionRate: number;
  noTePuedeFaltar: number;
  sugerencias: number;
  totalSent: number;
  totalConverted: number;
}

interface TrendChartProps {
  data: TrendData[];
  year?: number;
}

export const TrendChart: React.FC<TrendChartProps> = React.memo(({ data, year = 2024 }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis 
          dataKey="month" 
          stroke={colors.text.secondary}
          style={{ fontSize: "13px", fontWeight: 500 }}
        />
        <YAxis 
          stroke={colors.text.secondary}
          label={{ 
            value: "Tasa de Conversión (%)", 
            angle: -90, 
            position: "insideLeft", 
            style: { fontSize: "12px", fill: colors.text.secondary } 
          }}
          domain={[0, 40]}
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
            if (name === "Carritos Enviados" || name === "Pedidos Agregados") {
              return [(value ?? 0).toLocaleString('es-AR'), name];
            }
            return [`${value.toFixed(1)}%`, name];
          }}
          labelFormatter={(label) => `Mes: ${label} ${year}`}
        />
        <Legend 
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="conversionRate"
          name="Conversión Total"
          stroke={colors.chart.primary}
          strokeWidth={3}
          dot={{ fill: colors.chart.primary, r: 5 }}
          activeDot={{ r: 7 }}
        />
        <Line
          type="monotone"
          dataKey="noTePuedeFaltar"
          name="No te puede faltar"
          stroke={colors.chart.series6}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.series6, r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="sugerencias"
          name="Sugerencias"
          stroke={colors.chart.series2}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.series2, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

TrendChart.displayName = "TrendChart";
