/**
 * Helpers para obtener valores de métricas (acepta ambos formatos: camelCase y snake_case)
 * 
 * Estos helpers se usan en los componentes para acceder a los valores
 * sin importar el formato que use el backend.
 */

import { TicketPlusMetrics } from "../types";

/**
 * Obtiene el valor de una métrica numérica (acepta ambos formatos)
 */
export const getMetricValue = (metrics: TicketPlusMetrics, camelKey: string, snakeKey: string): number => {
  const camelValue = (metrics as any)[camelKey];
  const snakeValue = (metrics as any)[snakeKey];
  return camelValue ?? snakeValue ?? 0;
};

/**
 * Obtiene el valor de una métrica de texto (acepta ambos formatos)
 */
export const getMetricString = (metrics: TicketPlusMetrics, camelKey: string, snakeKey: string): string => {
  const camelValue = (metrics as any)[camelKey];
  const snakeValue = (metrics as any)[snakeKey];
  return camelValue ?? snakeValue ?? "";
};

/**
 * Helpers específicos para métricas comunes
 */
export const getTotalSent = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "totalSent", "total_sent");

export const getTotalOpened = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "totalOpened", "total_opened");

export const getTotalConverted = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "totalConverted", "total_converted");

export const getOpenRate = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "openRate", "open_rate");

export const getConversionRate = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "conversionRate", "conversion_rate");

export const getTotalAddedValue = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "totalAddedValue", "total_added_value");

export const getAverageAddedValue = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "averageAddedValue", "average_added_value");

export const getAverageTicketIncrease = (metrics: TicketPlusMetrics) => 
  getMetricValue(metrics, "averageTicketIncrease", "average_ticket_increase");

/**
 * Obtiene los datos de "No te puede faltar"
 */
export const getNoTePuedeFaltar = (metrics: TicketPlusMetrics) => {
  const camel = metrics.noTePuedeFaltar;
  const snake = metrics.no_te_puede_faltar;
  const data = camel ?? snake;
  
  return {
    totalSent: data?.totalSent ?? data?.total_sent ?? 0,
    totalConverted: data?.totalConverted ?? data?.total_converted ?? 0,
    conversionRate: data?.conversionRate ?? data?.conversion_rate ?? 0,
    averageProductsAdded: data?.averageProductsAdded ?? data?.average_products_added ?? 0,
  };
};

/**
 * Obtiene los datos de "Sugerencias"
 */
export const getSugerencias = (metrics: TicketPlusMetrics) => {
  const data = metrics.sugerencias;
  
  return {
    totalSent: data?.totalSent ?? data?.total_sent ?? 0,
    totalConverted: data?.totalConverted ?? data?.total_converted ?? 0,
    conversionRate: data?.conversionRate ?? data?.conversion_rate ?? 0,
    averageProductsAdded: data?.averageProductsAdded ?? data?.average_products_added ?? 0,
  };
};

/**
 * Obtiene los productos más agregados (acepta ambos formatos)
 */
export const getTopProducts = (metrics: TicketPlusMetrics) => {
  const camel = metrics.topProductsAdded;
  const snake = metrics.top_products_added;
  const products = camel ?? snake ?? [];
  
  return products.map((product) => ({
    productId: product.productId ?? product.product_id ?? "",
    productName: product.productName ?? product.product_name ?? "",
    category: product.category ?? "",
    timesAdded: product.timesAdded ?? product.times_added ?? 0,
    totalValue: product.totalValue ?? product.total_value ?? 0,
  }));
};
