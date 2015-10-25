import React from "react";
import {Router, Route} from "react-router";
import {Landing, MeshPage} from "./pages";

const Routes = (
    <Router>
        <Route path="/" component={Landing} />
        <Route path="mesh" component={MeshPage} />
    </Router>
);

export default Routes;