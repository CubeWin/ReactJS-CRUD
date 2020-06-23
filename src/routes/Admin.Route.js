import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound.page';

import LoginPage from '../pages/Login.page';

class AdminRoute extends React.Component {
    render() {
        const { path } = this.props;

        const routes = [
            { exact: true, path: [path + "/", path + "/login"], component: LoginPage },
            { exact: true, path: path + "/persona", component: () => <h1>Personas</h1> },
            { exact: true, path: path + "/usuario", component: () => <h1>Usuarios</h1> },
            { component: NotFound }
        ];

        return (
            this.SubRoutes(routes)
        );
    }

    RouteWithSubRoutes = (routes) => {
        return (
            <Route
                exact={routes.exact}
                strict={routes.strict}
                path={routes.path}
                key={routes.key}
                render={props => (
                    <routes.component {...props} routes={routes.routes} />
                )}
            />
        );
    }

    SubRoutes = (routes) => {
        return (
            <Switch>
                {routes.map((route, i) => (
                    this.RouteWithSubRoutes({ ...route, key: i })
                ))}
            </Switch>
        );
    }
}

export default AdminRoute;