import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { CssBaseline } from "@mui/material";
import getTheme from "../theme"; // Import the getTheme function from theme.ts
import Routes from "./Routes";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const theme = getTheme(rootElement); // Pass rootElement to getTheme to use it in the theme configuration

root.render(
  <React.StrictMode>
    <CssBaseline />
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
