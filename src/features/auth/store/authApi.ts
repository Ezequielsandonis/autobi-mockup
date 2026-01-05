import { baseApi } from "../../../services/baseApi";
import { clearUserData } from "../../users/store/userSlice";
import { AuthResponse, LoginRequest, SignupRequest } from "../types";
import { setCredentials, setLogout } from "./authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { result } = data;
          dispatch(
            setCredentials({
              accessToken: result.accessToken,
              refreshToken: result.refreshToken || "",
            })
          );
        } catch (error) {
          console.error("Error en login:", error);
        }
      },
    }),
    register: builder.mutation<AuthResponse, SignupRequest>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setCredentials({
              accessToken: data.result.accessToken,
              refreshToken: data.result.refreshToken || "",
            })
          );
        } catch (error) {
          console.error("Error en register:", error);
        }
      },
    }),
    refreshToken: builder.mutation<AuthResponse, { token: string }>({
      query: (payload) => ({
        url: "/auth/refresh",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setCredentials({
              accessToken: data.result.accessToken,
              refreshToken: data.result.refreshToken || "",
            })
          );
        } catch (error) {
          dispatch(setLogout());
          console.error("Error en refresh token:", error);
        }
      },
    }),
    logout: builder.mutation<void, string>({
      query: (userId) => ({
        url: "/auth/logout",
        method: "POST",
        body: { userId },
      }),
      async onQueryStarted(_arg, { dispatch }) {
        dispatch(setLogout());
        dispatch(clearUserData());
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation, useRefreshTokenMutation, useLogoutMutation } = authApi;
