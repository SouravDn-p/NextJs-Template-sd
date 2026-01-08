import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export const useAuth = () => {
  const { user, accessToken } = useSelector((state: RootState) => state.auth);

  return {
    user,
    accessToken,
    isAuthenticated: !!accessToken,
  };
};
