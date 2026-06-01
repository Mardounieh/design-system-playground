import { useReducer, type ReactNode } from "react";

import { PaletteContext } from "./PaletteContext";

import type { PaletteAction, PaletteState } from "../types/palette";

const initialState: PaletteState = {
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

const paletteReducer = (
  state: PaletteState,
  action: PaletteAction,
): PaletteState => {
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

export const PaletteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(paletteReducer, initialState);

  return (
    <PaletteContext.Provider value={{ state, dispatch }}>
      {children}
    </PaletteContext.Provider>
  );
};
