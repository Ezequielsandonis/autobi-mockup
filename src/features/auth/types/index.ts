import { ApiResponse } from "../../../types/global-types";

export interface LoginRequest {
  email: string;
  password: string;
  tenantId: string;
  organizationId: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  roles: string[];
  phone?: string;
}

export interface AuthUser {
  user_id: string;
  email: string;
  roles: string[];
  tenant_id: string;
  organization_id: string;
}

export interface AuthData {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: AuthUser;
}

export interface AuthResult {
  data: AuthData;
}

export type AuthResponse = ApiResponse<AuthResult>;
