export interface DesignSystemColors {
  primary: string;
  secondary: string;
  accent: string;
  background?: string;
  surface?: string;
  text?: string;
  border?: string;
}

export interface DesignSystemRadius {
  sm: string;
  md: string;
  lg: string;
}

export interface DesignSystemSpacing {
  sm: string;
  md: string;
  lg: string;
}

export interface DesignSystemTypography {
  fontFamily: string;
  fontSizeBase: string;
}

export interface DesignSystemShadows {
  sm: string;
  md: string;
  lg: string;
}

export interface DesignSystemState {
  colors: DesignSystemColors;
  radius?: DesignSystemRadius;
  spacing?: DesignSystemSpacing;
  typography?: DesignSystemTypography;
  shadows?: DesignSystemShadows;
}

export type DesignSystemAction = {
  type: "SET_COLOR";
  payload: {
    key: keyof DesignSystemColors;
    value: string;
  };
};

export type DesignTokenCategory =
  | "colors"
  | "radius"
  | "spacing"
  | "typography"
  | "shadows";
