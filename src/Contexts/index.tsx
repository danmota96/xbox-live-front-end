import theme from "assets/styles/theme";
import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GameProvider } from "./games";
import { GenreProvider } from "./genres";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GameProvider>
          <GenreProvider>
            {children}
          </GenreProvider>
        </GameProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
