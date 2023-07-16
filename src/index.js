import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);