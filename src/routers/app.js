import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home.page';
import Login from '../pages/Login.page';
import NotFound from '../pages/NotFound.page';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}
export default App;