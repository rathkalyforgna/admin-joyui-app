"use client";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider theme={theme}>
        <GlobalStyles
          styles={(theme) => ({
            "[data-feather], .feather": {
              color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
              margin: "var(--Icon-margin)",
              fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
              width: "1em",
              height: "1em",
            },
          })}
        />
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
