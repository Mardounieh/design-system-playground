import { useContext } from "react";
import { DesignSystemContext } from "../context/DesignSystemContext";

export const useDesignSystem = () => {
  const context = useContext(DesignSystemContext);

  if (!context) {
    throw new Error("useDesignSystem must be used within DesignSystemProvider");
  }

  return context;
};
