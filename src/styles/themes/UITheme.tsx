import { useAtom } from "jotai"
import React from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { ThemeAtom } from "../../atoms/ThemeAtom"

export type ThemeSchemes = "light" | "dark"

const light: DefaultTheme = {
  navbarBackground: "#fff",
  background: "#dae0e6",
  secondary: "#0079d3",
  fontColor: "#000",
}

const dark: DefaultTheme = {
  navbarBackground: "#1a1a1b",
  background: "#030303",
  secondary: "#0079d3",
  fontColor: "#fff",
}

const themes: Record<ThemeSchemes, DefaultTheme> = {
  light,
  dark,
}

const UITheme: React.FC = (props) => {
  const [currentTheme] = useAtom(ThemeAtom)

  return (
    <ThemeProvider theme={themes[currentTheme]}>{props.children}</ThemeProvider>
  )
}

export default UITheme
