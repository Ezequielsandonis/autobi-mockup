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

// Base query sin autorización para el refresh token (evita loop infinito)
const baseQueryWithoutAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "*/*");
    headers.set("x-api-key", import.meta.env.VITE_API_API_KEY);
    headers.set("accept-language", "es");
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Si obtenemos un 401, intentamos refrescar el token
  if (result.error && result.error.status === 401) {
    // Obtén el refreshToken desde el estado
    const refreshToken = (api.getState() as RootState).global.auth.refreshToken;
    if (refreshToken) {
      // Llama al endpoint de refresh token (sin autorización para evitar loop)
      const refreshResult = await baseQueryWithoutAuth(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { token: refreshToken },
        },
        api,
        extraOptions
      );
      
      if (refreshResult.data && !refreshResult.error) {
        // Actualiza el token en el estado
        const data = refreshResult.data as AuthResponse;
        if (data.result?.data) {
          api.dispatch(
            setCredentials({
              accessToken: data.result.data.access_token,
              refreshToken: data.result.data.refresh_token || refreshToken,
            })
          );
          // Reintenta la petición original con el nuevo token
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(setLogout());
        }
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
  tagTypes: ["Users", "TicketPlus"],
  endpoints: () => ({}),
});
