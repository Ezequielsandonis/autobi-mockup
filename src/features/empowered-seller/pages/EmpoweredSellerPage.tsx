import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { TabView, TabPanel } from "primereact/tabview";
import { colors, spacingPresets } from "../../../shared/design-system";
import { SectionNavbar } from "../../../components/visual/SectionNavbar";
import { EmptyState } from "../../../components/visual/EmptyState";
import { SkeletonCard } from "../../../components/visual/Skeleton";
import { Typography } from "../../../components/visual/Typography";
import { MetricCard } from "../../ticket-plus/components/MetricCard";
import { mockEmpoweredSellerMetrics, mockMatchRateTrend2025, mockMatchRateTrend2026, mockMatchByType } from "../store/mockData";
import { formatCurrency, formatNumber, formatPercent, formatHours } from "./utils";
import { MatchByTypeChart } from "../components/MatchByTypeChart";
import { MatchRateTrendChart } from "../components/MatchRateTrendChart";
import { SuggestionsVsAlertsChart } from "../components/SuggestionsVsAlertsChart";
import { SuggestionsPreview } from "../components/SuggestionsPreview";
import { AlertsPreview } from "../components/AlertsPreview";
import {
  getTotalSuggestions,
  getTotalSent,
  getTotalViewed,
  getTotalMatched,
  getMatchRate,
  getViewRate,
  getTotalAlerts,
  getAlertsViewed,
  getClientsReactivated,
  getReactivationRate,
  getActiveSellers,
  getSellersUsingSuggestions,
  getAdoptionRate,
  getAverageOrderValueWithSuggestions,
  getAverageOrderValueWithoutSuggestions,
  getValueIncrease,
  getAverageResponseTime,
  getClientsWithSuggestions,
  getAverageSuggestionsPerClient,
} from "../utils/helpers";

export const EmpoweredSellerPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // TODO: Cuando el backend esté listo, usar el hook:
  // const { data, isLoading, error } = useGetEmpoweredSellerMetricsQuery({ year: selectedYear });
  // const metrics = data?.result;

  // Por ahora, usar datos mock para desarrollo
  const isLoading = false;
  const error = null;
  const metrics = mockEmpoweredSellerMetrics;

  // Datos según el año seleccionado
  const trendData = selectedYear === 2025 ? mockMatchRateTrend2025 : mockMatchRateTrend2026;

  // Opciones de años disponibles
  const yearOptions = [
    { label: "2025", value: 2025 },
    { label: "2026", value: 2026 },
  ];

  // TODO: Cuando el backend esté listo, manejar errores:
  if (error) {
    return (
      <div className="p-6">
        <SectionNavbar
          title="Empowered Seller"
          subtitle="Empodera a tus vendedores con información estratégica para cada cliente"
        />
        <EmptyState
          title="Error al cargar datos"
          description="No se pudieron cargar las métricas. Por favor, intenta nuevamente."
          icon="pi pi-exclamation-triangle"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* SectionNavbar */}
      <SectionNavbar
        title="Empowered Seller"
        subtitle="Sugerencias automáticas basadas en estadísticas reales que empoderan a los vendedores y hacen sentir especiales a los clientes"
      />

      {/* Content */}
      <div className="flex-1 overflow-hidden" style={{ backgroundColor: colors.background.light }}>
        <TabView
          activeIndex={activeTabIndex}
          onTabChange={(e) => setActiveTabIndex(e.index)}
          className="h-full"
        >
          {/* Tab: Métricas */}
          <TabPanel header="Métricas">
            <div className="flex-1 overflow-y-auto" style={{ backgroundColor: colors.background.light, padding: spacingPresets.container.md }}>
        <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md }}>
          {/* Filtro de Año */}
          <div className="flex items-center" style={{ 
            backgroundColor: colors.background.paper, 
            padding: spacingPresets.container.sm, 
            borderRadius: "8px",
            gap: spacingPresets.component.md 
          }}>
            <Typography variant="body2" fontWeight="600" color={colors.text.primary}>
              Período (Año):
            </Typography>
            <Dropdown
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.value)}
              options={yearOptions}
              optionLabel="label"
              optionValue="value"
              placeholder="Seleccionar año"
              style={{ minWidth: "150px" }}
            />
            <div className="flex-1" />
            <Typography variant="body2" color={colors.text.secondary}>
              Mostrando datos del año {selectedYear}
            </Typography>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Metrics */}
          {!isLoading && metrics && (
            <>
              {/* Métricas Principales - Sugerencias */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: spacingPresets.component.md }}>
                <MetricCard
                  title="Sugerencias Enviadas"
                  value={formatNumber(getTotalSent(metrics))}
                  icon="pi pi-send"
                  color={colors.chart.primary}
                  subtitle={`${formatNumber(getTotalViewed(metrics))} visualizadas (${formatPercent(getViewRate(metrics))})`}
                />
                <MetricCard
                  title="Coincidencias"
                  value={formatNumber(getTotalMatched(metrics))}
                  icon="pi pi-check-circle"
                  color={colors.chart.success}
                  subtitle={`${formatPercent(getMatchRate(metrics))} tasa de coincidencia`}
                />
                <MetricCard
                  title="Alertas Enviadas"
                  value={formatNumber(getTotalAlerts(metrics))}
                  icon="pi pi-bell"
                  color={colors.chart.warning}
                  subtitle={`${formatNumber(getClientsReactivated(metrics))} clientes reactivados (${formatPercent(getReactivationRate(metrics))})`}
                />
                <MetricCard
                  title="Tasa de Adopción"
                  value={formatPercent(getAdoptionRate(metrics))}
                  icon="pi pi-users"
                  color={colors.chart.series2}
                  subtitle={`${formatNumber(getSellersUsingSuggestions(metrics))} de ${formatNumber(getActiveSellers(metrics))} vendedores`}
                />
              </div>

              {/* Métricas de Valor */}
              <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: spacingPresets.component.md }}>
                <Card
                  title="Valor Promedio de Pedidos"
                  className="shadow-sm"
                  style={{ backgroundColor: colors.background.paper }}
                >
                  <div className="flex items-center justify-around py-4">
                    <div className="text-center">
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.xs }}>
                        Con Sugerencias
                      </Typography>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: colors.chart.success }}
                      >
                        {formatCurrency(getAverageOrderValueWithSuggestions(metrics))}
                      </div>
                    </div>
                    <div className="text-center">
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.xs }}>
                        Sin Sugerencias
                      </Typography>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: colors.text.secondary }}
                      >
                        {formatCurrency(getAverageOrderValueWithoutSuggestions(metrics))}
                      </div>
                    </div>
                    <div className="text-center">
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.xs }}>
                        Incremento
                      </Typography>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: colors.chart.success }}
                      >
                        {formatPercent(getValueIncrease(metrics))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card
                  title="Eficiencia"
                  className="shadow-sm"
                  style={{ backgroundColor: colors.background.paper }}
                >
                  <div className="flex items-center justify-around py-4">
                    <div className="text-center">
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.xs }}>
                        Tiempo Promedio de Respuesta
                      </Typography>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: colors.chart.info }}
                      >
                        {formatHours(getAverageResponseTime(metrics))}
                      </div>
                      <Typography variant="caption" color={colors.text.secondary} style={{ fontSize: "12px" }}>
                        Entre sugerencia y compra
                      </Typography>
                    </div>
                  </div>
                </Card>

                <Card
                  title="Cobertura"
                  className="shadow-sm"
                  style={{ backgroundColor: colors.background.paper }}
                >
                  <div className="flex items-center justify-around py-4">
                    <div className="text-center">
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.xs }}>
                        Clientes con Sugerencias
                      </Typography>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: colors.chart.primary }}
                      >
                        {formatNumber(getClientsWithSuggestions(metrics))}
                      </div>
                      <Typography variant="caption" color={colors.text.secondary}>
                        {formatNumber(getAverageSuggestionsPerClient(metrics))} sugerencias por cliente
                      </Typography>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Gráfico de Tasa de Coincidencia */}
              <Card
                title={`Evolución de la Tasa de Coincidencia - Año ${selectedYear}`}
                className="shadow-sm"
                style={{ backgroundColor: colors.background.paper }}
              >
                <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                  Tendencia de coincidencias de sugerencias a lo largo del año. Muestra cómo las sugerencias fueron siendo más efectivas mes a mes.
                </Typography>
                <MatchRateTrendChart data={trendData} />
              </Card>

              {/* Gráficos Comparativos */}
              <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: spacingPresets.section.md }}>
                <Card
                  title="Coincidencias por Tipo de Sugerencia"
                  className="shadow-sm"
                  style={{ backgroundColor: colors.background.paper }}
                >
                  <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                    Efectividad de cada tipo de sugerencia según su tasa de coincidencia.
                  </Typography>
                  <MatchByTypeChart data={mockMatchByType} />
                </Card>

                <Card
                  title={`Sugerencias vs Alertas - Año ${selectedYear}`}
                  className="shadow-sm"
                  style={{ backgroundColor: colors.background.paper }}
                >
                  <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                    Evolución de sugerencias enviadas/coincididas y alertas enviadas/clientes reactivados.
                  </Typography>
                  <SuggestionsVsAlertsChart data={trendData} />
                </Card>
              </div>
            </>
          )}

          {/* Empty State */}
          {!isLoading && !metrics && (
            <EmptyState
              title="No hay datos disponibles"
              description="No se encontraron métricas para los filtros seleccionados."
              icon="pi pi-chart-line"
            />
          )}
        </div>
            </div>
          </TabPanel>

          {/* Tab: Vista Previa */}
          <TabPanel header="Vista Previa">
            <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ backgroundColor: colors.background.light, padding: spacingPresets.container.md }}>
              <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.lg, minWidth: 0 }}>
                {/* Sugerencias */}
                <div>
                  <Typography variant="h5" fontWeight="bold" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.md, fontSize: "20px" }}>
                    Ejemplos de Sugerencias
                  </Typography>
                  <SuggestionsPreview />
                </div>

                {/* Alertas */}
                <div>
                  <Typography variant="h5" fontWeight="bold" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.md, fontSize: "20px" }}>
                    Ejemplos de Alertas
                  </Typography>
                  <AlertsPreview />
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};
