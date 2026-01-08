import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { toggleTheme, setTheme } from "@/redux/features/slice/uiSlice";

export const useTheme = () => {
  const { theme } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const toggleCurrentTheme = () => {
    dispatch(toggleTheme());
  };

  const setCurrentTheme = (theme: "light" | "dark") => {
    dispatch(setTheme(theme));
  };

  return {
    theme,
    toggleCurrentTheme,
    setCurrentTheme,
  };
};
