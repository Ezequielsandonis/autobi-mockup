/**
 * Tipos para el feature Ticket Plus
 */

export interface TicketPlusOrder {
  id: string;
  orderId?: string;
  order_id?: string; // Backend puede usar snake_case
  clientId?: string;
  client_id?: string;
  clientName?: string;
  client_name?: string;
  clientChannel?: string;
  client_channel?: string; // kiosco, autoservicio, tradicional, etc.
  orderDate?: string | Date; // Backend puede enviar string ISO
  order_date?: string | Date;
  orderValue?: number;
  order_value?: number;
  status: TicketPlusStatus;
  expirationHours?: number; // 24, 48, 72
  expiration_hours?: number;
  sentAt?: string | Date;
  sent_at?: string | Date;
  openedAt?: string | Date;
  opened_at?: string | Date;
  convertedAt?: string | Date;
  converted_at?: string | Date;
  addedValue?: number;
  added_value?: number;
}

export type TicketPlusStatus = 
  | "pending" 
  | "sent" 
  | "opened" 
  | "converted" 
  | "expired";

export interface TicketPlusMetrics {
  // Métricas de envío (acepta ambos formatos del backend)
  totalSent?: number;
  total_sent?: number;
  totalOpened?: number;
  total_opened?: number;
  totalConverted?: number;
  total_converted?: number;
  openRate?: number; // porcentaje
  open_rate?: number;
  conversionRate?: number; // porcentaje
  conversion_rate?: number;
  
  // Métricas de valor
  totalAddedValue?: number;
  total_added_value?: number;
  averageAddedValue?: number;
  average_added_value?: number;
  averageTicketIncrease?: number; // porcentaje
  average_ticket_increase?: number;
  
  // Métricas por tipo de sugerencia
  noTePuedeFaltar?: {
    totalSent?: number;
    total_sent?: number;
    totalConverted?: number;
    total_converted?: number;
    conversionRate?: number;
    conversion_rate?: number;
    averageProductsAdded?: number;
    average_products_added?: number;
  };
  no_te_puede_faltar?: {
    totalSent?: number;
    total_sent?: number;
    totalConverted?: number;
    total_converted?: number;
    conversionRate?: number;
    conversion_rate?: number;
    averageProductsAdded?: number;
    average_products_added?: number;
  };
  sugerencias?: {
    totalSent?: number;
    total_sent?: number;
    totalConverted?: number;
    total_converted?: number;
    conversionRate?: number;
    conversion_rate?: number;
    averageProductsAdded?: number;
    average_products_added?: number;
  };
  
  // Métricas de productos
  topProductsAdded?: Array<{
    productId?: string;
    product_id?: string;
    productName?: string;
    product_name?: string;
    category?: string;
    timesAdded?: number;
    times_added?: number;
    totalValue?: number;
    total_value?: number;
  }>;
  top_products_added?: Array<{
    productId?: string;
    product_id?: string;
    productName?: string;
    product_name?: string;
    category?: string;
    timesAdded?: number;
    times_added?: number;
    totalValue?: number;
    total_value?: number;
  }>;
  
  // Métricas temporales
  period?: {
    start?: string | Date;
    end?: string | Date;
    start_date?: string | Date;
    end_date?: string | Date;
  };
}

export interface TicketPlusFilters {
  dateRange?: {
    start: Date;
    end: Date;
  };
  status?: TicketPlusStatus[];
  channel?: string[];
  expirationHours?: number[];
}

export interface TicketPlusProduct {
  id: string;
  name: string;
  category: string;
  brand?: string;
  price: number;
  type: "no-te-puede-faltar" | "sugerencia";
}
