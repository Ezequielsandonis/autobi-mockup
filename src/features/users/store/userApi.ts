import { baseApi } from "../../../services/baseApi";
import { ApiResponse } from "../../../types/global-types";
import { AllUsersResponse, CreateUserDto, UpdateUserDto, User, UserResponse } from "../types/user.types";
import { setUserData } from "./userSlice";

// Ajusta las rutas a las que definiste en tu NestJS controller
// (e.g. '/create-user', '/get-all-users', etc.)
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserResponse, CreateUserDto>({
      query: (body) => ({
        url: "/users/create-user",
        method: "POST",
        body,
      }),
    }),
    getAllUsers: builder.query<AllUsersResponse, void>({
      query: () => "/users/get-all-users",
    }),
    getUserByEmail: builder.query<UserResponse, string>({
      query: (email) => `/users/get-by-email/${email}`,
      async onQueryStarted(email, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Se asume que data.result contiene la información del usuario
          dispatch(setUserData(data.result));
        } catch (error) {
          console.error("Error al obtener el perfil de usuario:", error);
        }
      },
    }),
    updateUser: builder.mutation<UserResponse, { id: string; data: UpdateUserDto }>({
      query: ({ id, data }) => ({
        url: `/users/update-user/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deactivateUser: builder.mutation<UserResponse, string>({
      query: (id) => ({
        url: `/users/deactivate-user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useGetAllUsersQuery, useGetUserByEmailQuery, useUpdateUserMutation, useDeactivateUserMutation, useLazyGetUserByEmailQuery } = userApi;
