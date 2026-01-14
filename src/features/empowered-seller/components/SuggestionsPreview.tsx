import React from "react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { colors, spacingPresets } from "../../../shared/design-system";
import { Typography } from "../../../components/visual/Typography";
import { EmpoweredSellerSuggestion } from "../types";

interface SuggestionsPreviewProps {
  suggestions?: EmpoweredSellerSuggestion[];
}

const getTypeLabel = (type?: string): string => {
  const labels: Record<string, string> = {
    habitual: "Habitual",
    faltante: "Faltante",
    nuevo: "Nuevo",
    complementario: "Complementario",
  };
  return labels[type || ""] || "Sugerencia";
};

const getTypeColor = (type?: string): string => {
  const typeColors: Record<string, string> = {
    habitual: colors.chart.primary,
    faltante: colors.chart.series2,
    nuevo: colors.chart.series3,
    complementario: colors.chart.series4,
  };
  return typeColors[type || ""] || colors.text.secondary;
};


const getStatusSeverity = (status?: string): "success" | "warning" | "info" | "danger" => {
  const severities: Record<string, "success" | "warning" | "info" | "danger"> = {
    matched: "success",
    viewed: "info",
    sent: "warning",
    not_matched: "danger",
  };
  return severities[status || ""] || "info";
};

const getStatusLabel = (status?: string): string => {
  const labels: Record<string, string> = {
    matched: "Comprado",
    viewed: "Visto",
    sent: "Enviado",
    not_matched: "No Comprado",
  };
  return labels[status || ""] || status || "";
};

const formatDate = (date?: string | Date): string => {
  if (!date) return "N/A";
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
};

const mockSuggestions: EmpoweredSellerSuggestion[] = [
  {
    id: "1",
    sellerName: "Juan Pérez",
    clientName: "Kiosco San Martín",
    suggestionType: "habitual",
    status: "matched",
    matched: true,
    sentAt: new Date(2025, 11, 1),
    matchedAt: new Date(2025, 11, 2),
    products: [
      { productName: "Coca Cola 2.25L", reason: "Compra habitual - Última compra hace 15 días" },
      { productName: "Aceite Cocinero 900ml", reason: "Compra habitual - Última compra hace 20 días" },
      { productName: "Yerba Playadito 500g", reason: "Compra habitual - Última compra hace 12 días" },
    ],
  },
  {
    id: "2",
    sellerName: "María González",
    clientName: "Autoservicio El Sol",
    suggestionType: "faltante",
    status: "matched",
    matched: true,
    sentAt: new Date(2025, 11, 5),
    matchedAt: new Date(2025, 11, 6),
    products: [
      { productName: "Arroz Gallo Oro 1kg", reason: "No compra desde hace 3 meses (compraba mensualmente)" },
      { productName: "Azúcar Ledesma 1kg", reason: "No compra desde hace 2 meses (compraba mensualmente)" },
    ],
  },
  {
    id: "3",
    sellerName: "Carlos Rodríguez",
    clientName: "Almacén El Progreso",
    suggestionType: "nuevo",
    status: "viewed",
    matched: false,
    sentAt: new Date(2025, 11, 10),
    viewedAt: new Date(2025, 11, 10),
    products: [
      { productName: "Leche La Serenísima 1L", reason: "Nunca compró pero clientes similares sí lo compran" },
      { productName: "Queso Cremoso 200g", reason: "Nunca compró pero podría incorporar" },
    ],
  },
  {
    id: "4",
    sellerName: "Ana Martínez",
    clientName: "Kiosco La Esquina",
    suggestionType: "complementario",
    status: "sent",
    matched: false,
    sentAt: new Date(2025, 11, 12),
    products: [
      { productName: "Galletas Oreo 118g", reason: "Complementa productos de almacén que ya compra" },
    ],
  },
];

export const SuggestionsPreview: React.FC<SuggestionsPreviewProps> = React.memo(({ 
  suggestions = mockSuggestions 
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md, minWidth: 0, width: "100%" }}>
      {/* Explicación */}
      <Card
        className="shadow-sm"
        style={{ backgroundColor: colors.background.paper, minWidth: 0 }}
      >
        <div className="flex items-start gap-3" style={{ minWidth: 0 }}>
          <div
            style={{
              backgroundColor: `${colors.info.main}15`,
              color: colors.info.main,
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <i className="pi pi-info-circle" />
          </div>
          <div className="flex-1" style={{ minWidth: 0 }}>
            <Typography variant="body1" fontWeight="600" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.sm, fontSize: "16px", wordBreak: "break-word" }}>
              Sugerencias Automáticas para Vendedores
            </Typography>
            <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md, fontSize: "14px", wordBreak: "break-word" }}>
              El sistema genera automáticamente sugerencias personalizadas para cada cliente basándose en su historial de compras. Estas sugerencias se envían por WhatsApp o email a los vendedores antes de sus visitas, empoderándolos con información estratégica.
            </Typography>
            
            <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.component.sm }}>
              <Typography variant="body2" fontWeight="600" color={colors.text.primary} style={{ fontSize: "14px", marginBottom: spacingPresets.component.xs }}>
                Criterios para la Generación de Sugerencias:
              </Typography>
              
              <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.component.xs, paddingLeft: spacingPresets.component.sm }}>
                <div style={{ display: "flex", gap: spacingPresets.component.xs }}>
                  <span style={{ color: colors.primary.main, fontWeight: "bold" }}>•</span>
                  <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "13px", wordBreak: "break-word" }}>
                    <strong style={{ color: colors.text.primary }}>Productos Habituales:</strong> Productos que el cliente compra regularmente y que están próximos a agotarse según su frecuencia de compra histórica.
                  </Typography>
                </div>
                
                <div style={{ display: "flex", gap: spacingPresets.component.xs }}>
                  <span style={{ color: colors.primary.main, fontWeight: "bold" }}>•</span>
                  <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "13px", wordBreak: "break-word" }}>
                    <strong style={{ color: colors.text.primary }}>Productos Faltantes:</strong> Productos que el cliente compraba habitualmente pero que no ha comprado en las últimas 4 compras, identificando oportunidades de recompra.
                  </Typography>
                </div>
                
                <div style={{ display: "flex", gap: spacingPresets.component.xs }}>
                  <span style={{ color: colors.primary.main, fontWeight: "bold" }}>•</span>
                  <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "13px", wordBreak: "break-word" }}>
                    <strong style={{ color: colors.text.primary }}>Productos Nuevos:</strong> Productos que el cliente nunca ha comprado pero que clientes similares sí compran, identificando oportunidades de expansión de su mix.
                  </Typography>
                </div>
                
                <div style={{ display: "flex", gap: spacingPresets.component.xs }}>
                  <span style={{ color: colors.primary.main, fontWeight: "bold" }}>•</span>
                  <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "13px", wordBreak: "break-word" }}>
                    <strong style={{ color: colors.text.primary }}>Productos Complementarios:</strong> Productos que complementan lo que el cliente ya compra, basándose en patrones de compra de clientes similares.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Lista de Sugerencias en Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ minWidth: 0, width: "100%" }}>
        {suggestions.map((suggestion) => (
          <Card
            key={suggestion.id}
            className="shadow-md"
            style={{
              backgroundColor: colors.background.paper,
              border: `2px solid ${getTypeColor(suggestion.suggestionType)}30`,
              borderRadius: "12px",
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* Header de la Sugerencia */}
            <div
              style={{
                marginBottom: spacingPresets.component.sm,
                paddingBottom: spacingPresets.component.sm,
                borderBottom: `1px solid ${colors.border.light}`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag
                  value={getTypeLabel(suggestion.suggestionType)}
                  severity={suggestion.matched ? "success" : "info"}
                  style={{
                    backgroundColor: getTypeColor(suggestion.suggestionType),
                    color: colors.text.darkPrimary,
                    border: "none",
                    fontSize: "12px",
                  }}
                />
                <Tag
                  value={getStatusLabel(suggestion.status)}
                  severity={getStatusSeverity(suggestion.status)}
                  style={{ fontSize: "12px" }}
                />
              </div>
              <Typography variant="body1" fontWeight="600" color={colors.text.primary} style={{ marginBottom: "4px", fontSize: "15px", wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
                {suggestion.clientName || suggestion.client_name || "N/A"}
              </Typography>
              <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "13px", wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
                {suggestion.sellerName || suggestion.seller_name || "N/A"}
              </Typography>
            </div>

            {/* Productos Sugeridos */}
            <div className="space-y-2">
              {suggestion.products?.slice(0, 2).map((product, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: colors.background.light as string,
                    padding: spacingPresets.component.xs,
                    borderRadius: "6px",
                    border: `1px solid ${colors.border.light}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-2" style={{ minWidth: 0 }}>
                    <div className="flex-1" style={{ minWidth: 0 }}>
                      <Typography variant="body2" fontWeight="600" color={colors.text.primary} style={{ fontSize: "14px", wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {product.productName || product.product_name || "Producto"}
                      </Typography>
                    </div>
                    {suggestion.matched && (
                      <i className="pi pi-check-circle" style={{ color: colors.success.main, flexShrink: 0, fontSize: "16px" }} />
                    )}
                  </div>
                </div>
              ))}
              {suggestion.products && suggestion.products.length > 2 && (
                <Typography variant="caption" color={colors.text.secondary} style={{ fontSize: "12px", fontStyle: "italic" }}>
                  +{suggestion.products.length - 2} producto{suggestion.products.length - 2 > 1 ? "s" : ""} más
                </Typography>
              )}
            </div>

            {/* Footer con fechas */}
            <div
              style={{
                marginTop: spacingPresets.component.sm,
                paddingTop: spacingPresets.component.sm,
                borderTop: `1px solid ${colors.border.light}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption" color={colors.text.secondary} style={{ fontSize: "11px" }}>
                {formatDate(suggestion.sentAt || suggestion.sent_at)}
              </Typography>
              {suggestion.matchedAt || suggestion.matched_at ? (
                <Typography variant="caption" color={colors.success.main} style={{ fontSize: "11px", fontWeight: "600" }}>
                  ✓ Comprado
                </Typography>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
});

SuggestionsPreview.displayName = "SuggestionsPreview";
