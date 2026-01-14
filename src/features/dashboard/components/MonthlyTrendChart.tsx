import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../../shared/design-system";
import { MonthlyData } from "../types";

interface MonthlyTrendChartProps {
  data: MonthlyData[];
  dataKey: keyof MonthlyData;
  label: string;
  formatValue: (value: number) => string;
}

export const MonthlyTrendChart: React.FC<MonthlyTrendChartProps> = React.memo(({
  data,
  dataKey,
  label,
  formatValue,
}) => {
  const chartData = data.map((item) => ({
    periodo: `${item.month} ${item.year}`,
    value: item[dataKey] as number,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis 
          dataKey="periodo"
          stroke={colors.text.secondary}
          style={{ fontSize: "12px" }}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis 
          stroke={colors.text.secondary}
          style={{ fontSize: "12px" }}
          tickFormatter={formatValue}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
          }}
          formatter={(value: number) => [formatValue(value), label]}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={colors.chart.primary}
          strokeWidth={2}
          dot={{ fill: colors.chart.primary, r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

MonthlyTrendChart.displayName = "MonthlyTrendChart";
