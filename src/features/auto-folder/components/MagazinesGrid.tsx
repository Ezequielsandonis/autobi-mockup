import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { colors, spacingPresets } from "../../../shared/design-system";
import { Typography } from "../../../components/visual/Typography";

interface PreviewProduct {
  id: string;
  name: string;
  brand?: string;
  originalPrice: number;
  discountPrice: number;
  discountPercent: number;
  type: "oferta" | "descuento" | "bonificacion" | "promocion" | "combo" | "novedad";
}

interface MagazineData {
  channel: string;
  channelId: string;
  products: PreviewProduct[];
  color: string;
}

interface MagazinesGridProps {
  magazines?: MagazineData[];
}

// Colores para cada canal
const channelColors = {
  kioscos: colors.chart.primary, // Violeta
  autoservicios: colors.chart.series2, // Cyan
  tradicionales: colors.chart.series3, // Esmeralda
};

// Datos de ejemplo para cada canal
const mockMagazinesData: MagazineData[] = [
  {
    channel: "Kioscos",
    channelId: "kioscos",
    color: channelColors.kioscos,
    products: [
      {
        id: "1",
        name: "Coca Cola 2.25L",
        brand: "Coca Cola",
        originalPrice: 1200,
        discountPrice: 960,
        discountPercent: 20,
        type: "oferta",
      },
      {
        id: "2",
        name: "Yerba Playadito 500g",
        brand: "Playadito",
        originalPrice: 850,
        discountPrice: 765,
        discountPercent: 10,
        type: "descuento",
      },
      {
        id: "3",
        name: "Alfajores Havanna x6",
        brand: "Havanna",
        originalPrice: 1800,
        discountPrice: 1440,
        discountPercent: 20,
        type: "promocion",
      },
      {
        id: "4",
        name: "Galletas Oreo 118g",
        brand: "Oreo",
        originalPrice: 650,
        discountPrice: 520,
        discountPercent: 20,
        type: "oferta",
      },
      {
        id: "5",
        name: "Snacks Lays 150g",
        brand: "Lays",
        originalPrice: 850,
        discountPrice: 765,
        discountPercent: 10,
        type: "descuento",
      },
      {
        id: "6",
        name: "Gaseosa Sprite 2.25L",
        brand: "Sprite",
        originalPrice: 1150,
        discountPrice: 920,
        discountPercent: 20,
        type: "promocion",
      },
    ],
  },
  {
    channel: "Autoservicios",
    channelId: "autoservicios",
    color: channelColors.autoservicios,
    products: [
      {
        id: "7",
        name: "Aceite Cocinero 900ml",
        brand: "Cocinero",
        originalPrice: 980,
        discountPrice: 882,
        discountPercent: 10,
        type: "oferta",
      },
      {
        id: "8",
        name: "Arroz Gallo Oro 1kg",
        brand: "Gallo Oro",
        originalPrice: 650,
        discountPrice: 520,
        discountPercent: 20,
        type: "descuento",
      },
      {
        id: "9",
        name: "Combo Limpieza",
        brand: "Varios",
        originalPrice: 3500,
        discountPrice: 2800,
        discountPercent: 20,
        type: "combo",
      },
      {
        id: "10",
        name: "Azúcar Ledesma 1kg",
        brand: "Ledesma",
        originalPrice: 600,
        discountPrice: 540,
        discountPercent: 10,
        type: "descuento",
      },
      {
        id: "11",
        name: "Harina 0000 1kg",
        brand: "Pureza",
        originalPrice: 550,
        discountPrice: 495,
        discountPercent: 10,
        type: "oferta",
      },
      {
        id: "12",
        name: "Aceitunas La Española 200g",
        brand: "La Española",
        originalPrice: 750,
        discountPrice: 600,
        discountPercent: 20,
        type: "promocion",
      },
    ],
  },
  {
    channel: "Tradicionales",
    channelId: "tradicionales",
    color: channelColors.tradicionales,
    products: [
      {
        id: "13",
        name: "Leche La Serenísima 1L",
        brand: "La Serenísima",
        originalPrice: 720,
        discountPrice: 648,
        discountPercent: 10,
        type: "promocion",
      },
      {
        id: "14",
        name: "Fideos Matarazzo 500g",
        brand: "Matarazzo",
        originalPrice: 450,
        discountPrice: 405,
        discountPercent: 10,
        type: "oferta",
      },
      {
        id: "15",
        name: "Queso Cremoso 200g",
        brand: "La Paulina",
        originalPrice: 950,
        discountPrice: 760,
        discountPercent: 20,
        type: "descuento",
      },
      {
        id: "16",
        name: "Manteca 200g",
        brand: "La Serenísima",
        originalPrice: 680,
        discountPrice: 612,
        discountPercent: 10,
        type: "descuento",
      },
      {
        id: "17",
        name: "Tomate Perita 400g",
        brand: "Arcor",
        originalPrice: 550,
        discountPrice: 440,
        discountPercent: 20,
        type: "oferta",
      },
      {
        id: "18",
        name: "Salsa de Tomate 340g",
        brand: "Arcor",
        originalPrice: 480,
        discountPrice: 384,
        discountPercent: 20,
        type: "promocion",
      },
    ],
  },
];

const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    oferta: "OFERTA",
    descuento: "DESC",
    bonificacion: "BONIF",
    promocion: "PROMO",
    combo: "COMBO",
    novedad: "NUEVO",
  };
  return labels[type] || type.toUpperCase();
};

const getTypeColor = (type: string, baseColor: string): string => {
  const typeColors: Record<string, string> = {
    oferta: colors.error.main,
    descuento: colors.success.main,
    bonificacion: colors.warning.main,
    promocion: colors.info.main,
    combo: baseColor,
    novedad: colors.chart.series3,
  };
  return typeColors[type] || baseColor;
};

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Función para obtener URL de imagen placeholder
const getProductImageUrl = (productName: string): string => {
  const productImages: Record<string, string> = {
    "Coca Cola 2.25L": "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=200&h=200&fit=crop",
    "Yerba Playadito 500g": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop",
    "Alfajores Havanna x6": "https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=200&h=200&fit=crop",
    "Galletas Oreo 118g": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop",
    "Snacks Lays 150g": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=200&fit=crop",
    "Gaseosa Sprite 2.25L": "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=200&h=200&fit=crop",
    "Aceite Cocinero 900ml": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop",
    "Arroz Gallo Oro 1kg": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
    "Combo Limpieza": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop",
    "Azúcar Ledesma 1kg": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop",
    "Harina 0000 1kg": "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200&h=200&fit=crop",
    "Aceitunas La Española 200g": "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=200&h=200&fit=crop",
    "Leche La Serenísima 1L": "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop",
    "Fideos Matarazzo 500g": "https://images.unsplash.com/photo-1551462147-85895c8cdb6c?w=200&h=200&fit=crop",
    "Queso Cremoso 200g": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop",
    "Manteca 200g": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop",
    "Tomate Perita 400g": "https://images.unsplash.com/photo-1546090749-dbad288e47a2?w=200&h=200&fit=crop",
    "Salsa de Tomate 340g": "https://images.unsplash.com/photo-1546090749-dbad288e47a2?w=200&h=200&fit=crop",
  };
  return productImages[productName] || `https://via.placeholder.com/200x200?text=${encodeURIComponent(productName.substring(0, 10))}`;
};

export const MagazinesGrid: React.FC<MagazinesGridProps> = React.memo(({ magazines = mockMagazinesData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {magazines.map((magazine) => (
        <Card
          key={magazine.channelId}
          className="shadow-lg"
          style={{
            backgroundColor: colors.background.paper,
            border: `3px solid ${magazine.color}60`,
            borderRadius: "16px",
            overflow: "hidden",
            background: `linear-gradient(180deg, ${colors.background.paper} 0%, ${magazine.color}08 100%)`,
          }}
        >
          {/* Header mejorado */}
          <div
            style={{
              background: `linear-gradient(135deg, ${magazine.color} 0%, ${magazine.color}dd 100%)`,
              padding: spacingPresets.container.md,
              color: colors.text.darkPrimary,
              boxShadow: `0 4px 12px ${magazine.color}40`,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <Typography variant="h5" fontWeight="bold" style={{ color: colors.text.light, fontSize: "20px" }}>
                  Revista {magazine.channel}
                </Typography>
                <Typography variant="caption" style={{ color: colors.text.light, opacity: 0.95, fontSize: "12px" }}>
                  Diciembre 2025
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  padding: `${spacingPresets.component.xs} ${spacingPresets.component.sm}`,
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: "bold",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                PREVIEW
              </div>
            </div>
          </div>

          {/* Productos mejorados */}
          <div style={{ padding: spacingPresets.container.md, backgroundColor: `${magazine.color}05` }}>
            <div className="space-y-3">
              {magazine.products.map((product, index) => (
                <div
                  key={product.id}
                  style={{
                    border: `2px solid ${magazine.color}30`,
                    borderRadius: "12px",
                    padding: spacingPresets.component.md,
                    display: "flex",
                    gap: spacingPresets.component.md,
                    transition: "all 0.3s ease",
                    backgroundColor: colors.background.paper,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    overflow: "visible",
                  }}
                  className="hover:shadow-md"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = magazine.color;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 4px 12px ${magazine.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${magazine.color}30`;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  {/* Badge de oferta destacado */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "12px",
                      backgroundColor: getTypeColor(product.type, magazine.color),
                      color: colors.text.darkPrimary,
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "10px",
                      fontWeight: "bold",
                      boxShadow: `0 2px 6px ${getTypeColor(product.type, magazine.color)}60`,
                      zIndex: 2,
                    }}
                  >
                    {getTypeLabel(product.type)}
                  </div>

                  {/* Imagen mejorada */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: `${magazine.color}10`,
                      borderRadius: "12px",
                      flexShrink: 0,
                      overflow: "hidden",
                      border: `2px solid ${magazine.color}20`,
                      boxShadow: `inset 0 2px 4px ${magazine.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={getProductImageUrl(product.name)}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: ${magazine.color}10;">
                              <i class="pi pi-image" style="font-size: 2rem; color: ${magazine.color}60;"></i>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Info del producto mejorada */}
                  <div className="flex-1 min-w-0" style={{ paddingTop: "4px" }}>
                    {product.brand && (
                      <Typography variant="caption" color={magazine.color} style={{ fontSize: "11px", marginBottom: "4px", fontWeight: "600" }}>
                        {product.brand}
                      </Typography>
                    )}
                    <Typography variant="body2" fontWeight="600" color={colors.text.primary} style={{ fontSize: "13px", lineHeight: "1.4", marginBottom: spacingPresets.component.xs }}>
                      {product.name}
                    </Typography>

                    {/* Precios mejorados */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        style={{ color: colors.success.main, fontSize: "15px" }}
                      >
                        {formatCurrency(product.discountPrice)}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          color: colors.text.disabled,
                          textDecoration: "line-through",
                          fontSize: "11px",
                        }}
                      >
                        {formatCurrency(product.originalPrice)}
                      </Typography>
                      <div
                        style={{
                          background: `linear-gradient(135deg, ${colors.success.main} 0%, ${colors.success.dark} 100%)`,
                          color: colors.text.darkPrimary,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          fontSize: "10px",
                          fontWeight: "bold",
                          boxShadow: `0 2px 4px ${colors.success.main}30`,
                        }}
                      >
                        -{product.discountPercent}% OFF
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer mejorado */}
            <div
              className="flex items-center justify-between gap-2 mt-4 pt-4"
              style={{
                borderTop: `2px solid ${magazine.color}20`,
                paddingTop: spacingPresets.component.md,
                backgroundColor: `${magazine.color}08`,
                margin: `${spacingPresets.container.md} -${spacingPresets.container.md} 0 -${spacingPresets.container.md}`,
                padding: `${spacingPresets.component.md} ${spacingPresets.container.md}`,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  style={{
                    backgroundColor: magazine.color,
                    color: colors.text.darkPrimary,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  {magazine.products.length}
                </div>
                <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "12px", fontWeight: "600" }}>
                  productos
                </Typography>
              </div>
              <div className="flex gap-2">
                <Button
                  icon="pi pi-check"
                  severity="success"
                  size="small"
                  style={{ padding: "8px 12px", borderRadius: "8px" }}
                  aria-label="Aprobar"
                />
                <Button
                  icon="pi pi-pencil"
                  outlined
                  size="small"
                  style={{ padding: "8px 12px", borderRadius: "8px", borderColor: magazine.color, color: magazine.color }}
                  aria-label="Editar"
                />
                <Button
                  icon="pi pi-times"
                  severity="danger"
                  outlined
                  size="small"
                  style={{ padding: "8px 12px", borderRadius: "8px" }}
                  aria-label="Rechazar"
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
});

MagazinesGrid.displayName = "MagazinesGrid";
