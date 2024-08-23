import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWrapper from "./AppWrapper";

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <AppWrapper />
        </React.StrictMode>,
    );
}
