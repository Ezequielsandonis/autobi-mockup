/**
 * Tipos para el feature Auto-FOLDER (Revistas)
 */

export interface Magazine {
  id: string;
  magazineId?: string;
  magazine_id?: string;
  name?: string;
  channel?: Channel;
  channel_id?: string;
  channelId?: string;
  channel_name?: string;
  channelName?: string;
  frequency?: Frequency;
  status?: MagazineStatus;
  createdAt?: string | Date;
  created_at?: string | Date;
  sentAt?: string | Date;
  sent_at?: string | Date;
  publishedAt?: string | Date;
  published_at?: string | Date;
  totalProducts?: number;
  total_products?: number;
  totalViews?: number;
  total_views?: number;
  totalOrdersGenerated?: number;
  total_orders_generated?: number;
}

export type Channel = 
  | "kioscos" 
  | "autoservicios" 
  | "tradicionales"
  | "supermercados";

export type Frequency = 
  | "semanal" 
  | "quincenal" 
  | "mensual";

export type MagazineStatus = 
  | "draft" 
  | "pending_approval" 
  | "approved" 
  | "sent" 
  | "published";

export interface MagazineProduct {
  id: string;
  productId?: string;
  product_id?: string;
  productName?: string;
  product_name?: string;
  brand?: string;
  manufacturer?: string;
  category?: string;
  originalPrice?: number;
  original_price?: number;
  discountPrice?: number;
  discount_price?: number;
  discountPercent?: number;
  discount_percent?: number;
  type?: ProductType;
  product_type?: ProductType;
}

export type ProductType = 
  | "oferta" 
  | "descuento" 
  | "bonificacion" 
  | "promocion" 
  | "combo" 
  | "novedad";

export interface MagazineOrder {
  id: string;
  orderId?: string;
  order_id?: string;
  magazineId?: string;
  magazine_id?: string;
  clientId?: string;
  client_id?: string;
  clientName?: string;
  client_name?: string;
  channel?: Channel;
  createdAt?: string | Date;
  created_at?: string | Date;
  totalValue?: number;
  total_value?: number;
  status?: OrderStatus;
  items?: number;
}

export type OrderStatus = 
  | "open" 
  | "pending" 
  | "confirmed" 
  | "cancelled";

export interface AutoFolderMetrics {
  // Métricas de revistas
  totalCreated?: number;
  total_created?: number;
  totalSent?: number;
  total_sent?: number;
  totalPublished?: number;
  total_published?: number;
  totalViews?: number;
  total_views?: number;
  averageViewsPerMagazine?: number;
  average_views_per_magazine?: number;
  
  // Métricas por canal
  byChannel?: {
    [key in Channel]?: {
      totalCreated?: number;
      total_created?: number;
      totalSent?: number;
      total_sent?: number;
      totalViews?: number;
      total_views?: number;
      totalOrders?: number;
      total_orders?: number;
    };
  };
  
  // Métricas de órdenes generadas
  totalOrdersGenerated?: number;
  total_orders_generated?: number;
  ordersOpenRate?: number; // porcentaje
  orders_open_rate?: number;
  averageOrderValue?: number;
  average_order_value?: number;
  totalOrderValue?: number;
  total_order_value?: number;
  
  // Métricas de productos
  totalProductsIncluded?: number;
  total_products_included?: number;
  productsByType?: {
    oferta?: number;
    descuento?: number;
    bonificacion?: number;
    promocion?: number;
    combo?: number;
    novedad?: number;
  };
  productsByBrand?: Array<{
    brand?: string;
    total?: number;
    percentage?: number;
  }>;
  productsByManufacturer?: Array<{
    manufacturer?: string;
    total?: number;
    percentage?: number;
  }>;
  
  // Métricas por frecuencia
  byFrequency?: {
    semanal?: {
      totalCreated?: number;
      totalSent?: number;
      totalViews?: number;
      totalOrders?: number;
    };
    quincenal?: {
      totalCreated?: number;
      totalSent?: number;
      totalViews?: number;
      totalOrders?: number;
    };
    mensual?: {
      totalCreated?: number;
      totalSent?: number;
      totalViews?: number;
      totalOrders?: number;
    };
  };
  
  // Período
  period?: {
    start?: string | Date;
    end?: string | Date;
    start_date?: string | Date;
    end_date?: string | Date;
  };
}

export interface AutoFolderFilters {
  dateRange?: {
    start: Date;
    end: Date;
  };
  channel?: Channel[];
  frequency?: Frequency[];
  status?: MagazineStatus[];
}
