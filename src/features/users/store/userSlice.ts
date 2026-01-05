// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../../../app/store";
import { UserRoles } from "../types/user.types";

export interface Address {
  addr1: string;
  addr2?: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

/**
 * Representa los datos del usuario.
 */
export interface UserState {
  id: string;
  name: string;
  email: string;
  roles: UserRoles[];
  address?: Address;
  phone: string;
  phoneIsVerified: boolean;
  emailIsVerified: boolean;
  otp: string;
  otpExpires?: Date | null;
  refreshToken: string;
  password: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  roles: [],
  address: {
    addr1: "",
    addr2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  },
  phone: "",
  phoneIsVerified: false,
  emailIsVerified: false,
  otp: "",
  otpExpires: null,
  refreshToken: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Establece los datos del usuario (p.ej. tras un login exitoso).
     */
    setUserData: (state, action: PayloadAction<UserState>) => {
      // Ejemplo: almacenar email en cookies
      Cookies.set("email", action.payload.email);
      return (state = action.payload);
    },

    /**
     * Limpia los datos del usuario (p.ej. tras un logout).
     */
    clearUserData: (state) => {
      Cookies.remove("email");
      return initialState;
    },

    /**
     * Ejemplo de setter para marcar teléfono verificado.
     */
    setPhoneVerified: (state, action: PayloadAction<boolean>) => {
      state.phoneIsVerified = action.payload;
    },

    /**
     * Ejemplo de setter para marcar email verificado.
     */
    setEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.emailIsVerified = action.payload;
    },
  },
});

export const { setUserData, clearUserData, setPhoneVerified, setEmailVerified } = userSlice.actions;

export default userSlice.reducer;

/** Selectores */
export const selectUserData = (state: RootState) => state.global.user;
export const selectUserRoles = (state: RootState) => state.global.user.roles;
export const selectUserEmail = (state: RootState) => state.global.user.email;
