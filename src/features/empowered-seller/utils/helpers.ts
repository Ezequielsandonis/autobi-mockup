/**
 * Helper functions para extraer datos de EmpoweredSellerMetrics
 * Maneja tanto camelCase como snake_case del backend
 */

import { EmpoweredSellerMetrics } from "../types";

export const getTotalSuggestions = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.totalSuggestions ?? metrics.total_suggestions ?? 0;
};

export const getTotalSent = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.totalSent ?? metrics.total_sent ?? 0;
};

export const getTotalViewed = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.totalViewed ?? metrics.total_viewed ?? 0;
};

export const getTotalMatched = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.totalMatched ?? metrics.total_matched ?? 0;
};

export const getMatchRate = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.matchRate ?? metrics.match_rate ?? 0;
};

export const getViewRate = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.viewRate ?? metrics.view_rate ?? 0;
};

export const getTotalAlerts = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.totalAlerts ?? metrics.total_alerts ?? 0;
};

export const getAlertsSent = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.alertsSent ?? metrics.alerts_sent ?? 0;
};

export const getAlertsViewed = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.alertsViewed ?? metrics.alerts_viewed ?? 0;
};

export const getClientsReactivated = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.clientsReactivated ?? metrics.clients_reactivated ?? 0;
};

export const getReactivationRate = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.reactivationRate ?? metrics.reactivation_rate ?? 0;
};

export const getActiveSellers = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.activeSellers ?? metrics.active_sellers ?? 0;
};

export const getSellersUsingSuggestions = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.sellersUsingSuggestions ?? metrics.sellers_using_suggestions ?? 0;
};

export const getAdoptionRate = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.adoptionRate ?? metrics.adoption_rate ?? 0;
};

export const getAverageOrderValueWithSuggestions = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.averageOrderValueWithSuggestions ?? metrics.average_order_value_with_suggestions ?? 0;
};

export const getAverageOrderValueWithoutSuggestions = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.averageOrderValueWithoutSuggestions ?? metrics.average_order_value_without_suggestions ?? 0;
};

export const getValueIncrease = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.valueIncrease ?? metrics.value_increase ?? 0;
};

export const getAverageResponseTime = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.averageResponseTime ?? metrics.average_response_time ?? 0;
};

export const getClientsWithSuggestions = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.clientsWithSuggestions ?? metrics.clients_with_suggestions ?? 0;
};

export const getAverageSuggestionsPerClient = (metrics: EmpoweredSellerMetrics): number => {
  return metrics.averageSuggestionsPerClient ?? metrics.average_suggestions_per_client ?? 0;
};
