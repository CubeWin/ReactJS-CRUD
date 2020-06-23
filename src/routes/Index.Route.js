import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/** @Rutas */
import HomeRoute from './Home.Route';
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
            { exact: true, path: "/page", component: () => (<div><h1>URL "/page"</h1><p className="text-info">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { exact: true, path: "/page/main", component: () => (<div><h1>URL "/page/main"</h1><p className="text-warning">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { exact: true, path: "/page/layo", component: () => (<div><h1>URL "/page/layo"</h1><p className="text-danger">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { path: "/home", component: HomeRoute },
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