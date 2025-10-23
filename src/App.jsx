import React from "react";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./router/Router";

const App = () => {
  return <RouterProvider router={Routing} />;
};

export default App;
