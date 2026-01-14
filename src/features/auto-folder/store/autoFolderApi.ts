/**
 * API endpoints para Auto-FOLDER
 * 
 * TODO: When backend is ready, uncomment and configure endpoints:
 * 
 * import { baseApi } from "../../../services/baseApi";
 * import { ApiResponse } from "../../../types/global-types";
 * import { AutoFolderMetrics, Magazine, AutoFolderFilters } from "../types";
 * 
 * export const autoFolderApi = baseApi.injectEndpoints({
 *   endpoints: (builder) => ({
 *     getAutoFolderMetrics: builder.query<
 *       ApiResponse<AutoFolderMetrics>,
 *       AutoFolderFilters
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
 *           url: `/auto-folder/metrics${queryString ? `?${queryString}` : ""}`,
 *           method: "GET",
 *         };
 *       },
 *       providesTags: ["AutoFolder"],
 *     }),
 * 
 *     getMagazines: builder.query<
 *       ApiResponse<Magazine[]>,
 *       AutoFolderFilters
 *     >({
 *       query: (filters) => {
 *         const params = new URLSearchParams();
 *         // ... filtros
 *         const queryString = params.toString();
 *         return {
 *           url: `/auto-folder/magazines${queryString ? `?${queryString}` : ""}`,
 *           method: "GET",
 *         };
 *       },
 *       providesTags: ["AutoFolder"],
 *     }),
 *   }),
 *   overrideExisting: false,
 * });
 * 
 * export const {
 *   useGetAutoFolderMetricsQuery,
 *   useGetMagazinesQuery,
 * } = autoFolderApi;
 */
