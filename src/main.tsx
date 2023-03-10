import "./styles/index.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
