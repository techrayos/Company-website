import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollProgressBar />
          <CssBaseline />
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
