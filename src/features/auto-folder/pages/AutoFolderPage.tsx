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
import { mockAutoFolderMetrics, mockMagazineTrend2025, mockMagazineTrend2026, mockByChannel, mockByProductType } from "../store/mockData";
import { formatCurrency, formatNumber, formatPercent } from "./utils";
import { MagazineTrendChart } from "../components/MagazineTrendChart";
import { ByChannelChart } from "../components/ByChannelChart";
import { ByProductTypeChart } from "../components/ByProductTypeChart";
import { MagazinesGrid } from "../components/MagazinesGrid";
import { TopBrandsChart } from "../components/TopBrandsChart";
import { MostProfitableProducts } from "../components/MostProfitableProducts";
import {
  getTotalCreated,
  getTotalSent,
  getTotalPublished,
  getTotalViews,
  getAverageViewsPerMagazine,
  getTotalOrdersGenerated,
  getOrdersOpenRate,
  getAverageOrderValue,
  getTotalOrderValue,
  getTotalProductsIncluded,
} from "../utils/helpers";

export const AutoFolderPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // TODO: Cuando el backend esté listo, usar el hook:
  // const { data, isLoading, error } = useGetAutoFolderMetricsQuery({ year: selectedYear });
  // const metrics = data?.result;

  // Por ahora, usar datos mock para desarrollo
  const isLoading = false;
  const error = null;
  const metrics = mockAutoFolderMetrics;

  // Datos según el año seleccionado
  const trendData = selectedYear === 2025 ? mockMagazineTrend2025 : mockMagazineTrend2026;

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
          title="Auto-FOLDER"
          subtitle="Revistas automáticas por canal que permiten a los minoristas crear órdenes antes de la visita del vendedor"
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
        title="Auto-FOLDER"
        subtitle="Revistas automáticas por canal que permiten a los minoristas crear órdenes antes de la visita del vendedor"
      />

      {/* Content */}
      <div className="flex-1 overflow-hidden" style={{ backgroundColor: colors.background.light as string }}>
        <TabView
          activeIndex={activeTabIndex}
          onTabChange={(e) => setActiveTabIndex(e.index)}
          className="h-full"
        >
          {/* Tab: Métricas */}
          <TabPanel header="Métricas">
            <div className="flex-1 overflow-y-auto" style={{ backgroundColor: colors.background.light as string, padding: spacingPresets.container.md }}>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: spacingPresets.component.md }}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <SkeletonCard key={i} />
                    ))}
                  </div>
                )}

                {/* Metrics */}
                {!isLoading && metrics && (
                  <>
                    {/* Métricas Principales */}
                    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: spacingPresets.component.md }}>
                      <MetricCard
                        title="Revistas Creadas"
                        value={formatNumber(getTotalCreated(metrics))}
                        icon="pi pi-file"
                        color={colors.chart.primary}
                        subtitle={`${formatNumber(getTotalSent(metrics))} enviadas`}
                      />
                      <MetricCard
                        title="Órdenes Generadas"
                        value={formatNumber(getTotalOrdersGenerated(metrics))}
                        icon="pi pi-shopping-cart"
                        color={colors.chart.success}
                        subtitle={`${formatPercent(getOrdersOpenRate(metrics))} tasa de apertura`}
                      />
                      <MetricCard
                        title="Valor Total de Órdenes"
                        value={formatCurrency(getTotalOrderValue(metrics))}
                        icon="pi pi-dollar"
                        color={colors.chart.series3}
                        subtitle={`${formatCurrency(getAverageOrderValue(metrics))} promedio`}
                      />
                    </div>

                    {/* Métricas de Productos */}
                    <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: spacingPresets.component.md }}>
                      <Card
                        title="Marcas Más Agregadas"
                        className="shadow-sm"
                        style={{ backgroundColor: colors.background.paper }}
                      >
                        <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                          Top marcas que más aparecen en las revistas generadas.
                        </Typography>
                        <TopBrandsChart data={(metrics.productsByBrand || []).filter((item): item is { brand: string; total: number; percentage: number } => 
                          !!item.brand && typeof item.total === 'number' && typeof item.percentage === 'number'
                        )} />
                      </Card>

                      <Card
                        title="Distribución por Tipo de Producto"
                        className="shadow-sm"
                        style={{ backgroundColor: colors.background.paper }}
                      >
                        <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                          Cantidad de productos por tipo incluidos en las revistas.
                        </Typography>
                        <ByProductTypeChart data={mockByProductType} />
                      </Card>
                    </div>

                    {/* Productos Más Rentables */}
                    <MostProfitableProducts />

                    {/* Gráfico de Tendencias */}
                    <Card
                      title={`Evolución de Revistas y Órdenes - Año ${selectedYear}`}
                      className="shadow-sm"
                      style={{ backgroundColor: colors.background.paper }}
                    >
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                        Tendencia de revistas creadas, visualizaciones y órdenes generadas a lo largo del año.
                      </Typography>
                      <MagazineTrendChart data={trendData} />
                    </Card>

                    {/* Gráfico por Canal */}
                    <Card
                      title="Distribución por Canal"
                      className="shadow-sm"
                      style={{ backgroundColor: colors.background.paper }}
                    >
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.md }}>
                        Comparativa de revistas creadas y órdenes generadas por cada canal (Kioscos, Autoservicios, Tradicionales).
                      </Typography>
                      <ByChannelChart data={mockByChannel} />
                    </Card>
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
            <div className="flex-1 overflow-y-auto" style={{ backgroundColor: colors.background.light as string, padding: spacingPresets.container.md }}>
              <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md }}>
                {/* Explicación breve */}
                <Card
                  className="shadow-sm"
                  style={{ backgroundColor: colors.background.paper }}
                >
                  <div className="flex items-start gap-3">
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
                    <div className="flex-1">
                      <Typography variant="body1" fontWeight="600" color={colors.text.primary} style={{ marginBottom: spacingPresets.component.xs }}>
                        Revistas Generadas por Canal
                      </Typography>
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.sm }}>
                        Auto-FOLDER genera automáticamente revistas de ofertas específicas por canal (Kioscos, Autoservicios, Tradicionales) con productos, descuentos, bonificaciones y promociones relevantes para cada tipo de cliente. Estas revistas se generan con la frecuencia configurada y se envían para revisión.
                      </Typography>
                      <Typography variant="body2" color={colors.text.secondary} style={{ marginBottom: spacingPresets.component.sm }}>
                        El distribuidor puede revisar, editar (agregar, quitar o modificar productos, precios y descuentos) y aprobar cada revista antes de compartirla con los clientes por email, redes sociales o WhatsApp.
                      </Typography>
                      <Typography variant="body2" color={colors.text.secondary}>
                        El objetivo es que los minoristas puedan abrir órdenes antes de la visita del vendedor, liberando tiempo para que el vendedor se enfoque en productos más estratégicos y rentables durante la visita.
                      </Typography>
                    </div>
                  </div>
                </Card>

                {/* Grid de Revistas */}
                <MagazinesGrid />
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};
