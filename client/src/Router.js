import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Main from './pages/main';
import ChartPage from './pages/chartPage';
import NotFound from './pages/notFound';

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
                    <ChartPage/>
                </Route>
                <Route path = '*'>
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
