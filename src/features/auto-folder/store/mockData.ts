/**
 * Datos mock para desarrollo de Auto-FOLDER (Revistas)
 */

import { AutoFolderMetrics, Magazine, MagazineProduct, MagazineOrder } from "../types";

// Métricas principales
export const mockAutoFolderMetrics: AutoFolderMetrics = {
  // Métricas de revistas
  totalCreated: 156,
  totalSent: 156,
  totalPublished: 156,
  totalViews: 18720,
  averageViewsPerMagazine: 120,
  
  // Métricas por canal
  byChannel: {
    kioscos: {
      totalCreated: 65,
      totalSent: 65,
      totalViews: 9100,
      totalOrders: 2340,
    },
    autoservicios: {
      totalCreated: 52,
      totalSent: 52,
      totalViews: 6240,
      totalOrders: 1872,
    },
    tradicionales: {
      totalCreated: 39,
      totalSent: 39,
      totalViews: 3380,
      totalOrders: 1014,
    },
  },
  
  // Métricas de órdenes generadas
  totalOrdersGenerated: 5226,
  ordersOpenRate: 80.0, // 80% de apertura
  averageOrderValue: 125000,
  totalOrderValue: 653250000,
  
  // Métricas de productos
  totalProductsIncluded: 4680, // Promedio 30 productos por revista
  productsByType: {
    oferta: 1872, // 40%
    descuento: 1404, // 30%
    bonificacion: 468, // 10%
    promocion: 702, // 15%
    combo: 234, // 5%
    novedad: 0,
  },
  productsByBrand: [
    { brand: "Coca Cola", total: 468, percentage: 10.0 },
    { brand: "Molinos", total: 421, percentage: 9.0 },
    { brand: "Arcor", total: 374, percentage: 8.0 },
    { brand: "La Serenísima", total: 327, percentage: 7.0 },
    { brand: "Unilever", total: 280, percentage: 6.0 },
  ],
  productsByManufacturer: [
    { manufacturer: "Coca Cola Company", total: 468, percentage: 10.0 },
    { manufacturer: "Molinos Río de la Plata", total: 421, percentage: 9.0 },
    { manufacturer: "Arcor", total: 374, percentage: 8.0 },
    { manufacturer: "Mastellone Hnos.", total: 327, percentage: 7.0 },
    { manufacturer: "Unilever", total: 280, percentage: 6.0 },
  ],
  
  // Métricas por frecuencia
  byFrequency: {
    semanal: {
      totalCreated: 52,
      totalSent: 52,
      totalViews: 7800,
      totalOrders: 2340,
    },
    quincenal: {
      totalCreated: 52,
      totalSent: 52,
      totalViews: 6240,
      totalOrders: 1872,
    },
    mensual: {
      totalCreated: 52,
      totalSent: 52,
      totalViews: 4680,
      totalOrders: 1014,
    },
  },
  
  period: {
    start: new Date(2025, 0, 1),
    end: new Date(2025, 11, 31),
  },
};

// Datos de tendencia mensual (12 meses) - Evolución de revistas y órdenes
export const mockMagazineTrend2025 = [
  { month: "Ene", created: 12, sent: 12, views: 1440, orders: 432, orderValue: 54000000 },
  { month: "Feb", created: 13, sent: 13, views: 1560, orders: 468, orderValue: 58500000 },
  { month: "Mar", created: 13, sent: 13, views: 1680, orders: 504, orderValue: 63000000 },
  { month: "Abr", created: 13, sent: 13, views: 1800, orders: 540, orderValue: 67500000 },
  { month: "May", created: 13, sent: 13, views: 1920, orders: 576, orderValue: 72000000 },
  { month: "Jun", created: 13, sent: 13, views: 2040, orders: 612, orderValue: 76500000 },
  { month: "Jul", created: 13, sent: 13, views: 2160, orders: 648, orderValue: 81000000 },
  { month: "Ago", created: 13, sent: 13, views: 2280, orders: 684, orderValue: 85500000 },
  { month: "Sep", created: 13, sent: 13, views: 2400, orders: 720, orderValue: 90000000 },
  { month: "Oct", created: 13, sent: 13, views: 2520, orders: 756, orderValue: 94500000 },
  { month: "Nov", created: 13, sent: 13, views: 2640, orders: 792, orderValue: 99000000 },
  { month: "Dic", created: 13, sent: 13, views: 2760, orders: 828, orderValue: 103500000 },
];

export const mockMagazineTrend2026 = [
  { month: "Ene", created: 13, sent: 13, views: 2880, orders: 864, orderValue: 108000000 },
  { month: "Feb", created: 13, sent: 13, views: 3000, orders: 900, orderValue: 112500000 },
  { month: "Mar", created: 13, sent: 13, views: 3120, orders: 936, orderValue: 117000000 },
  { month: "Abr", created: 13, sent: 13, views: 3240, orders: 972, orderValue: 121500000 },
  { month: "May", created: 13, sent: 13, views: 3360, orders: 1008, orderValue: 126000000 },
  { month: "Jun", created: 13, sent: 13, views: 3480, orders: 1044, orderValue: 130500000 },
  { month: "Jul", created: 13, sent: 13, views: 3600, orders: 1080, orderValue: 135000000 },
  { month: "Ago", created: 13, sent: 13, views: 3720, orders: 1116, orderValue: 139500000 },
  { month: "Sep", created: 13, sent: 13, views: 3840, orders: 1152, orderValue: 144000000 },
  { month: "Oct", created: 13, sent: 13, views: 3960, orders: 1188, orderValue: 148500000 },
  { month: "Nov", created: 13, sent: 13, views: 4080, orders: 1224, orderValue: 153000000 },
  { month: "Dic", created: 13, sent: 13, views: 4200, orders: 1260, orderValue: 157500000 },
];

// Distribución por canal
export const mockByChannel = [
  { channel: "Kioscos", created: 65, sent: 65, views: 9100, orders: 2340, percentage: 41.7 },
  { channel: "Autoservicios", created: 52, sent: 52, views: 6240, orders: 1872, percentage: 33.3 },
  { channel: "Tradicionales", created: 39, sent: 39, views: 3380, orders: 1014, percentage: 25.0 },
];

// Distribución por tipo de producto
export const mockByProductType = [
  { type: "Ofertas", total: 1872, percentage: 40.0, color: "#8b5cf6" },
  { type: "Descuentos", total: 1404, percentage: 30.0, color: "#06b6d4" },
  { type: "Promociones", total: 702, percentage: 15.0, color: "#10b981" },
  { type: "Bonificaciones", total: 468, percentage: 10.0, color: "#f59e0b" },
  { type: "Combos", total: 234, percentage: 5.0, color: "#ef4444" },
];

// Ejemplos de revistas (para tabla/detalle)
export const mockMagazines: Magazine[] = [
  {
    id: "1",
    name: "Revista Kioscos - Semana 1",
    channel: "kioscos",
    frequency: "semanal",
    status: "published",
    createdAt: new Date(2025, 11, 1),
    sentAt: new Date(2025, 11, 1),
    publishedAt: new Date(2025, 11, 1),
    totalProducts: 30,
    totalViews: 140,
    totalOrdersGenerated: 45,
  },
  {
    id: "2",
    name: "Revista Autoservicios - Semana 1",
    channel: "autoservicios",
    frequency: "semanal",
    status: "published",
    createdAt: new Date(2025, 11, 1),
    sentAt: new Date(2025, 11, 1),
    publishedAt: new Date(2025, 11, 1),
    totalProducts: 35,
    totalViews: 120,
    totalOrdersGenerated: 36,
  },
];
