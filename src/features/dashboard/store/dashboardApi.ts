/**
 * API endpoints for Dashboard
 * 
 * TODO: When backend is ready, uncomment and configure endpoints:
 * 
 * import { baseApi } from "../../../services/baseApi";
 * import { ApiResponse } from "../../../types/global-types";
 * import {
 *   GeneralMetrics,
 *   MonthlyData,
 *   MacroData,
 *   MacroDimension,
 *   MicroProductoData,
 *   MicroClienteData,
 *   MicroVendedorData,
 *   MicroType,
 *   ImpactoAutobimation,
 *   FeatureSummary,
 * } from "../types";
 * 
 * export const dashboardApi = baseApi.injectEndpoints({
 *   endpoints: (builder) => ({
 *     // Historical Analysis - General Metrics
 *     getHistoricalGeneralMetrics: builder.query<
 *       ApiResponse<GeneralMetrics>,
 *       void
 *     >({
 *       query: () => "/dashboard/historical/general",
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     // Historical Analysis - Monthly Data (36 months)
 *     getHistoricalMonthlyData: builder.query<
 *       ApiResponse<MonthlyData[]>,
 *       void
 *     >({
 *       query: () => "/dashboard/historical/monthly",
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     // Historical Analysis - Macro Data by Dimension
 *     getHistoricalMacroData: builder.query<
 *       ApiResponse<MacroData[]>,
 *       { dimension: MacroDimension }
 *     >({
 *       query: ({ dimension }) => `/dashboard/historical/macro/${dimension}`,
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     // Historical Analysis - Micro Data by Type
 *     getHistoricalMicroProductos: builder.query<
 *       ApiResponse<MicroProductoData[]>,
 *       void
 *     >({
 *       query: () => "/dashboard/historical/micro/productos",
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     getHistoricalMicroClientes: builder.query<
 *       ApiResponse<MicroClienteData[]>,
 *       void
 *     >({
 *       query: () => "/dashboard/historical/micro/clientes",
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     getHistoricalMicroVendedores: builder.query<
 *       ApiResponse<MicroVendedorData[]>,
 *       void
 *     >({
 *       query: () => "/dashboard/historical/micro/vendedores",
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     // Impact Autobimation (6 months)
 *     getImpactMetrics: builder.query<
 *       ApiResponse<ImpactoAutobimation>,
 *       void
 *     >({
 *       query: () => "/dashboard/impact",
 *       providesTags: ["Dashboard"],
 *     }),
 * 
 *     // Feature Summary
 *     getFeatureSummary: builder.query<
 *       ApiResponse<FeatureSummary>,
 *       void
 *     >({
 *       query: () => "/dashboard/features/summary",
 *       providesTags: ["Dashboard"],
 *     }),
 *   }),
 *   overrideExisting: false,
 * });
 * 
 * export const {
 *   useGetHistoricalGeneralMetricsQuery,
 *   useGetHistoricalMonthlyDataQuery,
 *   useGetHistoricalMacroDataQuery,
 *   useGetHistoricalMicroProductosQuery,
 *   useGetHistoricalMicroClientesQuery,
 *   useGetHistoricalMicroVendedoresQuery,
 *   useGetImpactMetricsQuery,
 *   useGetFeatureSummaryQuery,
 * } = dashboardApi;
 */
