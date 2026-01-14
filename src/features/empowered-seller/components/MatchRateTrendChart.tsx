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

interface MatchRateTrendChartProps {
  data: TrendData[];
}

export const MatchRateTrendChart: React.FC<MatchRateTrendChartProps> = React.memo(({ data }) => {
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
          stroke={colors.text.secondary}
          label={{ value: "Tasa de Coincidencia (%)", angle: -90, position: "insideLeft", style: { fontSize: "12px", fill: colors.text.secondary } }}
          domain={[0, 30]}
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
            if (name === "Tasa de Coincidencia") {
              return [`${(value ?? 0).toFixed(1)}%`, name];
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
          type="monotone"
          dataKey="matchRate"
          name="Tasa de Coincidencia"
          stroke={colors.chart.primary}
          strokeWidth={3}
          dot={{ fill: colors.chart.primary, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

MatchRateTrendChart.displayName = "MatchRateTrendChart";
