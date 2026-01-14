import React from "react";
import { Card } from "primereact/card";
import { colors } from "../../../shared/design-system";
import { FeatureSummary } from "../types";
import { formatCurrency, formatNumber, formatPercent } from "../utils/formatters";

interface FeatureSummaryCardsProps {
  summary: FeatureSummary;
}

export const FeatureSummaryCards: React.FC<FeatureSummaryCardsProps> = ({ summary }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold" style={{ color: colors.text.primary }}>
        Resumen por Feature
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket Plus */}
        {summary.ticketPlus && (
          <Card title="Ticket Plus" className="shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Carritos Enviados</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.ticketPlus.carritosEnviados)}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Pedidos Agregados</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.ticketPlus.pedidosAgregados)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2" style={{ borderColor: colors.border.light }}>
                <span style={{ color: colors.text.secondary }}>Tasa de Conversión</span>
                <span style={{ color: colors.primary.main, fontWeight: "bold", fontSize: "1.25rem" }}>
                  {formatPercent(summary.ticketPlus.tasaConversion)}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Valor Agregado</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatCurrency(summary.ticketPlus.valorAgregado)}
                </span>
              </div>
            </div>
          </Card>
        )}

        {/* Auto-FOLDER */}
        {summary.autoFolder && (
          <Card title="Auto-FOLDER" className="shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Revistas Enviadas</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.autoFolder.revistasEnviadas)}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Órdenes Generadas</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.autoFolder.ordenesGeneradas)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2" style={{ borderColor: colors.border.light }}>
                <span style={{ color: colors.text.secondary }}>Tasa de Apertura</span>
                <span style={{ color: colors.primary.main, fontWeight: "bold", fontSize: "1.25rem" }}>
                  {formatPercent(summary.autoFolder.tasaApertura)}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Aperturas de Órdenes</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.autoFolder.aperturasOrdenes)}
                </span>
              </div>
            </div>
          </Card>
        )}

        {/* Empowered Seller */}
        {summary.empoweredSeller && (
          <Card title="Empowered Seller" className="shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Sugerencias Enviadas</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.empoweredSeller.sugerenciasEnviadas)}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Coincidencias</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.empoweredSeller.coincidencias)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2" style={{ borderColor: colors.border.light }}>
                <span style={{ color: colors.text.secondary }}>Tasa de Coincidencia</span>
                <span style={{ color: colors.primary.main, fontWeight: "bold", fontSize: "1.25rem" }}>
                  {formatPercent(summary.empoweredSeller.tasaCoincidencia)}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.text.secondary }}>Alertas Enviadas</span>
                <span style={{ color: colors.text.primary, fontWeight: "bold" }}>
                  {formatNumber(summary.empoweredSeller.alertasEnviadas)}
                </span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
