import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import InicioLogin from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <InicioLogin
            leftColor = "rgba(146, 255, 192, 1)"
            rightColor = "rgba(0, 38, 97, 1)"
            title = "Bienvenido"
            buttonMessage = "validar"
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
