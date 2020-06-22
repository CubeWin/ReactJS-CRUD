import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/** @Paginas */
// import LoginPage from './pages/Login.page';
// import HomePage from './pages/Home.page';
// import App from './routers/app';
// import Index from './routers/administrator';
import Index from './routers/Index';
/** @Complementos */
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
