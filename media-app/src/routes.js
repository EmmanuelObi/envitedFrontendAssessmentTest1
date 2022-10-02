import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="*" element={<LandingPage />} />
    </Switch>
  );
};

export default Routes;
