import { ApiResponse } from "../../../types/global-types";

export enum UserRoles {
  ADMIN = "admin",
  MANAGER = "manager",
  EMPLOYEE = "employee",
  PROVIDER = "provider",
  CUSTOMER = "customer",
}

export const UserRolesTranslations = {
  [UserRoles.ADMIN]: "Administrador",
  [UserRoles.MANAGER]: "Gerente",
  [UserRoles.EMPLOYEE]: "Empleado",
  [UserRoles.PROVIDER]: "Proveedor",
  [UserRoles.CUSTOMER]: "Cliente",
};

export const translateUserRole = (role: UserRoles): string => UserRolesTranslations[role] ?? role;

export const getUserRoleIcon = (role: UserRoles | "inactive"): string => {
  switch (role) {
    case UserRoles.ADMIN:
      return "pi pi-shield";
    case UserRoles.MANAGER:
      return "pi pi-briefcase";
    case UserRoles.EMPLOYEE:
      return "pi pi-user";
    case UserRoles.PROVIDER:
      return "pi pi-send";
    case UserRoles.CUSTOMER:
      return "pi pi-users";
    case "inactive":
      return "pi pi-ban";
    default:
      return "pi pi-question";
  }
};

export interface CreateUserDto {
  name?: string;
  email?: string;
  password: string;
  roles: UserRoles[];
  phone?: string;
  secretToken?: string;
}

export interface UpdateUserDto {
  name?: string;
  oldPassword?: string;
  newPassword?: string;
  refreshToken?: string;
  status?: boolean;
  roles?: UserRoles[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  roles: UserRoles[]; // TODO cambiar a un enum o similar
  address?: Address;
  phone: string;
  password: string;
  phoneIsVerified: boolean;
  emailIsVerified: boolean;
  otp: string;
  otpExpires?: Date | null;
  refreshToken: string;
  status: boolean;
}

export interface Address {
  addr1: string;
  addr2?: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

/**
 * Respuestas estandarizadas para usuarios.
 */
export type UserResponse = ApiResponse<User>;
export type AllUsersResponse = ApiResponse<User[]>;
