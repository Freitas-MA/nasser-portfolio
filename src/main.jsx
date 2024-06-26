import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Home,
  Consultas,
  Contact,
  BeatrizFreitas,
  ConsultasItem,
  Error404,
} from "./pages/index";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/beatriz-freitas", element: <BeatrizFreitas /> },
      { path: "/consultas", element: <Consultas /> },
      { path: "/contato", element: <Contact /> },
      { path: "/consultas/:id", element: <ConsultasItem /> },

      { path: "*", element: <Error404 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<App />} />
    </RouterProvider>
  </React.StrictMode>
);
