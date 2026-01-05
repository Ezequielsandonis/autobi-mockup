import { ApiResponse } from "../../../types/global-types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  roles: string[];
  phone?: string;
}

export interface AuthResult {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export type AuthResponse = ApiResponse<AuthResult>;
