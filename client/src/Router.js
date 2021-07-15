import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Main from './pages/main';

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
                    key = 'category'
                    path = '/categories'>
                    {/*<Category/>*/}
                </Route>
                <Route path = '*'>
                    {/*<NotFound/>*/}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
