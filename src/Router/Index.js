import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import Routes from "./Routes";

const Router = memo(function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
});

export default Router;