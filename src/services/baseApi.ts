import { createApi, fetchBaseQuery, FetchArgs, FetchBaseQueryError, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { setCredentials, setLogout } from "../features/auth/store/authSlice";
import { AuthResponse } from "../features/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // Obtén el token desde el estado (o localStorage)
    const token = (getState() as RootState).global.auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "*/*");
    headers.set("Cache-Control", "no-cache"); // Evita el uso de caché
    headers.set("x-api-key", import.meta.env.VITE_API_API_KEY);
    headers.set("accept-language", "es");
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Si obtenemos un 401, intentamos refrescar el token
  if (result.error && result.error.status === 401) {
    // Obtén el refreshToken desde el estado o localStorage
    const refreshToken = (api.getState() as RootState).global.auth.refreshToken;
    if (refreshToken) {
      // Llama al endpoint de refresh token
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh-token", // <-- Cambio aquí: usar '/auth/refresh-token'
          method: "POST",
          body: { token: refreshToken }, // <-- Aseguramos que la propiedad se llame "token"
        },
        api,
        extraOptions
      );
      if (refreshResult.data) {
        // Actualiza el token en el estado
        const data: AuthResponse = refreshResult.data as any;
        api.dispatch(setCredentials(data?.result as any));
        // Reintenta la petición original con el nuevo token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Si el refresh falla, cierra sesión
        api.dispatch(setLogout());
      }
    } else {
      // No hay refreshToken, cierra sesión
      api.dispatch(setLogout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Users"],
  endpoints: () => ({}),
});
