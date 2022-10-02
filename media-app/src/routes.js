import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Create from "./pages/Create/Create";
import Event from "./pages/Event/Event";
import LandingPage from "./pages/LandingPage/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/event" element={<Event />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="*" element={<LandingPage />} />
    </Switch>
  );
};

export default Routes;
