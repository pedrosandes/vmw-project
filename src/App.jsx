import React from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Routes from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
