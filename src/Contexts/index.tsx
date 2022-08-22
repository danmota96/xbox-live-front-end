import theme from "assets/styles/theme";
import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GameProvider } from "./games";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps ) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GameProvider>
          {children}
        </GameProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
