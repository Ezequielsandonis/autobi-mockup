/**
 * API endpoints para Ticket Plus
 * 
 * TODO: Cuando el backend esté listo, descomentar y configurar los endpoints:
 * 
 * import { baseApi } from "../../../services/baseApi";
 * import { ApiResponse } from "../../../types/global-types";
 * import { TicketPlusOrder, TicketPlusMetrics, TicketPlusFilters } from "../types";
 * 
 * export const ticketPlusApi = baseApi.injectEndpoints({
 *   endpoints: (builder) => ({
 *     getTicketPlusMetrics: builder.query<ApiResponse<TicketPlusMetrics>, TicketPlusFilters>({
 *       query: (filters) => ({
 *         url: "/ticket-plus/metrics",
 *         method: "GET",
 *         params: filters,
 *       }),
 *       providesTags: ["TicketPlus"],
 *     }),
 *     getTicketPlusOrders: builder.query<ApiResponse<TicketPlusOrder[]>, TicketPlusFilters>({
 *       query: (filters) => ({
 *         url: "/ticket-plus/orders",
 *         method: "GET",
 *         params: filters,
 *       }),
 *       providesTags: ["TicketPlus"],
 *     }),
 *   }),
 *   overrideExisting: false,
 * });
 * 
 * export const {
 *   useGetTicketPlusMetricsQuery,
 *   useGetTicketPlusOrdersQuery,
 * } = ticketPlusApi;
 */
