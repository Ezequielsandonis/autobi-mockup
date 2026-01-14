import React from "react";
import { Card } from "primereact/card";
import { colors, spacingPresets } from "../../../shared/design-system";
import { Typography } from "../../../components/visual/Typography";
import { MetricCard } from "../../ticket-plus/components/MetricCard";
import { mockImpactoAutobimation, mockFeatureSummary, mockComparativeData } from "../store/mockData";
import { formatCurrency, formatNumber, formatPercent } from "../utils/formatters";
import { FeatureSummaryCards } from "./FeatureSummaryCards";
import { ComparativeChart } from "./ComparativeChart";

export const ImpactoAutobimationView: React.FC = () => {
  const { metrics } = mockImpactoAutobimation;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md }}>
      {/* Métricas Comparativas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: spacingPresets.component.md }}>
        <MetricCard
          title="Facturación"
          value={formatCurrency(metrics.facturacion.despues)}
          icon="pi pi-dollar"
          color={colors.chart.primary}
          subtitle={`${formatPercent(metrics.facturacion.cambio)} vs período anterior`}
          trend={{
            value: metrics.facturacion.cambio,
            isPositive: metrics.facturacion.cambio > 0,
          }}
        />
        <MetricCard
          title="Kilos/Litros"
          value={formatNumber(metrics.kilosLitros.despues)}
          icon="pi pi-box"
          color={colors.chart.series2}
          subtitle={`${formatPercent(metrics.kilosLitros.cambio)} vs período anterior`}
          trend={{
            value: metrics.kilosLitros.cambio,
            isPositive: metrics.kilosLitros.cambio > 0,
          }}
        />
        <MetricCard
          title="Bultos"
          value={formatNumber(metrics.bultos.despues)}
          icon="pi pi-th-large"
          color={colors.chart.series3}
          subtitle={`${formatPercent(metrics.bultos.cambio)} vs período anterior`}
          trend={{
            value: metrics.bultos.cambio,
            isPositive: metrics.bultos.cambio > 0,
          }}
        />
        <MetricCard
          title="Órdenes"
          value={formatNumber(metrics.ordenes.despues)}
          icon="pi pi-shopping-cart"
          color={colors.chart.series4}
          subtitle={`${formatPercent(metrics.ordenes.cambio)} vs período anterior`}
          trend={{
            value: metrics.ordenes.cambio,
            isPositive: metrics.ordenes.cambio > 0,
          }}
        />
        <MetricCard
          title="Clientes"
          value={formatNumber(metrics.clientes.despues)}
          icon="pi pi-users"
          color={colors.chart.series5}
          subtitle={`${formatPercent(metrics.clientes.cambio)} vs período anterior`}
          trend={{
            value: metrics.clientes.cambio,
            isPositive: metrics.clientes.cambio > 0,
          }}
        />
      </div>

      {/* Gráfico Comparativo - Evolución de Facturación, Ventas y Rotación */}
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: spacingPresets.section.md }}>
        <Card
          title="Evolución de Facturación"
          className="shadow-sm"
          style={{ backgroundColor: colors.background.paper }}
        >
          <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
            Mejora gracias a Ticket Plus, Empowered Seller y auto-FOLDER
          </Typography>
          <ComparativeChart
            data={mockComparativeData.facturacion}
            title="Facturación"
            dataKey="facturacion"
            formatValue={(value) => formatCurrency(value)}
          />
        </Card>

        <Card
          title="Evolución de Número de Ventas"
          className="shadow-sm"
          style={{ backgroundColor: colors.background.paper }}
        >
          <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
            Incremento en órdenes gracias a las sugerencias
          </Typography>
          <ComparativeChart
            data={mockComparativeData.ventas}
            title="Ventas"
            dataKey="ventas"
            formatValue={(value) => formatNumber(value)}
          />
        </Card>

        <Card
          title="Rotación de Productos"
          className="shadow-sm"
          style={{ backgroundColor: colors.background.paper }}
        >
          <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
            Productos menos vendidos activados por sugerencias
          </Typography>
          <ComparativeChart
            data={mockComparativeData.rotacionProductos}
            title="Rotación"
            dataKey="rotacion"
            formatValue={(value) => `${value} productos`}
          />
        </Card>
      </div>

      {/* Resumen por Feature */}
      <FeatureSummaryCards summary={mockFeatureSummary} />
    </div>
  );
};
