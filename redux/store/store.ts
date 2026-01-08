import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slice/authSlice";
import uiReducer from "../features/slice/uiSlice";
import { baseApi } from "../features/api/baseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
