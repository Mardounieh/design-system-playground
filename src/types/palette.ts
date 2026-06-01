export interface PaletteColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  border: string;
}

export interface PaletteState {
  colors: PaletteColors;
}

export type PaletteAction = {
  type: "SET_COLOR";
  payload: {
    key: keyof PaletteColors;
    value: string;
  };
};