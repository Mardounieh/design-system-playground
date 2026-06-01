import { createContext } from "react";
import type { Dispatch } from "react";
import type {
  PaletteAction,
  PaletteState,
} from "../types/palette";

export interface PaletteContextType {
  state: PaletteState;
  dispatch: Dispatch<PaletteAction>;
}

export const PaletteContext =
  createContext<PaletteContextType | null>(null);