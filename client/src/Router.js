import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Chart from './pages/Chart';
import NotFound from './pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    key = '/'
                    path = '/'>
                    <Main/>
                </Route>
                <Route
                    exact
                    key = 'chart'
                    path = '/:ticker'>
                    <Chart/>
                </Route>
                <Route path = '*'>
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
