/**
 * Datos mock para desarrollo de Empowered Seller
 */

import { EmpoweredSellerMetrics, EmpoweredSellerSuggestion, Alert } from "../types";

// Métricas principales
export const mockEmpoweredSellerMetrics: EmpoweredSellerMetrics = {
  // Métricas de sugerencias
  totalSuggestions: 11250,
  totalSent: 10800,
  totalViewed: 7560,
  totalMatched: 2925,
  matchRate: 26.0, // 26% de coincidencias
  viewRate: 70.0, // 70% de visualizaciones
  
  // Métricas por tipo de sugerencia
  suggestionsByType: {
    habitual: {
      total: 4500,
      matched: 1440,
      matchRate: 32.0, // Mayor tasa de coincidencia
    },
    faltante: {
      total: 3600,
      matched: 1080,
      matchRate: 30.0,
    },
    nuevo: {
      total: 2250,
      matched: 315,
      matchRate: 14.0, // Menor tasa (productos nuevos)
    },
    complementario: {
      total: 900,
      matched: 90,
      matchRate: 10.0,
    },
  },
  
  // Métricas de alertas
  totalAlerts: 850,
  alertsSent: 850,
  alertsViewed: 680,
  clientsReactivated: 340,
  reactivationRate: 50.0, // 50% de reactivación
  
  // Métricas de vendedores
  activeSellers: 45,
  sellersUsingSuggestions: 38,
  adoptionRate: 84.4, // 84.4% de adopción
  
  // Métricas de valor
  averageOrderValueWithSuggestions: 125000,
  averageOrderValueWithoutSuggestions: 95000,
  valueIncrease: 31.6, // 31.6% de aumento
  
  // Métricas temporales
  averageResponseTime: 4.5, // horas promedio entre sugerencia y visita
  
  // Métricas de clientes
  clientsWithSuggestions: 850,
  averageSuggestionsPerClient: 12.7,
  
  period: {
    start: new Date(2025, 0, 1),
    end: new Date(2025, 11, 31),
  },
};

// Datos de tendencia mensual (12 meses) - Evolución de coincidencias
export const mockMatchRateTrend2025 = [
  { month: "Ene", matchRate: 22.0, suggestions: 800, matched: 176, alerts: 60, reactivated: 28 },
  { month: "Feb", matchRate: 23.2, suggestions: 850, matched: 197, alerts: 65, reactivated: 30 },
  { month: "Mar", matchRate: 24.1, suggestions: 900, matched: 217, alerts: 70, reactivated: 33 },
  { month: "Abr", matchRate: 24.8, suggestions: 950, matched: 236, alerts: 72, reactivated: 35 },
  { month: "May", matchRate: 25.3, suggestions: 1000, matched: 253, alerts: 75, reactivated: 37 },
  { month: "Jun", matchRate: 25.6, suggestions: 1050, matched: 269, alerts: 78, reactivated: 39 },
  { month: "Jul", matchRate: 25.8, suggestions: 1100, matched: 284, alerts: 80, reactivated: 40 },
  { month: "Ago", matchRate: 25.9, suggestions: 1150, matched: 298, alerts: 82, reactivated: 41 },
  { month: "Sep", matchRate: 26.0, suggestions: 1200, matched: 312, alerts: 85, reactivated: 42 },
  { month: "Oct", matchRate: 26.0, suggestions: 1220, matched: 317, alerts: 87, reactivated: 43 },
  { month: "Nov", matchRate: 26.0, suggestions: 1240, matched: 322, alerts: 88, reactivated: 44 },
  { month: "Dic", matchRate: 26.0, suggestions: 1250, matched: 325, alerts: 90, reactivated: 45 },
];

export const mockMatchRateTrend2026 = [
  { month: "Ene", matchRate: 26.2, suggestions: 1280, matched: 335, alerts: 92, reactivated: 46 },
  { month: "Feb", matchRate: 26.5, suggestions: 1320, matched: 350, alerts: 95, reactivated: 48 },
  { month: "Mar", matchRate: 26.8, suggestions: 1360, matched: 364, alerts: 98, reactivated: 49 },
  { month: "Abr", matchRate: 27.0, suggestions: 1400, matched: 378, alerts: 100, reactivated: 50 },
  { month: "May", matchRate: 27.2, suggestions: 1440, matched: 392, alerts: 102, reactivated: 51 },
  { month: "Jun", matchRate: 27.4, suggestions: 1480, matched: 406, alerts: 105, reactivated: 53 },
  { month: "Jul", matchRate: 27.6, suggestions: 1520, matched: 419, alerts: 107, reactivated: 54 },
  { month: "Ago", matchRate: 27.8, suggestions: 1560, matched: 434, alerts: 110, reactivated: 55 },
  { month: "Sep", matchRate: 28.0, suggestions: 1600, matched: 448, alerts: 112, reactivated: 56 },
  { month: "Oct", matchRate: 28.2, suggestions: 1640, matched: 462, alerts: 115, reactivated: 58 },
  { month: "Nov", matchRate: 28.4, suggestions: 1680, matched: 477, alerts: 117, reactivated: 59 },
  { month: "Dic", matchRate: 28.5, suggestions: 1700, matched: 485, alerts: 120, reactivated: 60 },
];

// Distribución de coincidencias por tipo de sugerencia
export const mockMatchByType = [
  { type: "Habitual", total: 4500, matched: 1440, matchRate: 32.0, color: "#8b5cf6" },
  { type: "Faltante", total: 3600, matched: 1080, matchRate: 30.0, color: "#06b6d4" },
  { type: "Nuevo", total: 2250, matched: 315, matchRate: 14.0, color: "#10b981" },
  { type: "Complementario", total: 900, matched: 90, matchRate: 10.0, color: "#f59e0b" },
];

// Top vendedores por coincidencias
export const mockTopSellers = [
  { sellerName: "Juan Pérez", suggestions: 420, matched: 126, matchRate: 30.0, clients: 38 },
  { sellerName: "María González", suggestions: 380, matched: 110, matchRate: 28.9, clients: 35 },
  { sellerName: "Carlos Rodríguez", suggestions: 350, matched: 98, matchRate: 28.0, clients: 32 },
  { sellerName: "Ana Martínez", suggestions: 320, matched: 86, matchRate: 26.9, clients: 30 },
  { sellerName: "Luis Fernández", suggestions: 300, matched: 78, matchRate: 26.0, clients: 28 },
];

// Ejemplos de sugerencias (para tabla/detalle)
export const mockSuggestions: EmpoweredSellerSuggestion[] = [
  {
    id: "1",
    sellerName: "Juan Pérez",
    clientName: "Kiosco San Martín",
    suggestionType: "habitual",
    status: "matched",
    matched: true,
    sentAt: new Date(2025, 11, 1),
    matchedAt: new Date(2025, 11, 2),
    products: [
      { productName: "Coca Cola 2.25L", reason: "Compra habitual" },
      { productName: "Aceite Cocinero 900ml", reason: "Compra habitual" },
    ],
  },
  {
    id: "2",
    sellerName: "María González",
    clientName: "Autoservicio El Sol",
    suggestionType: "faltante",
    status: "matched",
    matched: true,
    sentAt: new Date(2025, 11, 5),
    matchedAt: new Date(2025, 11, 6),
    products: [
      { productName: "Arroz Gallo Oro 1kg", reason: "No compra desde hace 3 meses" },
    ],
  },
];

// Ejemplos de alertas
export const mockAlerts: Alert[] = [
  {
    id: "1",
    sellerName: "Juan Pérez",
    clientName: "Kiosco La Esquina",
    daysWithoutPurchase: 45,
    lastPurchaseDate: new Date(2025, 9, 15),
    status: "reactivated",
    reactivated: true,
    sentAt: new Date(2025, 10, 1),
    reactivatedAt: new Date(2025, 10, 5),
  },
  {
    id: "2",
    sellerName: "María González",
    clientName: "Almacén El Progreso",
    daysWithoutPurchase: 60,
    lastPurchaseDate: new Date(2025, 9, 1),
    status: "pending",
    reactivated: false,
    sentAt: new Date(2025, 10, 1),
  },
];
