import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/** @Rutas */
import AdminRoute from './Admin.Route';
/** @Páginas */
import HomePage from '../pages/Home.page';
import LoginPage from '../pages/Login.page';
import NotFound from '../pages/NotFound.page';

class Index extends React.Component {

    render() {
        const myRoutes = [
            { exact: true, path: "/", component: HomePage},
            { exact: true, path: "/login", component: LoginPage},
            { path: "/admin", component: AdminRoute },
            { component: NotFound }
        ];

        return (
            <Router>
                <Switch>
                    {myRoutes.map((route, i) => (
                        <Route
                            exact={route.exact}
                            strict={route.strict}
                            path={route.path}
                            key={route.key}
                            render={props => (
                                <route.component {...props} path={route.path} />
                            )}
                        />

                    ))}
                </Switch>
            </Router>
        );
    }
}

export default Index;