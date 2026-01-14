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

interface Product {
  productId?: string;
  product_id?: string;
  productName?: string;
  product_name?: string;
  brand?: string;
  manufacturer?: string;
  category?: string;
  timesAdded?: number;
  times_added?: number;
  totalValue?: number;
  total_value?: number;
}

interface ProductsChartProps {
  products: Array<Product>;
}

const chartColors = [
  colors.chart.series1,
  colors.chart.series2,
  colors.chart.series3,
  colors.chart.series4,
  colors.chart.series5,
];

export const ProductsChart: React.FC<ProductsChartProps> = React.memo(({ products }) => {
  const data = useMemo(() => {
    return products.slice(0, 10).map((product) => {
      const productName = product.productName ?? product.product_name ?? "";
      const timesAdded = product.timesAdded ?? product.times_added ?? 0;
      const brand = product.brand ?? "";
      const manufacturer = product.manufacturer ?? "";
      const category = product.category ?? "";
      
      return {
        name: productName.length > 25 
          ? `${productName.substring(0, 25)}...` 
          : productName,
        fullName: productName,
        brand,
        manufacturer,
        category,
        "Veces Agregado": timesAdded,
      };
    });
  }, [products]);

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-sm" style={{ color: colors.text.secondary }}>
        No hay productos agregados
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
        <XAxis type="number" stroke={colors.text.secondary} style={{ fontSize: "12px" }} />
        <YAxis 
          dataKey="name" 
          type="category" 
          width={180} 
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
          formatter={(value: number | undefined, name: string | undefined) => [value ?? 0, name ?? ""]}
          labelFormatter={(label) => {
            const product = data.find(p => p.name === label || p.fullName.startsWith(label));
            return product?.fullName ?? label;
          }}
        />
        <Bar dataKey="Veces Agregado" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

ProductsChart.displayName = "ProductsChart";
