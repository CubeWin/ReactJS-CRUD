import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound.page';

class Home extends React.Component {
    render() {
        const { path } = this.props;
        //console.log(path);
        const routes = [
            { exact: true, path: path + "/", component: () => <h1>Pagina inicial Home "/"</h1> },
            { exact: true, path: path + "/hola", component: () => <h1>pagina Saluda</h1> },
            { exact: true, path: [path + "/hola/:name", path + "/saludo/:name"], component: (props) => <h1>Hola {props.match.params.name}</h1> },
            {
                path: path + "/web", component: this.SubRoutes, routes: [
                    { exact: true, strict: true, path: path + "/web/bus", component: () => <h1>WEB pagina BUS</h1> },
                    { exact: true, strict: true, path: path + "/web/car", component: () => <h1>WEB pagina CARD</h1> },
                    {component: NotFound }
                ]
            },
            {
                path: path + "/literal", component: this.SubRoutes, routes: [
                    { exact: true, path: path + "/literal/bus", component: () => <h1>Literal pagina BUS</h1> },
                    { exact: true, path: path + "/literal/car", component: () => <h1>Literal pagina CARD</h1> },
                    {component: NotFound }
                ]
            },
            {component: NotFound }
        ];

        return (
            <Switch>
                {routes.map((route, i) => (
                    // <RouteWithSubRoutes key={i} {...routes} />
                    this.RouteWithSubRoutes({ ...route, key: i })
                ))}
            </Switch>
        );
    }

    RouteWithSubRoutes = (routes) => {
        console.log(routes);
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

    SubRoutes = ({ routes }) => {
        // console.log(routes);
        return (
            <div>
                <h1>Sub web</h1>
                <Switch>
                    {routes.map((route, i) => (
                        this.RouteWithSubRoutes({ ...route, key: i })
                    ))}
                </Switch>
            </div>
        );
    }
}

export default Home;