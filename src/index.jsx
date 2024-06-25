import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

/* GLOBAL VARIABLES */

window.$primaryLanguage = "en";
window.$secondaryLanguage = "pl";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

// Create a root for React 18
const container = document.getElementById("root");
const root = createRoot(container);

// Render the App component
root.render(<App />);

// Register the service worker
serviceWorker.register();
