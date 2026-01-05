import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Estado para el Toast
export interface ToastState {
  show: boolean;
  severity?: "success" | "info" | "warn" | "error";
  summary?: string;
  detail?: string;
}

// Nuevo estado para el Loader
export interface LoaderState {
  show: boolean;
  message?: string;
  image?: string;
}

// Estado global de la UI
export interface UIState {
  toast: ToastState;
  loader: LoaderState;
}

// Estado inicial con loader usando la nueva interfaz
const initialState: UIState = {
  toast: {
    show: false,
  },
  loader: {
    show: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Reducers para el Toast
    showToast: (state, action: PayloadAction<Pick<ToastState, "severity" | "summary" | "detail">>) => {
      state.toast = {
        ...(state.toast || {}),
        show: true,
        ...action.payload,
      };
    },

    hideToast: (state) => {
      state.toast.show = false;
    },
    // Reducers para el Loader
    showLoader: (state, action: PayloadAction<{ message?: string; image?: string }>) => {
      state.loader.show = true;
      state.loader.message = action.payload.message;
      state.loader.image = action.payload.image;
    },
    hideLoader: (state) => {
      state.loader.show = false;
      state.loader.message = undefined;
      state.loader.image = undefined;
    },
  },
});

export const { showToast, hideToast, showLoader, hideLoader } = uiSlice.actions;
export default uiSlice.reducer;
