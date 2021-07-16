import React from 'react';
import Router from './Router';
import InitStore from './redux/store';

const App = () => {
    return (
        <InitStore>
            <Router/>
        </InitStore>
    );
};

export default App;
