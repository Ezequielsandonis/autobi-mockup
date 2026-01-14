import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../../shared/design-system";
import { TicketPlusMetrics } from "../types";

interface ConversionChartProps {
  metrics: TicketPlusMetrics;
}

export const ConversionChart: React.FC<ConversionChartProps> = React.memo(({ metrics }) => {
  const noTePuedeFaltar = metrics.noTePuedeFaltar ?? metrics.no_te_puede_faltar;
  const sugerencias = metrics.sugerencias;
  
  const data = useMemo(() => [
    {
      name: "No te puede faltar",
      Enviados: noTePuedeFaltar?.totalSent ?? noTePuedeFaltar?.total_sent ?? 0,
      Convertidos: noTePuedeFaltar?.totalConverted ?? noTePuedeFaltar?.total_converted ?? 0,
      "Tasa %": noTePuedeFaltar?.conversionRate ?? noTePuedeFaltar?.conversion_rate ?? 0,
    },
    {
      name: "Sugerencias",
      Enviados: sugerencias?.totalSent ?? sugerencias?.total_sent ?? 0,
      Convertidos: sugerencias?.totalConverted ?? sugerencias?.total_converted ?? 0,
      "Tasa %": sugerencias?.conversionRate ?? sugerencias?.conversion_rate ?? 0,
    },
  ], [noTePuedeFaltar, sugerencias]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis dataKey="name" stroke={colors.text.secondary} />
        <YAxis stroke={colors.text.secondary} />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
          }}
        />
        <Legend />
        <Bar dataKey="Enviados" fill={colors.chart.primary} />
        <Bar dataKey="Convertidos" fill={colors.chart.success} />
      </BarChart>
    </ResponsiveContainer>
  );
});

ConversionChart.displayName = "ConversionChart";
