import React, { useState, useMemo } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { colors } from "../../../shared/design-system";
import { SectionNavbar } from "../../../components/visual/SectionNavbar";
import { EmptyState } from "../../../components/visual/EmptyState";
import { SkeletonCard } from "../../../components/visual/Skeleton";
import { Calendar } from "primereact/calendar";
import { mockMetrics, mockMonthlyTrend2025, mockMonthlyTrend2026, mockProductRotation2025, mockProductRotation2026, mockProductsWithDetails } from "../store/mockData";
import { TicketPlusFilters } from "../types";
import { formatCurrency, formatNumber, formatPercent } from "./utils";
import { MetricCard } from "../components/MetricCard";
import { ConversionChart } from "../components/ConversionChart";
import { ProductsChart } from "../components/ProductsChart";
import { TrendChart } from "../components/TrendChart";
import { ProductRotationChart } from "../components/ProductRotationChart";
import {
  getTotalSent,
  getTotalOpened,
  getTotalConverted,
  getOpenRate,
  getConversionRate,
  getTotalAddedValue,
  getAverageAddedValue,
  getAverageTicketIncrease,
  getNoTePuedeFaltar,
  getSugerencias,
  getTopProducts,
} from "../utils/helpers";

export const TicketPlusPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  
  // TODO: Cuando el backend esté listo, usar el hook:
  // const { data, isLoading, error } = useGetTicketPlusMetricsQuery({ year: selectedYear });
  // const metrics = data?.result;
  
  // Por ahora, usar datos mock para desarrollo
  const isLoading = false;
  const error = null;
  const metrics = mockMetrics;

  // Datos según el año seleccionado
  const monthlyTrendData = selectedYear === 2025 ? mockMonthlyTrend2025 : mockMonthlyTrend2026;
  const productRotationData = selectedYear === 2025 ? mockProductRotation2025 : mockProductRotation2026;

  // Opciones de años disponibles
  const yearOptions = [
    { label: "2025", value: 2025 },
    { label: "2026", value: 2026 },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* SectionNavbar */}
      <SectionNavbar
        title="Ticket Plus"
        subtitle="Incrementa el valor de tus pedidos aprovechando la ventana entre la orden y la entrega"
      />

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ backgroundColor: colors.background.light }}>
        {/* Filtro de Año */}
        <div className="flex items-center gap-4" style={{ backgroundColor: colors.background.paper, padding: "16px", borderRadius: "8px" }}>
          <label className="text-sm font-medium" style={{ color: colors.text.primary }}>
            Período (Año):
          </label>
          <Dropdown
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.value)}
            options={yearOptions}
            optionLabel="label"
            optionValue="value"
            placeholder="Seleccionar año"
            style={{ minWidth: "150px" }}
          />
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
            {/* Métricas Principales - Envíos, Aperturas, Conversiones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="Carritos Enviados"
                value={formatNumber(getTotalSent(metrics))}
                icon="pi pi-send"
                color={colors.chart.primary}
                subtitle={`${formatNumber(getTotalOpened(metrics))} carritos abiertos`}
              />
              <MetricCard
                title="Carritos Abiertos"
                value={formatNumber(getTotalOpened(metrics))}
                icon="pi pi-eye"
                color={colors.chart.info}
                subtitle={`${formatPercent(getOpenRate(metrics))} de los enviados`}
              />
              <MetricCard
                title="Pedidos Agregados"
                value={formatNumber(getTotalConverted(metrics))}
                icon="pi pi-shopping-cart"
                color={colors.chart.success}
                subtitle={`${formatPercent(getConversionRate(metrics))} conversión total`}
              />
              <MetricCard
                title="Valor Agregado Total"
                value={formatCurrency(getTotalAddedValue(metrics))}
                icon="pi pi-dollar"
                color={colors.chart.series3}
                subtitle={`${formatCurrency(getAverageAddedValue(metrics))} por pedido`}
              />
            </div>

            {/* Métricas de Conversión por Tipo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card 
                title="Conversión: 'No te puede faltar'" 
                className="shadow-sm"
                style={{ backgroundColor: colors.background.paper }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                      Carritos enviados
                    </span>
                    <span className="text-lg font-semibold" style={{ color: colors.text.primary }}>
                      {formatNumber(getNoTePuedeFaltar(metrics).totalSent)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                      Pedidos agregados
                    </span>
                    <span className="text-lg font-semibold" style={{ color: colors.success.main }}>
                      {formatNumber(getNoTePuedeFaltar(metrics).totalConverted)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: colors.border.light }}>
                    <span className="text-base font-medium" style={{ color: colors.text.primary }}>
                      Tasa de conversión
                    </span>
                    <span className="text-2xl font-bold" style={{ color: colors.primary.main }}>
                      {formatPercent(getNoTePuedeFaltar(metrics).conversionRate)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                      Productos promedio agregados
                    </span>
                    <span className="text-lg font-semibold" style={{ color: colors.text.primary }}>
                      {getNoTePuedeFaltar(metrics).averageProductsAdded.toFixed(1)}
                    </span>
                  </div>
                </div>
              </Card>

              <Card 
                title="Conversión: 'Sugerencias'" 
                className="shadow-sm"
                style={{ backgroundColor: colors.background.paper }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                      Carritos enviados
                    </span>
                    <span className="text-lg font-semibold" style={{ color: colors.text.primary }}>
                      {formatNumber(getSugerencias(metrics).totalSent)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                      Pedidos agregados
                    </span>
                    <span className="text-lg font-semibold" style={{ color: colors.success.main }}>
                      {formatNumber(getSugerencias(metrics).totalConverted)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: colors.border.light }}>
                    <span className="text-base font-medium" style={{ color: colors.text.primary }}>
                      Tasa de conversión
                    </span>
                    <span className="text-2xl font-bold" style={{ color: colors.primary.main }}>
                      {formatPercent(getSugerencias(metrics).conversionRate)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                      Productos promedio agregados
                    </span>
                    <span className="text-lg font-semibold" style={{ color: colors.text.primary }}>
                      {getSugerencias(metrics).averageProductsAdded.toFixed(1)}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Métrica de Impacto */}
            <Card 
              className="shadow-sm"
              style={{ 
                backgroundColor: colors.primary.main,
                color: colors.primary.contrastText,
              }}
            >
              <div className="text-center">
                <div className="text-sm mb-2 opacity-90">
                  Incremento Promedio en el Valor del Ticket
                </div>
                <div className="text-4xl font-bold mb-2">
                  {formatPercent(getAverageTicketIncrease(metrics))}
                </div>
                <div className="text-sm opacity-75">
                  Incremento promedio en el valor del ticket gracias a los productos agregados
                </div>
              </div>
            </Card>

            {/* Gráfico de Tendencia - Evolución de Conversión */}
            <Card 
              title={`Evolución de la Tasa de Conversión - Año ${selectedYear}`}
              className="shadow-sm" 
              style={{ backgroundColor: colors.background.paper }}
            >
              <div className="text-sm mb-4" style={{ color: colors.text.secondary }}>
                Tendencia de aceptación de Ticket Plus a lo largo del año {selectedYear}. 
                Muestra cómo la solución fue siendo más aceptada por los clientes mes a mes, 
                con un crecimiento sostenido en las tasas de conversión.
              </div>
              <TrendChart data={monthlyTrendData} year={selectedYear} />
            </Card>

            {/* Gráficos Secundarios */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Comparativa de Conversión" className="shadow-sm" style={{ backgroundColor: colors.background.paper }}>
                <ConversionChart metrics={metrics} />
              </Card>
              <Card title="Top Productos Más Agregados" className="shadow-sm" style={{ backgroundColor: colors.background.paper }}>
                <ProductsChart products={mockProductsWithDetails} />
              </Card>
            </div>

            {/* Gráfico de Rotación de Productos */}
            <Card 
              title={`Rotación de Productos Top - Año ${selectedYear}`}
              className="shadow-sm" 
              style={{ backgroundColor: colors.background.paper }}
            >
              <div className="text-sm mb-4" style={{ color: colors.text.secondary }}>
                Evolución de los productos más agregados a lo largo del año {selectedYear}. 
                Muestra la tendencia de rotación de los productos principales, incluyendo marca y fabricante. 
                Pasa el cursor sobre cada producto para ver más detalles.
              </div>
              <ProductRotationChart data={productRotationData} />
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
  );
};
