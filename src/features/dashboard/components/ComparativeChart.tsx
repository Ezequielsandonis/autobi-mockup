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

interface ComparativeDataPoint {
  month: string;
  antes: number;
  despues: number;
}

interface ComparativeChartProps {
  data: ComparativeDataPoint[];
  title: string;
  dataKey: string;
  unit?: string;
  formatValue?: (value: number) => string;
}

export const ComparativeChart: React.FC<ComparativeChartProps> = React.memo(({
  data,
  title,
  dataKey,
  unit = "",
  formatValue,
}) => {
  const defaultFormatter = (value: number) => {
    if (formatValue) return formatValue(value);
    return `${value.toLocaleString("es-AR")}${unit}`;
  };

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
          style={{ fontSize: "12px" }}
          tickFormatter={defaultFormatter}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value: number) => defaultFormatter(value)}
          labelFormatter={(label) => `Mes: ${label}`}
        />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="antes"
          name="Antes de Autobimation"
          stroke={colors.chart.error}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.error, r: 4 }}
          activeDot={{ r: 6 }}
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="despues"
          name="Con Autobimation"
          stroke={colors.chart.success}
          strokeWidth={3}
          dot={{ fill: colors.chart.success, r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

ComparativeChart.displayName = "ComparativeChart";
