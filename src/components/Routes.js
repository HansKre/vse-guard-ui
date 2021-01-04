import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ShowCase from './ShowCase';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/showcase">
                <ShowCase />
            </Route>
        </Switch>
    )
}

export default Routes;