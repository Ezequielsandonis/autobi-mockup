import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { colors, spacingPresets } from "../../../shared/design-system";
import { Typography } from "../../../components/visual/Typography";
import { GeneralView } from "./GeneralView";
import { MacroView } from "./MacroView";
import { MicroView } from "./MicroView";
import { MetricCard } from "../../ticket-plus/components/MetricCard";
import { mockGeneralMetrics } from "../store/mockData";
import { formatCurrency, formatNumber, formatKilosLitros } from "../utils/formatters";

type ViewType = "general" | "macro" | "micro";

export const AnalisisHistoricoView: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>("general");

  const viewOptions = [
    { label: "General", value: "general" },
    { label: "Macro", value: "macro" },
    { label: "Micro", value: "micro" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md }}>
      {/* Selector de Vista */}
      <div className="flex items-center" style={{ 
        backgroundColor: colors.background.paper, 
        padding: spacingPresets.container.sm, 
        borderRadius: "8px",
        gap: spacingPresets.component.md 
      }}>
        <Typography variant="body2" fontWeight="600" color={colors.text.primary}>
          Vista:
        </Typography>
        <Dropdown
          value={viewType}
          onChange={(e) => setViewType(e.value)}
          options={viewOptions}
          optionLabel="label"
          optionValue="value"
          style={{ minWidth: "200px" }}
        />
        <div className="flex-1" />
        <Typography variant="body2" color={colors.text.secondary}>
          Período: Últimos 36 meses (sin Autobimation)
        </Typography>
      </div>

      {/* Métricas Rápidas - Solo en Vista General */}
      {viewType === "general" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: spacingPresets.component.md }}>
          <MetricCard
            title="Facturación"
            value={formatCurrency(mockGeneralMetrics.facturacion)}
            icon="pi pi-dollar"
            color={colors.chart.primary}
            subtitle="Promedio mensual"
          />
          <MetricCard
            title="Kilos/Litros"
            value={formatKilosLitros(mockGeneralMetrics.kilosLitros)}
            icon="pi pi-box"
            color={colors.chart.series2}
            subtitle="Total"
          />
          <MetricCard
            title="Bultos"
            value={formatNumber(mockGeneralMetrics.bultos)}
            icon="pi pi-th-large"
            color={colors.chart.series3}
            subtitle="Total"
          />
          <MetricCard
            title="Órdenes"
            value={formatNumber(mockGeneralMetrics.ordenes)}
            icon="pi pi-shopping-cart"
            color={colors.chart.series4}
            subtitle="Total"
          />
          <MetricCard
            title="Clientes"
            value={formatNumber(mockGeneralMetrics.clientes)}
            icon="pi pi-users"
            color={colors.chart.series5}
            subtitle="Activos"
          />
        </div>
      )}

      {/* Contenido según Vista */}
      {viewType === "general" && <GeneralView />}
      {viewType === "macro" && <MacroView />}
      {viewType === "micro" && <MicroView />}
    </div>
  );
};
