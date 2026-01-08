import { User } from "@/types/user/userType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveAuthToStorage, clearAuthFromStorage } from "@/lib/auth-utils";
import { AuthState } from "@/types/auth/authType";

// Try to load initial state from localStorage
const loadInitialState = (): AuthState => {
  try {
    const stored = localStorage.getItem("nextjs_template_auth");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to load auth state from storage:", error);
  }

  return {
    accessToken: null,
    user: null,
  };
};

const initialState: AuthState = loadInitialState();

// Define the action type for HYDRATE_AUTH
interface HydrateAuthAction {
  type: "HYDRATE_AUTH";
  payload: Partial<AuthState>;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken?: string; user: User }>
    ) => {
      const { accessToken, user } = action.payload;
      if (accessToken) state.accessToken = accessToken;
      state.user = user || null;

      // Persist to localStorage
      saveAuthToStorage({
        accessToken: accessToken || state.accessToken,
        user,
      });
    },
    setSession: (
      state,
      action: PayloadAction<{
        session: {
          user?: { id?: string; name?: string; email?: string; role?: string };
          accessToken?: string;
        };
      }>
    ) => {
      const { session } = action.payload;
      if (session?.user) {
        state.user = {
          _id: session.user.id || "",
          name: session.user.name || "",
          phone: session.user.email || "",
          roles: [
            session.user.role === "ADMIN" || session.user.role === "MODERATOR"
              ? session.user.role
              : "USER",
          ],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
      }
      if (session?.accessToken) {
        state.accessToken = session.accessToken;
      }
    },
    logOut: (state) => {
      state.accessToken = null;
      state.user = null;

      // Clear from localStorage
      clearAuthFromStorage();
    },
  },
  extraReducers: (builder) => {
    // Handle hydration from localStorage
    builder.addMatcher(
      (action): action is HydrateAuthAction => action.type === "HYDRATE_AUTH",
      (state, action) => {
        return { ...state, ...action.payload };
      }
    );
  },
});

export const { setCredentials, setSession, logOut } = authSlice.actions;
export default authSlice.reducer;
