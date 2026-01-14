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

interface ProductRotationData {
  month: string;
  [key: string]: string | number;
}

interface ProductRotationChartProps {
  data: ProductRotationData[];
}

// Información de productos para tooltips
const productInfo: Record<string, { brand: string; manufacturer: string; category: string }> = {
  "Coca Cola 2.25L": { brand: "Coca Cola", manufacturer: "Coca Cola Company", category: "Bebidas" },
  "Aceite Cocinero 900ml": { brand: "Cocinero", manufacturer: "Aceitera General Deheza", category: "Aceites" },
  "Arroz Gallo Oro 1kg": { brand: "Gallo Oro", manufacturer: "Molinos Río de la Plata", category: "Almacén" },
  "Yerba Playadito 500g": { brand: "Playadito", manufacturer: "Molinos Río de la Plata", category: "Yerbas" },
};

export const ProductRotationChart: React.FC<ProductRotationChartProps> = React.memo(({ data }) => {
  interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      color: string;
    }>;
    label?: string;
  }

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: colors.background.paper,
            border: `1px solid ${colors.border.light}`,
            borderRadius: "8px",
            padding: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Mes: {label}</p>
          {payload.map((entry, index) => {
            const info = productInfo[entry.name] || {};
            return (
              <div key={index} style={{ marginBottom: "8px" }}>
                <p style={{ color: entry.color, fontWeight: "bold", marginBottom: "4px" }}>
                  {entry.name}: {entry.value} veces
                </p>
                {info.brand && (
                  <p style={{ fontSize: "11px", color: colors.text.secondary, margin: "2px 0" }}>
                    Marca: {info.brand}
                  </p>
                )}
                {info.manufacturer && (
                  <p style={{ fontSize: "11px", color: colors.text.secondary, margin: "2px 0" }}>
                    Fabricante: {info.manufacturer}
                  </p>
                )}
                {info.category && (
                  <p style={{ fontSize: "11px", color: colors.text.secondary, margin: "2px 0" }}>
                    Categoría: {info.category}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

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
            value: "Veces Agregado", 
            angle: -90, 
            position: "insideLeft", 
            style: { fontSize: "12px", fill: colors.text.secondary } 
          }}
          style={{ fontSize: "12px" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="Coca Cola 2.25L"
          name="Coca Cola 2.25L"
          stroke={colors.chart.primary}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.primary, r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Aceite Cocinero 900ml"
          name="Aceite Cocinero 900ml"
          stroke={colors.chart.series2}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.series2, r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Arroz Gallo Oro 1kg"
          name="Arroz Gallo Oro 1kg"
          stroke={colors.chart.series3}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.series3, r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Yerba Playadito 500g"
          name="Yerba Playadito 500g"
          stroke={colors.chart.series4}
          strokeWidth={2.5}
          dot={{ fill: colors.chart.series4, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

ProductRotationChart.displayName = "ProductRotationChart";
