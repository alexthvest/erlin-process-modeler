import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "~/pages/home/HomePage";
import { ProjectPage } from "~/pages/project/ProjectPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/project" component={ProjectPage} />
      </Switch>
    </BrowserRouter>
  );
};
