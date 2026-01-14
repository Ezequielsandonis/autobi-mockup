import React from "react";
import { Card } from "primereact/card";
import { colors, spacingPresets } from "../../../shared/design-system";
import { Typography } from "../../../components/visual/Typography";

interface ProfitableProduct {
  id: string;
  name: string;
  brand?: string;
  margin: number; // Margen de ganancia en %
  revenue: number; // Ingresos totales
  category?: string;
}

interface MostProfitableProductsProps {
  products?: ProfitableProduct[];
}

const mockProfitableProducts: ProfitableProduct[] = [
  {
    id: "1",
    name: "Producto Premium A",
    brand: "Marca Premium",
    margin: 45.2,
    revenue: 2500000,
    category: "Lácteos",
  },
  {
    id: "2",
    name: "Producto Premium B",
    brand: "Marca Premium",
    margin: 42.8,
    revenue: 2300000,
    category: "Bebidas",
  },
  {
    id: "3",
    name: "Producto Premium C",
    brand: "Marca Premium",
    margin: 40.5,
    revenue: 2100000,
    category: "Almacén",
  },
  {
    id: "4",
    name: "Producto Premium D",
    brand: "Marca Premium",
    margin: 38.9,
    revenue: 1950000,
    category: "Limpieza",
  },
  {
    id: "5",
    name: "Producto Premium E",
    brand: "Marca Premium",
    margin: 36.2,
    revenue: 1800000,
    category: "Bebidas",
  },
];

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const MostProfitableProducts: React.FC<MostProfitableProductsProps> = React.memo(({ 
  products = mockProfitableProducts 
}) => {
  return (
    <Card
      title="Productos Más Rentables (Para ofrecer en visita)"
      className="shadow-sm"
      style={{ backgroundColor: colors.background.paper }}
    >
      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
        Estos productos tienen mayor margen de ganancia. Los vendedores los ofrecerán durante la visita para maximizar el valor de la orden.
      </Typography>
      <div className="space-y-2">
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{
              border: `1px solid ${colors.border.light}`,
              borderRadius: "8px",
              padding: spacingPresets.component.sm,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: index < 3 ? `${colors.warning.main}08` : "transparent",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: index < 3 ? colors.warning.main : colors.text.disabled,
                  color: colors.text.darkPrimary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </div>
              <div>
                <Typography variant="body2" fontWeight="600" color={colors.text.primary}>
                  {product.name}
                </Typography>
                {product.brand && (
                  <Typography variant="caption" color={colors.text.secondary}>
                    {product.brand}
                  </Typography>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <Typography variant="caption" color={colors.text.secondary} style={{ display: "block" }}>
                  Margen
                </Typography>
                <Typography variant="body2" fontWeight="bold" style={{ color: colors.success.main }}>
                  {formatPercent(product.margin)}
                </Typography>
              </div>
              <div className="text-right">
                <Typography variant="caption" color={colors.text.secondary} style={{ display: "block" }}>
                  Ingresos
                </Typography>
                <Typography variant="body2" fontWeight="bold" color={colors.text.primary}>
                  {formatCurrency(product.revenue)}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
});

MostProfitableProducts.displayName = "MostProfitableProducts";
