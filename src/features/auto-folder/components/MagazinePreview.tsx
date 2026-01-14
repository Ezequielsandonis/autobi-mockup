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
  image?: string;
}

interface MagazinePreviewProps {
  channel?: string;
  products?: PreviewProduct[];
}

// Datos de ejemplo para el preview
const mockPreviewProducts: PreviewProduct[] = [
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
    name: "Aceite Cocinero 900ml",
    brand: "Cocinero",
    originalPrice: 980,
    discountPrice: 882,
    discountPercent: 10,
    type: "descuento",
  },
  {
    id: "3",
    name: "Arroz Gallo Oro 1kg",
    brand: "Gallo Oro",
    originalPrice: 650,
    discountPrice: 520,
    discountPercent: 20,
    type: "oferta",
  },
  {
    id: "4",
    name: "Yerba Playadito 500g",
    brand: "Playadito",
    originalPrice: 850,
    discountPrice: 765,
    discountPercent: 10,
    type: "descuento",
  },
  {
    id: "5",
    name: "Combo Limpieza",
    brand: "Varios",
    originalPrice: 3500,
    discountPrice: 2800,
    discountPercent: 20,
    type: "combo",
  },
  {
    id: "6",
    name: "Leche La Serenísima 1L",
    brand: "La Serenísima",
    originalPrice: 720,
    discountPrice: 648,
    discountPercent: 10,
    type: "promocion",
  },
];

const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    oferta: "OFERTA",
    descuento: "DESCUENTO",
    bonificacion: "BONIFICACIÓN",
    promocion: "PROMOCIÓN",
    combo: "COMBO",
    novedad: "NUEVO",
  };
  return labels[type] || type.toUpperCase();
};

const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    oferta: colors.error.main,
    descuento: colors.success.main,
    bonificacion: colors.warning.main,
    promocion: colors.info.main,
    combo: colors.chart.primary,
    novedad: colors.chart.series3,
  };
  return typeColors[type] || colors.text.secondary;
};

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Función para obtener URL de imagen placeholder según el producto
const getProductImageUrl = (productName: string): string => {
  // En producción, estas serían URLs reales de imágenes
  // Por ahora usamos un servicio de placeholder o URLs de ejemplo
  const productImages: Record<string, string> = {
    "Coca Cola 2.25L": "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=200&h=200&fit=crop",
    "Aceite Cocinero 900ml": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop",
    "Arroz Gallo Oro 1kg": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
    "Yerba Playadito 500g": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop",
    "Combo Limpieza": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop",
    "Leche La Serenísima 1L": "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop",
  };
  return productImages[productName] || `https://via.placeholder.com/200x200?text=${encodeURIComponent(productName)}`;
};

export const MagazinePreview: React.FC<MagazinePreviewProps> = React.memo(({ 
  channel = "Kioscos",
  products = mockPreviewProducts 
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md }}>
      {/* Sección de Explicación - Criterios de Generación */}
      <Card
        className="shadow-sm"
        style={{ backgroundColor: colors.background.paper }}
      >
        <div style={{ padding: spacingPresets.container.md }}>
          <div className="flex items-start gap-3" style={{ marginBottom: spacingPresets.component.md }}>
            <div
              style={{
                backgroundColor: `${colors.info.main}15`,
                color: colors.info.main,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <i className="pi pi-info-circle text-xl" />
            </div>
            <div className="flex-1">
              <Typography variant="h6" fontWeight="bold" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.xs }}>
                Criterios de Generación de la Revista
              </Typography>
              <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                Esta revista ha sido generada automáticamente por la IA basándose en los siguientes criterios:
              </Typography>
              <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.component.sm }}>
                <div className="flex items-start gap-2">
                  <i className="pi pi-check-circle text-sm" style={{ color: colors.success.main, marginTop: "4px" }} />
                  <Typography variant="body2" color={colors.text.secondary}>
                    <strong>Análisis de últimos 36 meses:</strong> Productos más vendidos en el canal {channel}
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <i className="pi pi-check-circle text-sm" style={{ color: colors.success.main, marginTop: "4px" }} />
                  <Typography variant="body2" color={colors.text.secondary}>
                    <strong>Estacionalidad:</strong> Productos recomendados para la época del año (Diciembre)
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <i className="pi pi-check-circle text-sm" style={{ color: colors.success.main, marginTop: "4px" }} />
                  <Typography variant="body2" color={colors.text.secondary}>
                    <strong>Rotación de productos:</strong> Enfoque en productos de alta rotación para este canal
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <i className="pi pi-check-circle text-sm" style={{ color: colors.success.main, marginTop: "4px" }} />
                  <Typography variant="body2" color={colors.text.secondary}>
                    <strong>Preferencias del canal:</strong> Productos típicos y más demandados por {channel}
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <i className="pi pi-check-circle text-sm" style={{ color: colors.success.main, marginTop: "4px" }} />
                  <Typography variant="body2" color={colors.text.secondary}>
                    <strong>Estrategia comercial:</strong> Ofertas y descuentos calculados para maximizar conversión
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Revista Preview */}
      <Card
        className="shadow-lg"
        style={{ 
          backgroundColor: colors.background.paper,
          border: `1px solid ${colors.border.light}`,
        }}
      >
        {/* Header de la Revista */}
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%)`,
            padding: spacingPresets.container.lg,
            borderRadius: "8px 8px 0 0",
            margin: `-${spacingPresets.container.md} -${spacingPresets.container.md} ${spacingPresets.container.lg} -${spacingPresets.container.md}`,
            color: colors.text.light,
          }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Typography variant="h4" fontWeight="bold" style={{ color: colors.text.light, marginBottom: spacingPresets.component.xs }}>
                Revista {channel}
              </Typography>
              <Typography variant="body2" style={{ color: colors.text.light, opacity: 0.9 }}>
                Ofertas especiales - Diciembre 2025
              </Typography>
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: `${spacingPresets.component.sm} ${spacingPresets.component.md}`,
                borderRadius: "8px",
              }}
            >
              <Typography variant="body2" fontWeight="600" style={{ color: colors.text.light }}>
                PREVIEW - Pendiente de Aprobación
              </Typography>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: colors.background.paper,
                border: `2px solid ${colors.border.light}`,
                borderRadius: "16px",
                padding: spacingPresets.container.md,
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              className="hover:shadow-lg"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary.main;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border.light;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Badge de Tipo */}
              <div
                style={{
                  position: "absolute",
                  top: spacingPresets.component.sm,
                  right: spacingPresets.component.sm,
                  backgroundColor: getTypeColor(product.type),
                  color: colors.text.light,
                  padding: `${spacingPresets.component.xs} ${spacingPresets.component.sm}`,
                  borderRadius: "6px",
                  zIndex: 1,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="caption" fontWeight="bold" style={{ color: colors.text.light, fontSize: "10px" }}>
                  {getTypeLabel(product.type)}
                </Typography>
              </div>

              {/* Imagen del Producto */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  backgroundColor: colors.background.light,
                  borderRadius: "12px",
                  marginBottom: spacingPresets.component.md,
                  border: `1px solid ${colors.border.light}`,
                  overflow: "hidden",
                  position: "relative",
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
                    // Fallback a placeholder si la imagen falla
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: ${colors.background.light};">
                          <i class="pi pi-image" style="font-size: 3rem; color: ${colors.text.disabled};"></i>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Información del Producto */}
              <div>
                {product.brand && (
                  <Typography variant="caption" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.xs, display: "block" }}>
                    {product.brand}
                  </Typography>
                )}
                <Typography variant="body1" fontWeight="600" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.sm, minHeight: "48px" }}>
                  {product.name}
                </Typography>

                {/* Precios */}
                <div className="flex items-baseline gap-2" style={{ marginBottom: spacingPresets.component.sm }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={{ color: colors.success.main }}
                  >
                    {formatCurrency(product.discountPrice)}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: colors.text.disabled,
                      textDecoration: "line-through",
                    }}
                  >
                    {formatCurrency(product.originalPrice)}
                  </Typography>
                </div>

                {/* Badge de Descuento */}
                <div
                  style={{
                    backgroundColor: `${colors.success.main}15`,
                    color: colors.success.dark,
                    padding: `${spacingPresets.component.xs} ${spacingPresets.component.sm}`,
                    borderRadius: "6px",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="caption" fontWeight="bold" style={{ color: colors.success.dark }}>
                    -{product.discountPercent}% OFF
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer con Acciones */}
        <div
          className="flex items-center justify-between flex-wrap gap-4"
          style={{
            marginTop: spacingPresets.container.xl,
            paddingTop: spacingPresets.container.md,
            borderTop: `2px solid ${colors.border.light}`,
          }}
        >
          <Typography variant="body2" color={colors.text.secondary}>
            Revisa los productos, precios y descuentos antes de aprobar y enviar la revista.
          </Typography>
          <div className="flex gap-2 flex-wrap">
            <Button
              label="Aprobar y Enviar"
              icon="pi pi-check"
              severity="success"
              size="small"
            />
            <Button
              label="Editar"
              icon="pi pi-pencil"
              outlined
              size="small"
            />
            <Button
              label="Rechazar"
              icon="pi pi-times"
              severity="danger"
              outlined
              size="small"
            />
          </div>
        </div>
      </Card>
    </div>
  );
});

MagazinePreview.displayName = "MagazinePreview";
