import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Home, CreatePoint } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cadastrar" exact component={CreatePoint} />
    </BrowserRouter>
  );
};

export default Routes;
