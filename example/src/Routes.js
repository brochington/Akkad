import React from "react";
import {Router, Route} from "react-router";
import pages from './pages';

const {
    Landing,
    MeshPage,
    SimpleBox,
    ShapesPage,
    CollisionsPage,
    TriggersPage,
    ClickTheBox,
    HeightMapPage,
    WebVRPage
} = pages;

const Routes = (
    <Router>
        <Route path="/" component={Landing} >
            <Route path="mesh" component={MeshPage} />
            <Route path="simple-box" component={SimpleBox} />
            <Route path="shapes" component={ShapesPage} />
            <Route path="collisions" component={CollisionsPage} />
            <Route path="triggers" component={TriggersPage} />
            <Route path="clickthebox" component={ClickTheBox} />
            <Route path="heightmap" component={HeightMapPage} />
            <Route path="webvr" component={WebVRPage} />
        </Route>
    </Router>
);

export default Routes;
