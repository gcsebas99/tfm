import { createContext, useReducer } from "react";

export type ReducerAction = {
  type: string;
  payload: any;
}

export type AppStateType = {
  pageTransition: "down" | "up";
  cameraPermission: "granted" | "denied" | "unset";
};

export const initialAppState:AppStateType = {
  pageTransition: "down",
  cameraPermission: "unset",
};

export const AppContext = createContext<{
  appState: AppStateType;
  dispatch: React.Dispatch<ReducerAction>;
}>({ appState: initialAppState, dispatch: () => null });

type AppStateProps = {
  children: React.ReactNode;
};

const reducer = (state: AppStateType, action: ReducerAction) => {
  switch (action.type) {
    case "SET_PAGE_TRANSITION":
      return { ...state, pageTransition: action.payload };
    case "SET_CAMERA_PERMISSION":
      return { ...state, cameraPermission: action.payload };
    default:
      return state;
  }
};

const AppState:React.FC<AppStateProps> = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialAppState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export {
  AppState,
  type AppStateProps,
};
