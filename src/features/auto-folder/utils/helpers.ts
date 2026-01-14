/**
 * Helper functions para extraer datos de AutoFolderMetrics
 * Maneja tanto camelCase como snake_case del backend
 */

import { AutoFolderMetrics } from "../types";

export const getTotalCreated = (metrics: AutoFolderMetrics): number => {
  return metrics.totalCreated ?? metrics.total_created ?? 0;
};

export const getTotalSent = (metrics: AutoFolderMetrics): number => {
  return metrics.totalSent ?? metrics.total_sent ?? 0;
};

export const getTotalPublished = (metrics: AutoFolderMetrics): number => {
  return metrics.totalPublished ?? metrics.total_published ?? 0;
};

export const getTotalViews = (metrics: AutoFolderMetrics): number => {
  return metrics.totalViews ?? metrics.total_views ?? 0;
};

export const getAverageViewsPerMagazine = (metrics: AutoFolderMetrics): number => {
  return metrics.averageViewsPerMagazine ?? metrics.average_views_per_magazine ?? 0;
};

export const getTotalOrdersGenerated = (metrics: AutoFolderMetrics): number => {
  return metrics.totalOrdersGenerated ?? metrics.total_orders_generated ?? 0;
};

export const getOrdersOpenRate = (metrics: AutoFolderMetrics): number => {
  return metrics.ordersOpenRate ?? metrics.orders_open_rate ?? 0;
};

export const getAverageOrderValue = (metrics: AutoFolderMetrics): number => {
  return metrics.averageOrderValue ?? metrics.average_order_value ?? 0;
};

export const getTotalOrderValue = (metrics: AutoFolderMetrics): number => {
  return metrics.totalOrderValue ?? metrics.total_order_value ?? 0;
};

export const getTotalProductsIncluded = (metrics: AutoFolderMetrics): number => {
  return metrics.totalProductsIncluded ?? metrics.total_products_included ?? 0;
};
