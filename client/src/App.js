import React from 'react';
import withTickersData from './HOC/withTickersData';
import Router from './Router';

const App = () => {
    return (
        <Router/>
    );
};

export default withTickersData(App);
