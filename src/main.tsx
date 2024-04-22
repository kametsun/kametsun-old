import React from "react";
import ReactDOM from "react-dom/client";
import App from "@kametsun/App.tsx";
import "@kametsun/index.css";
import { UIProvider, getThemeSchemeScript } from "@yamada-ui/react";
import theme, { config } from "./theme";

const injectThemeSchemeScript = () => {
  const scriptContent = getThemeSchemeScript({
    initialThemeScheme: config.initialThemeScheme,
  });
  const script = document.createElement("script");
  script.textContent = scriptContent;
  document.head.appendChild(script);
};

injectThemeSchemeScript();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  </React.StrictMode>
);
