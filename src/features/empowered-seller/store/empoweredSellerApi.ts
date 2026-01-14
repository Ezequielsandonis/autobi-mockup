/**
 * API endpoints para Empowered Seller
 * 
 * TODO: When backend is ready, uncomment and configure endpoints:
 * 
 * import { baseApi } from "../../../services/baseApi";
 * import { ApiResponse } from "../../../types/global-types";
 * import { EmpoweredSellerMetrics, EmpoweredSellerSuggestion, Alert, EmpoweredSellerFilters } from "../types";
 * 
 * export const empoweredSellerApi = baseApi.injectEndpoints({
 *   endpoints: (builder) => ({
 *     getEmpoweredSellerMetrics: builder.query<
 *       ApiResponse<EmpoweredSellerMetrics>,
 *       EmpoweredSellerFilters
 *     >({
 *       query: (filters) => {
 *         const params = new URLSearchParams();
 *         if (filters.dateRange) {
 *           params.append("startDate", filters.dateRange.start.toISOString());
 *           params.append("endDate", filters.dateRange.end.toISOString());
 *         }
 *         // ... otros filtros
 *         const queryString = params.toString();
 *         return {
 *           url: `/empowered-seller/metrics${queryString ? `?${queryString}` : ""}`,
 *           method: "GET",
 *         };
 *       },
 *       providesTags: ["EmpoweredSeller"],
 *     }),
 * 
 *     getSuggestions: builder.query<
 *       ApiResponse<EmpoweredSellerSuggestion[]>,
 *       EmpoweredSellerFilters
 *     >({
 *       query: (filters) => {
 *         const params = new URLSearchParams();
 *         // ... filtros
 *         const queryString = params.toString();
 *         return {
 *           url: `/empowered-seller/suggestions${queryString ? `?${queryString}` : ""}`,
 *           method: "GET",
 *         };
 *       },
 *       providesTags: ["EmpoweredSeller"],
 *     }),
 * 
 *     getAlerts: builder.query<
 *       ApiResponse<Alert[]>,
 *       EmpoweredSellerFilters
 *     >({
 *       query: (filters) => {
 *         const params = new URLSearchParams();
 *         // ... filtros
 *         const queryString = params.toString();
 *         return {
 *           url: `/empowered-seller/alerts${queryString ? `?${queryString}` : ""}`,
 *           method: "GET",
 *         };
 *       },
 *       providesTags: ["EmpoweredSeller"],
 *     }),
 *   }),
 *   overrideExisting: false,
 * });
 * 
 * export const {
 *   useGetEmpoweredSellerMetricsQuery,
 *   useGetSuggestionsQuery,
 *   useGetAlertsQuery,
 * } = empoweredSellerApi;
 */
