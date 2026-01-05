import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../../../app/store";

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: Cookies.get("authToken") || null,
  refreshToken: Cookies.get("refreshToken") || null,
  isAuthenticated: !!Cookies.get("authToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ accessToken: string; refreshToken?: string }>) => {
      const { accessToken, refreshToken } = action.payload;
      state.token = accessToken;
      state.isAuthenticated = true;
      Cookies.set("authToken", accessToken, { expires: 1 });
      if (refreshToken) {
        state.refreshToken = refreshToken;
        Cookies.set("refreshToken", refreshToken, { expires: 7 });
      }
    },
    setLogout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      Cookies.remove("authToken");
      Cookies.remove("refreshToken");
    },
  },
});

export const { setCredentials, setLogout } = authSlice.actions;
export default authSlice.reducer;

export const selectAuthToken = (state: RootState) => state.global.auth.token;
export const selectIsAuthenticated = (state: RootState) => state.global.auth.isAuthenticated;
