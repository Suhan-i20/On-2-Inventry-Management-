import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import "./index.css";
import { Routes } from "./provider/Route.tsx";
import { store } from "./provider/Store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <Toaster position="top-right" closeButton />
        <RouterProvider router={Routes} />
      </Provider>
    </PrimeReactProvider>
  </React.StrictMode>
);
