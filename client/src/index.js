import React from 'react';
import ReactDOM from 'react-dom';
import InitStore from './redux/store';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <InitStore>
            <App/>
        </InitStore>
    </React.StrictMode>,
    document.getElementById('root'),
);

