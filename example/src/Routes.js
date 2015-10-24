import React from "react";
import {Router, Route} from "react-router";
import {Landing} from "./pages";

const Routes = (
    <Router>
        <Route path="/" component={Landing}>
        </Route>
    </Router>
);

export default Routes;