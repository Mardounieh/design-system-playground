import { useReducer, type ReactNode } from "react";

import { DesignSystemContext } from "./DesignSystemContext";

import type {
  DesignSystemAction,
  DesignSystemState,
} from "../types/design_system";

const initialState: DesignSystemState = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    accent: "#a855f7",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#111827",
    border: "#e5e7eb",
  },
};

const designSystemReducer = (
  state: DesignSystemState,
  action: DesignSystemAction,
): DesignSystemState => {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.key]: action.payload.value,
        },
      };

    default:
      return state;
  }
};

export const DesignSystemProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(designSystemReducer, initialState);

  return (
    <DesignSystemContext.Provider value={{ state, dispatch }}>
      {children}
    </DesignSystemContext.Provider>
  );
};
