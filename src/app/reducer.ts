import { combineReducers } from "@reduxjs/toolkit";
import uiReducer, { UIState } from "../features/ui/uiSlice";
import userReducer, { UserState } from "../features/users/store/userSlice";
import authReducer, { AuthState } from "../features/auth/store/authSlice";
import profileReducer from "../features/users/store/profileSlice";
import type { ProfileState } from "../features/users/store/profileSlice";

/**
 * Root reducer function that combines all the individual reducers into a single reducer.
 * @returns The combined reducer function.
 */
export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  auth: authReducer,
  profile: profileReducer,
});

export type RootStateType = {
  user: UserState;
  ui: UIState;
  auth: AuthState;
  profile: ProfileState;
};
