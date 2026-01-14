import React from "react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { colors, spacingPresets } from "../../../shared/design-system";
import { Typography } from "../../../components/visual/Typography";
import { Alert } from "../types";

interface AlertsPreviewProps {
  alerts?: Alert[];
}

const getStatusSeverity = (status?: string): "success" | "warning" | "info" | "danger" => {
  const severities: Record<string, "success" | "warning" | "info" | "danger"> = {
    reactivated: "success",
    viewed: "info",
    sent: "warning",
    pending: "danger",
  };
  return severities[status || ""] || "warning";
};

const getStatusLabel = (status?: string): string => {
  const labels: Record<string, string> = {
    reactivated: "Reactivado",
    viewed: "Visto",
    sent: "Enviado",
    pending: "Pendiente",
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

const mockAlerts: Alert[] = [
  {
    id: "1",
    sellerName: "Juan Pérez",
    clientName: "Kiosco La Esquina",
    daysWithoutPurchase: 45,
    lastPurchaseDate: new Date(2025, 9, 15),
    status: "reactivated",
    reactivated: true,
    sentAt: new Date(2025, 10, 1),
    reactivatedAt: new Date(2025, 10, 5),
  },
  {
    id: "2",
    sellerName: "María González",
    clientName: "Almacén El Progreso",
    daysWithoutPurchase: 60,
    lastPurchaseDate: new Date(2025, 9, 1),
    status: "pending",
    reactivated: false,
    sentAt: new Date(2025, 10, 1),
  },
  {
    id: "3",
    sellerName: "Carlos Rodríguez",
    clientName: "Autoservicio Central",
    daysWithoutPurchase: 35,
    lastPurchaseDate: new Date(2025, 9, 20),
    status: "viewed",
    reactivated: false,
    sentAt: new Date(2025, 10, 25),
    viewedAt: new Date(2025, 10, 26),
  },
  {
    id: "4",
    sellerName: "Ana Martínez",
    clientName: "Kiosco El Buen Precio",
    daysWithoutPurchase: 50,
    lastPurchaseDate: new Date(2025, 9, 10),
    status: "reactivated",
    reactivated: true,
    sentAt: new Date(2025, 10, 30),
    reactivatedAt: new Date(2025, 11, 3),
  },
];

export const AlertsPreview: React.FC<AlertsPreviewProps> = React.memo(({ 
  alerts = mockAlerts 
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
              backgroundColor: `${colors.warning.main}15`,
              color: colors.warning.main,
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <i className="pi pi-bell" />
          </div>
          <div className="flex-1" style={{ minWidth: 0 }}>
            <Typography variant="body1" fontWeight="600" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.xs, fontSize: "16px", wordBreak: "break-word" }}>
              Alertas de Clientes Inactivos
            </Typography>
            <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "14px", wordBreak: "break-word" }}>
              El sistema envía automáticamente alertas a los vendedores cuando un cliente de su ruta no realiza compras después de un tiempo determinado. Esto permite que el vendedor visite al cliente y lo reactive antes de perderlo.
            </Typography>
          </div>
        </div>
      </Card>

      {/* Lista de Alertas en Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ minWidth: 0, width: "100%" }}>
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className="shadow-md"
            style={{
              backgroundColor: colors.background.paper,
              border: `2px solid ${alert.reactivated ? colors.success.main + "30" : colors.warning.main + "30"}`,
              borderRadius: "12px",
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* Header de la Alerta */}
            <div
              style={{
                marginBottom: spacingPresets.component.sm,
                paddingBottom: spacingPresets.component.sm,
                borderBottom: `1px solid ${colors.border.light}`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag
                  value={getStatusLabel(alert.status)}
                  severity={getStatusSeverity(alert.status)}
                  style={{ fontSize: "12px" }}
                />
                {alert.reactivated && (
                  <Tag
                    value="Reactivado"
                    severity="success"
                    style={{ fontSize: "12px" }}
                  />
                )}
              </div>
              <Typography variant="body1" fontWeight="600" color={colors.text.primary} style={{ marginBottom: "4px", fontSize: "15px", wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
                {alert.clientName || alert.client_name || "N/A"}
              </Typography>
              <Typography variant="body2" color={colors.text.secondary} style={{ fontSize: "13px", wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
                {alert.sellerName || alert.seller_name || "N/A"}
              </Typography>
            </div>

            {/* Información de la Alerta */}
            <div
              style={{
                backgroundColor: alert.reactivated ? `${colors.success.main}08` : `${colors.warning.main}08`,
                padding: spacingPresets.component.sm,
                borderRadius: "8px",
                border: `1px solid ${alert.reactivated ? colors.success.main + "20" : colors.warning.main + "20"}`,
                marginBottom: spacingPresets.component.sm,
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="caption" color={colors.text.secondary} style={{ display: "block", marginBottom: "4px", fontSize: "11px" }}>
                    Días sin comprar
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" style={{ color: alert.daysWithoutPurchase && alert.daysWithoutPurchase > 40 ? colors.error.main : colors.warning.main, fontSize: "18px" }}>
                    {alert.daysWithoutPurchase || alert.days_without_purchase || 0}
                  </Typography>
                </div>
                <div className="text-right">
                  <Typography variant="caption" color={colors.text.secondary} style={{ display: "block", marginBottom: "4px", fontSize: "11px" }}>
                    Última compra
                  </Typography>
                  <Typography variant="body2" color={colors.text.primary} style={{ fontSize: "13px" }}>
                    {formatDate(alert.lastPurchaseDate || alert.last_purchase_date)}
                  </Typography>
                </div>
              </div>
              {alert.reactivated && (
                <div
                  style={{
                    marginTop: spacingPresets.component.sm,
                    paddingTop: spacingPresets.component.sm,
                    borderTop: `1px solid ${colors.success.main}20`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <i className="pi pi-check-circle" style={{ color: colors.success.main, fontSize: "16px" }} />
                    <Typography variant="body2" color={colors.success.dark} fontWeight="600" style={{ fontSize: "13px" }}>
                      Cliente reactivado
                    </Typography>
                  </div>
                </div>
              )}
            </div>

            {/* Footer con fecha */}
            <div
              style={{
                paddingTop: spacingPresets.component.sm,
                borderTop: `1px solid ${colors.border.light}`,
              }}
            >
              <Typography variant="caption" color={colors.text.secondary} style={{ fontSize: "11px" }}>
                Enviado: {formatDate(alert.sentAt || alert.sent_at)}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
});

AlertsPreview.displayName = "AlertsPreview";
