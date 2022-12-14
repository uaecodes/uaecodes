import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TerminalContextProvider } from "react-terminal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./codeCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TerminalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/uaecodes" element={<App />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/uaecodes/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </TerminalContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
