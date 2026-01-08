import { useAuthStatus } from "./useAuthStatus";

export const useAuth = () => {
  const { user, isAuthenticated } = useAuthStatus();

  return {
    user,
    isAuthenticated,
  };
};
