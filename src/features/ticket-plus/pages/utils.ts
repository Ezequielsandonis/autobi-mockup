/**
 * Utilidades para formateo de datos en Ticket Plus
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
  // El valor viene como porcentaje (ej: 45.5 para 45.5%)
  return `${value.toFixed(1)}%`;
};
