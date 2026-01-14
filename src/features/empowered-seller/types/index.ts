/**
 * Tipos para el feature Empowered Seller
 */

export interface EmpoweredSellerSuggestion {
  id: string;
  sellerId?: string;
  seller_id?: string;
  sellerName?: string;
  seller_name?: string;
  clientId?: string;
  client_id?: string;
  clientName?: string;
  client_name?: string;
  suggestionType?: SuggestionType;
  suggestion_type?: SuggestionType;
  products?: Array<{
    productId?: string;
    product_id?: string;
    productName?: string;
    product_name?: string;
    reason?: string;
  }>;
  sentAt?: string | Date;
  sent_at?: string | Date;
  viewedAt?: string | Date;
  viewed_at?: string | Date;
  status: SuggestionStatus;
  matched?: boolean; // Si la sugerencia fue comprada
  matchedAt?: string | Date;
  matched_at?: string | Date;
}

export type SuggestionType = 
  | "habitual" // Productos que compra habitualmente
  | "faltante" // Productos que compraba pero no está comprando (últimas 4 compras)
  | "nuevo" // Productos que nunca compró pero podría incorporar
  | "complementario"; // Productos complementarios a lo que compra

export type SuggestionStatus = 
  | "sent" 
  | "viewed" 
  | "matched" 
  | "not_matched";

export interface Alert {
  id: string;
  sellerId?: string;
  seller_id?: string;
  sellerName?: string;
  seller_name?: string;
  clientId?: string;
  client_id?: string;
  clientName?: string;
  client_name?: string;
  daysWithoutPurchase?: number;
  days_without_purchase?: number;
  lastPurchaseDate?: string | Date;
  last_purchase_date?: string | Date;
  sentAt?: string | Date;
  sent_at?: string | Date;
  viewedAt?: string | Date;
  viewed_at?: string | Date;
  status: AlertStatus;
  reactivated?: boolean; // Si el cliente volvió a comprar después de la alerta
  reactivatedAt?: string | Date;
  reactivated_at?: string | Date;
}

export type AlertStatus = 
  | "sent" 
  | "viewed" 
  | "reactivated" 
  | "pending";

export interface EmpoweredSellerMetrics {
  // Métricas de sugerencias
  totalSuggestions?: number;
  total_suggestions?: number;
  totalSent?: number;
  total_sent?: number;
  totalViewed?: number;
  total_viewed?: number;
  totalMatched?: number;
  total_matched?: number;
  matchRate?: number; // porcentaje de coincidencias
  match_rate?: number;
  viewRate?: number; // porcentaje de visualizaciones
  view_rate?: number;
  
  // Métricas por tipo de sugerencia
  suggestionsByType?: {
    habitual?: {
      total?: number;
      matched?: number;
      matchRate?: number;
    };
    faltante?: {
      total?: number;
      matched?: number;
      matchRate?: number;
    };
    nuevo?: {
      total?: number;
      matched?: number;
      matchRate?: number;
    };
    complementario?: {
      total?: number;
      matched?: number;
      matchRate?: number;
    };
  };
  
  // Métricas de alertas
  totalAlerts?: number;
  total_alerts?: number;
  alertsSent?: number;
  alerts_sent?: number;
  alertsViewed?: number;
  alerts_viewed?: number;
  clientsReactivated?: number;
  clients_reactivated?: number;
  reactivationRate?: number; // porcentaje
  reactivation_rate?: number;
  
  // Métricas de vendedores
  activeSellers?: number;
  active_sellers?: number;
  sellersUsingSuggestions?: number;
  sellers_using_suggestions?: number;
  adoptionRate?: number; // porcentaje
  adoption_rate?: number;
  
  // Métricas de valor
  averageOrderValueWithSuggestions?: number;
  average_order_value_with_suggestions?: number;
  averageOrderValueWithoutSuggestions?: number;
  average_order_value_without_suggestions?: number;
  valueIncrease?: number; // porcentaje
  value_increase?: number;
  
  // Métricas temporales
  averageResponseTime?: number; // horas entre sugerencia y visita
  average_response_time?: number;
  
  // Métricas de clientes
  clientsWithSuggestions?: number;
  clients_with_suggestions?: number;
  averageSuggestionsPerClient?: number;
  average_suggestions_per_client?: number;
  
  // Período
  period?: {
    start?: string | Date;
    end?: string | Date;
    start_date?: string | Date;
    end_date?: string | Date;
  };
}

export interface EmpoweredSellerFilters {
  dateRange?: {
    start: Date;
    end: Date;
  };
  sellerId?: string;
  seller_id?: string;
  clientId?: string;
  client_id?: string;
  suggestionType?: SuggestionType[];
  suggestion_type?: SuggestionType[];
  status?: SuggestionStatus[];
}
