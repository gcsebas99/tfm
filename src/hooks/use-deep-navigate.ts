import { AppContext } from "@/app-state";
import { useContext } from "react";
import { useNavigate } from "react-router";

export const useDeepNavigate = (): any => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const navigateDown = (path:string) => {
    dispatch({ type: "SET_PAGE_TRANSITION", payload: "down" });
    navigate(path);
  };

  const navigateUp = (path:string) => {
    dispatch({ type: "SET_PAGE_TRANSITION", payload: "up" });
    navigate(path);
  };

  return {
    navigateDown,
    navigateUp,
  };
}