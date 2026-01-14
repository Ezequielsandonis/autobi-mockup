/**
 * Datos mock para desarrollo de Ticket Plus
 * 
 * Este archivo contiene datos de ejemplo para desarrollo cuando el backend no está disponible.
 * Cuando el backend esté listo, estos datos se pueden eliminar o mantener solo para testing.
 */

import { TicketPlusMetrics, TicketPlusOrder } from "../types";

// Datos de tendencia mensual (12 meses) - Año 2025
export const mockMonthlyTrend2025 = [
  { month: "Ene", conversionRate: 28.5, noTePuedeFaltar: 22.3, sugerencias: 9.8, totalSent: 850, totalConverted: 242 },
  { month: "Feb", conversionRate: 30.2, noTePuedeFaltar: 23.1, sugerencias: 10.5, totalSent: 920, totalConverted: 278 },
  { month: "Mar", conversionRate: 32.1, noTePuedeFaltar: 24.2, sugerencias: 11.2, totalSent: 980, totalConverted: 315 },
  { month: "Abr", conversionRate: 33.8, noTePuedeFaltar: 24.8, sugerencias: 11.9, totalSent: 1050, totalConverted: 355 },
  { month: "May", conversionRate: 34.5, noTePuedeFaltar: 25.1, sugerencias: 12.1, totalSent: 1100, totalConverted: 380 },
  { month: "Jun", conversionRate: 35.2, noTePuedeFaltar: 25.4, sugerencias: 12.3, totalSent: 1150, totalConverted: 405 },
  { month: "Jul", conversionRate: 35.8, noTePuedeFaltar: 25.7, sugerencias: 12.5, totalSent: 1180, totalConverted: 422 },
  { month: "Ago", conversionRate: 36.2, noTePuedeFaltar: 25.9, sugerencias: 12.6, totalSent: 1200, totalConverted: 434 },
  { month: "Sep", conversionRate: 36.5, noTePuedeFaltar: 25.0, sugerencias: 11.5, totalSent: 1250, totalConverted: 456 },
  { month: "Oct", conversionRate: 36.8, noTePuedeFaltar: 25.2, sugerencias: 11.6, totalSent: 1270, totalConverted: 467 },
  { month: "Nov", conversionRate: 37.0, noTePuedeFaltar: 25.3, sugerencias: 11.7, totalSent: 1280, totalConverted: 474 },
  { month: "Dic", conversionRate: 37.1, noTePuedeFaltar: 25.3, sugerencias: 11.7, totalSent: 1280, totalConverted: 475 },
];

// Datos de tendencia mensual (12 meses) - Año 2026
export const mockMonthlyTrend2026 = [
  { month: "Ene", conversionRate: 37.5, noTePuedeFaltar: 26.0, sugerencias: 12.0, totalSent: 1320, totalConverted: 495 },
  { month: "Feb", conversionRate: 38.2, noTePuedeFaltar: 26.5, sugerencias: 12.3, totalSent: 1380, totalConverted: 527 },
  { month: "Mar", conversionRate: 38.8, noTePuedeFaltar: 27.0, sugerencias: 12.5, totalSent: 1420, totalConverted: 551 },
  { month: "Abr", conversionRate: 39.2, noTePuedeFaltar: 27.3, sugerencias: 12.7, totalSent: 1450, totalConverted: 568 },
  { month: "May", conversionRate: 39.5, noTePuedeFaltar: 27.5, sugerencias: 12.8, totalSent: 1480, totalConverted: 585 },
  { month: "Jun", conversionRate: 39.8, noTePuedeFaltar: 27.7, sugerencias: 12.9, totalSent: 1500, totalConverted: 597 },
  { month: "Jul", conversionRate: 40.0, noTePuedeFaltar: 27.9, sugerencias: 13.0, totalSent: 1520, totalConverted: 608 },
  { month: "Ago", conversionRate: 40.2, noTePuedeFaltar: 28.0, sugerencias: 13.1, totalSent: 1530, totalConverted: 615 },
  { month: "Sep", conversionRate: 40.3, noTePuedeFaltar: 28.1, sugerencias: 13.2, totalSent: 1540, totalConverted: 621 },
  { month: "Oct", conversionRate: 40.5, noTePuedeFaltar: 28.2, sugerencias: 13.3, totalSent: 1550, totalConverted: 628 },
  { month: "Nov", conversionRate: 40.6, noTePuedeFaltar: 28.3, sugerencias: 13.4, totalSent: 1560, totalConverted: 633 },
  { month: "Dic", conversionRate: 40.8, noTePuedeFaltar: 28.4, sugerencias: 13.5, totalSent: 1570, totalConverted: 641 },
];

// Por defecto usar 2025
export const mockMonthlyTrend = mockMonthlyTrend2025;

// Rotación de productos por mes (top productos) - Año 2025
export const mockProductRotation2025 = [
  { month: "Ene", "Coca Cola 2.25L": 120, "Aceite Cocinero 900ml": 105, "Arroz Gallo Oro 1kg": 85, "Yerba Playadito 500g": 72 },
  { month: "Feb", "Coca Cola 2.25L": 125, "Aceite Cocinero 900ml": 110, "Arroz Gallo Oro 1kg": 90, "Yerba Playadito 500g": 75 },
  { month: "Mar", "Coca Cola 2.25L": 130, "Aceite Cocinero 900ml": 115, "Arroz Gallo Oro 1kg": 92, "Yerba Playadito 500g": 78 },
  { month: "Abr", "Coca Cola 2.25L": 135, "Aceite Cocinero 900ml": 120, "Arroz Gallo Oro 1kg": 95, "Yerba Playadito 500g": 80 },
  { month: "May", "Coca Cola 2.25L": 138, "Aceite Cocinero 900ml": 125, "Arroz Gallo Oro 1kg": 96, "Yerba Playadito 500g": 82 },
  { month: "Jun", "Coca Cola 2.25L": 140, "Aceite Cocinero 900ml": 128, "Arroz Gallo Oro 1kg": 98, "Yerba Playadito 500g": 84 },
  { month: "Jul", "Coca Cola 2.25L": 142, "Aceite Cocinero 900ml": 130, "Arroz Gallo Oro 1kg": 98, "Yerba Playadito 500g": 85 },
  { month: "Ago", "Coca Cola 2.25L": 143, "Aceite Cocinero 900ml": 131, "Arroz Gallo Oro 1kg": 99, "Yerba Playadito 500g": 86 },
  { month: "Sep", "Coca Cola 2.25L": 145, "Aceite Cocinero 900ml": 132, "Arroz Gallo Oro 1kg": 98, "Yerba Playadito 500g": 87 },
  { month: "Oct", "Coca Cola 2.25L": 145, "Aceite Cocinero 900ml": 132, "Arroz Gallo Oro 1kg": 98, "Yerba Playadito 500g": 87 },
  { month: "Nov", "Coca Cola 2.25L": 146, "Aceite Cocinero 900ml": 133, "Arroz Gallo Oro 1kg": 99, "Yerba Playadito 500g": 88 },
  { month: "Dic", "Coca Cola 2.25L": 147, "Aceite Cocinero 900ml": 134, "Arroz Gallo Oro 1kg": 100, "Yerba Playadito 500g": 89 },
];

// Rotación de productos por mes (top productos) - Año 2026
export const mockProductRotation2026 = [
  { month: "Ene", "Coca Cola 2.25L": 150, "Aceite Cocinero 900ml": 138, "Arroz Gallo Oro 1kg": 105, "Yerba Playadito 500g": 92 },
  { month: "Feb", "Coca Cola 2.25L": 152, "Aceite Cocinero 900ml": 140, "Arroz Gallo Oro 1kg": 108, "Yerba Playadito 500g": 94 },
  { month: "Mar", "Coca Cola 2.25L": 155, "Aceite Cocinero 900ml": 142, "Arroz Gallo Oro 1kg": 110, "Yerba Playadito 500g": 96 },
  { month: "Abr", "Coca Cola 2.25L": 157, "Aceite Cocinero 900ml": 144, "Arroz Gallo Oro 1kg": 112, "Yerba Playadito 500g": 98 },
  { month: "May", "Coca Cola 2.25L": 159, "Aceite Cocinero 900ml": 146, "Arroz Gallo Oro 1kg": 114, "Yerba Playadito 500g": 100 },
  { month: "Jun", "Coca Cola 2.25L": 160, "Aceite Cocinero 900ml": 148, "Arroz Gallo Oro 1kg": 115, "Yerba Playadito 500g": 101 },
  { month: "Jul", "Coca Cola 2.25L": 162, "Aceite Cocinero 900ml": 150, "Arroz Gallo Oro 1kg": 116, "Yerba Playadito 500g": 102 },
  { month: "Ago", "Coca Cola 2.25L": 163, "Aceite Cocinero 900ml": 151, "Arroz Gallo Oro 1kg": 117, "Yerba Playadito 500g": 103 },
  { month: "Sep", "Coca Cola 2.25L": 164, "Aceite Cocinero 900ml": 152, "Arroz Gallo Oro 1kg": 118, "Yerba Playadito 500g": 104 },
  { month: "Oct", "Coca Cola 2.25L": 165, "Aceite Cocinero 900ml": 153, "Arroz Gallo Oro 1kg": 119, "Yerba Playadito 500g": 105 },
  { month: "Nov", "Coca Cola 2.25L": 166, "Aceite Cocinero 900ml": 154, "Arroz Gallo Oro 1kg": 120, "Yerba Playadito 500g": 106 },
  { month: "Dic", "Coca Cola 2.25L": 167, "Aceite Cocinero 900ml": 155, "Arroz Gallo Oro 1kg": 121, "Yerba Playadito 500g": 107 },
];

export const mockProductRotation = mockProductRotation2025;

// Productos con información completa (marca, fabricante)
export const mockProductsWithDetails = [
  { 
    productId: "1", 
    productName: "Coca Cola 2.25L", 
    brand: "Coca Cola", 
    manufacturer: "Coca Cola Company",
    category: "Bebidas", 
    timesAdded: 145, 
    totalValue: 580000 
  },
  { 
    productId: "2", 
    productName: "Aceite Cocinero 900ml", 
    brand: "Cocinero", 
    manufacturer: "Aceitera General Deheza",
    category: "Aceites", 
    timesAdded: 132, 
    totalValue: 396000 
  },
  { 
    productId: "3", 
    productName: "Arroz Gallo Oro 1kg", 
    brand: "Gallo Oro", 
    manufacturer: "Molinos Río de la Plata",
    category: "Almacén", 
    timesAdded: 98, 
    totalValue: 294000 
  },
  { 
    productId: "4", 
    productName: "Yerba Playadito 500g", 
    brand: "Playadito", 
    manufacturer: "Molinos Río de la Plata",
    category: "Yerbas", 
    timesAdded: 87, 
    totalValue: 435000 
  },
  { 
    productId: "5", 
    productName: "Lavandina Ayudín 1L", 
    brand: "Ayudín", 
    manufacturer: "Química Estrella",
    category: "Limpieza", 
    timesAdded: 76, 
    totalValue: 228000 
  },
  { 
    productId: "6", 
    productName: "Azúcar Ledesma 1kg", 
    brand: "Ledesma", 
    manufacturer: "Ledesma S.A.A.I.",
    category: "Almacén", 
    timesAdded: 65, 
    totalValue: 195000 
  },
  { 
    productId: "7", 
    productName: "Fideos Matarazzo Tallarín 500g", 
    brand: "Matarazzo", 
    manufacturer: "Molinos Río de la Plata",
    category: "Pastas", 
    timesAdded: 58, 
    totalValue: 232000 
  },
  { 
    productId: "8", 
    productName: "Leche La Serenísima 1L", 
    brand: "La Serenísima", 
    manufacturer: "Mastellone Hnos.",
    category: "Lácteos", 
    timesAdded: 54, 
    totalValue: 216000 
  },
];

export const mockMetrics: TicketPlusMetrics = {
  totalSent: 1250,
  totalOpened: 890,
  totalConverted: 456,
  openRate: 71.2,
  conversionRate: 36.5,
  totalAddedValue: 1250000,
  averageAddedValue: 2741,
  averageTicketIncrease: 18.5,
  noTePuedeFaltar: {
    totalSent: 1250,
    totalConverted: 312,
    conversionRate: 25.0,
    averageProductsAdded: 3.2,
  },
  sugerencias: {
    totalSent: 1250,
    totalConverted: 144,
    conversionRate: 11.5,
    averageProductsAdded: 2.1,
  },
  topProductsAdded: mockProductsWithDetails.map(p => ({
    productId: p.productId,
    productName: p.productName,
    category: p.category,
    timesAdded: p.timesAdded,
    totalValue: p.totalValue,
  })),
  period: {
    start: new Date(2025, 0, 1),
    end: new Date(2025, 11, 31),
  },
};

export const mockOrders: TicketPlusOrder[] = [
  {
    id: "1",
    orderId: "ORD-001",
    clientId: "CLI-001",
    clientName: "Kiosco San Martín",
    clientChannel: "kiosco",
    orderDate: new Date(),
    orderValue: 50000,
    status: "converted",
    expirationHours: 24,
    sentAt: new Date(),
    openedAt: new Date(),
    convertedAt: new Date(),
    addedValue: 10000,
  },
];
