import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "~/pages/home/HomePage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
};
