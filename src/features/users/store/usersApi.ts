import { baseApi } from "../../../services/baseApi";
import { ApiResponse } from "../../../types/global-types";
import { User, SetNutritionGoalDto, MacroComparison } from "../types/user.types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Obtener perfil del usuario actual
    getCurrentUser: builder.query<ApiResponse<User>, void>({
      query: () => "/users/profile",
      providesTags: ["Users"],
    }),

    // Actualizar metas nutricionales
    setNutritionGoal: builder.mutation<ApiResponse<User>, SetNutritionGoalDto>({
      query: (data) => ({
        url: "/users/nutrition-goal",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),

    // Obtener comparación de macros para una fecha
    getMacroComparison: builder.query<ApiResponse<MacroComparison>, string>({
      query: (date) => `/users/macros?date=${date}`,
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetCurrentUserQuery, useSetNutritionGoalMutation, useGetMacroComparisonQuery, useLazyGetMacroComparisonQuery } = usersApi;
