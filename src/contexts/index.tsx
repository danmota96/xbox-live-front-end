import theme from "assets/styles/theme";
import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GameProvider } from "./games";
import { GenreProvider } from "./genres";
import { ProfileProvider } from "./profiles";
import { UserProvider } from "./user";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
        <ProfileProvider>
        <GameProvider>
          <GenreProvider>
            {children}
          </GenreProvider>
        </GameProvider>
        </ProfileProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
