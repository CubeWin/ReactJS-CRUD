import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import NotFound from '../pages/NotFound.page';

class Index extends React.Component {

    render() {
        const myRoutes = [
            { rute: Route, exact: true, path: "/", component: () => (<div><h1>URL "/"</h1><p className="text-primary">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { rute: Route, exact: true, path: "/page", component: () => (<div><h1>URL "/page"</h1><p className="text-info">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { rute: Route, exact: true, path: "/page/main", component: () => (<div><h1>URL "/page/main"</h1><p className="text-warning">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { rute: Route, exact: true, path: "/page/layo", component: () => (<div><h1>URL "/page/layo"</h1><p className="text-danger">Lorem ipsum dolor sit amet consectetur.</p></div>) },
            { rute: Home, path: "/home" },
            { rute: Admin, path: "/admin" },
            { rute: Route, component: NotFound }
        ];

        return (
            <Router>
                <ul>
                    <li><Link to="/">/</Link></li>
                    <li><Link to="/page">/page</Link></li>
                    <li><Link to="/page/main">/page/main</Link></li>
                    <li><Link to="/page/layo">/page/layo</Link></li>
                    <li><Link to="/home">/home</Link></li>
                    <li><Link to="/home/">/home/</Link></li>
                    <li><Link to="/home/hola">/home/hola</Link></li>
                    <li><Link to="/home/hola/eliud">/home/hola/:name</Link></li>
                    <li><Link to="/home/web/bus">/home/web/bus</Link></li>
                    <li><Link to="/home/web/car">/home/web/car</Link></li>
                    <li><Link to="/home/web/notfound">/home/web/<b>notfound</b></Link></li>
                    <li><Link to="/home/literal/bus">/home/literal/bus</Link></li>
                    <li><Link to="/home/literal/car">/home/literal/car</Link></li>
                    <li><Link to="/home/literal/notfound">/home/literal/<b>notfound</b></Link></li>
                    <li><Link to="/admin">/admin</Link></li>
                    <li><Link to="/admin/">/admin/</Link></li>
                    <li><Link to="/admin/persona">/admin/persona</Link></li>
                    <li><Link to="/admin/usuario">/admin/usuario</Link></li>
                    <li><Link to="/notfound">Not found</Link></li>
                </ul>
                <Switch>
                    {myRoutes.map((route, i) => (
                        <route.rute exact={route.exact} key={i} {...route} />
                    ))}
                </Switch>
            </Router>
        );
    }
}

export default Index;