import { createContext } from "react";
import type { Dispatch } from "react";
import type {
  DesignSystemAction,
  DesignSystemState,
} from "../types/design_system";

export interface DesignSystemContextType {
  state: DesignSystemState;
  dispatch: Dispatch<DesignSystemAction>;
}

export const DesignSystemContext =
  createContext<DesignSystemContextType | null>(null);
