import { RootState } from "@/redux/store/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      // Handle SSR case where store may not be available
      try {
        const state = getState() as RootState;
        const token = state.auth.accessToken;

        if (token) {
          headers.set("authorization", `${token}`);
        }
      } catch (error) {
        // Silently handle errors during SSR
        console.warn("Could not access store during SSR:", error);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Products"],
  endpoints: () => ({}),
});
