import { atom } from "jotai";
import { ThemeSchemes } from "../styles/themes/UITheme";


export const ThemeAtom = atom<ThemeSchemes>('light');