/**
 * Utilidades para formateo en Auto-FOLDER
 */

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("es-AR").format(value);
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
