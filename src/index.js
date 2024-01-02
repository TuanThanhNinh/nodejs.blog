import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Components/GlobalStyles";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { NavDrawerContextProvide } from "./context/NavDrawerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <NavDrawerContextProvide>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </NavDrawerContextProvide>
        </Router>
    </React.StrictMode>
);
