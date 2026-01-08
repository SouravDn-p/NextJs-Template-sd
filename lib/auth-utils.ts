import { User } from "@/types/user/userType";

// Key for storing auth data in localStorage
const AUTH_STORAGE_KEY = "nextjs_template_auth";

// Define the structure for stored auth data
interface StoredAuthData {
  accessToken: string | null;
  user: User | null;
}

/**
 * Save authentication data to localStorage
 */
export const saveAuthToStorage = (data: StoredAuthData): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(AUTH_STORAGE_KEY, serializedData);
  } catch (error) {
    console.error("Failed to save auth data to storage:", error);
  }
};

/**
 * Load authentication data from localStorage
 */
export const loadAuthFromStorage = (): StoredAuthData | null => {
  try {
    const serializedData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!serializedData) {
      return null;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Failed to load auth data from storage:", error);
    return null;
  }
};

/**
 * Clear authentication data from localStorage
 */
export const clearAuthFromStorage = (): void => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear auth data from storage:", error);
  }
};

/**
 * Hydrate auth state from localStorage
 * Dispatch this action after store initialization
 */
export const hydrateAuthState = () => {
  const storedData = loadAuthFromStorage();
  if (storedData) {
    return {
      type: "HYDRATE_AUTH",
      payload: storedData,
    };
  }
  return { type: "@@INIT" }; // Return a no-op action if no data
};
