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
  matchRate: number;
  suggestions: number;
  matched: number;
  alerts: number;
  reactivated: number;
}

interface SuggestionsVsAlertsChartProps {
  data: TrendData[];
}

export const SuggestionsVsAlertsChart: React.FC<SuggestionsVsAlertsChartProps> = React.memo(({ data }) => {
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
          label={{ value: "Sugerencias", angle: -90, position: "insideLeft", style: { fontSize: "12px", fill: colors.text.secondary } }}
          style={{ fontSize: "12px" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={colors.text.secondary}
          label={{ value: "Alertas", angle: 90, position: "insideRight", style: { fontSize: "12px", fill: colors.text.secondary } }}
          style={{ fontSize: "12px" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value: number, name: string) => [value.toLocaleString("es-AR"), name]}
          labelFormatter={(label) => `Mes: ${label}`}
        />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="suggestions"
          name="Sugerencias Enviadas"
          stroke={colors.chart.primary}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.primary, r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="matched"
          name="Sugerencias Coincididas"
          stroke={colors.chart.success}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.success, r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="alerts"
          name="Alertas Enviadas"
          stroke={colors.chart.warning}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.warning, r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="reactivated"
          name="Clientes Reactivados"
          stroke={colors.chart.series3}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.series3, r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

SuggestionsVsAlertsChart.displayName = "SuggestionsVsAlertsChart";
