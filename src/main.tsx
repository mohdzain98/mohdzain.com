import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import App from "@/App";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
