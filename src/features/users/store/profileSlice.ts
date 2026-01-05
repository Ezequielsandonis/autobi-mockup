import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user.types";
import { usersApi } from "./usersApi";
import { RootState } from "../../../app/store";

interface ProfileState {
  profile: User | null;
  isLoading: boolean;
}

export type { ProfileState };

const initialState: ProfileState = {
  profile: null,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<User | null>) => {
      state.profile = action.payload;
    },
    clearProfile: (state) => {
      state.profile = null;
    },
  },
  extraReducers: (builder) => {
    // Sincronizar con la query de getCurrentUser
    builder
      .addMatcher(usersApi.endpoints.getCurrentUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(usersApi.endpoints.getCurrentUser.matchFulfilled, (state, action) => {
        state.profile = action.payload.result;
        state.isLoading = false;
      })
      .addMatcher(usersApi.endpoints.getCurrentUser.matchRejected, (state) => {
        state.isLoading = false;
      })
      // También actualizar cuando se modifican las metas nutricionales
      .addMatcher(usersApi.endpoints.setNutritionGoal.matchFulfilled, (state, action) => {
        state.profile = action.payload.result;
      });
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

// Selectores
export const selectProfile = (state: RootState) => state.global.profile;
export const selectIsLoadingProfile = (state: RootState) => state.global.profile?.isLoading;

export default profileSlice.reducer;
