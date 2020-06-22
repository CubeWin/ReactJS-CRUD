import React from 'react';
import { Route, Switch } from 'react-router-dom';

const routes = [
    { path: "/", component: () => <h1>Bienvenida</h1> },
    { path: "/persona", component: () => <h1>Personas</h1> },
    { path: "/usuario", component: () => <h1>Usuarios</h1> }
];

const Admin = (props) => {
    const prefix = props.path;
    return (
        <Switch>
            {routes.map((route, i) => (
                <Route exact key={i} path={prefix + route.path} render={route.component} />
            ))}
        </Switch>
    );
}

export default Admin;