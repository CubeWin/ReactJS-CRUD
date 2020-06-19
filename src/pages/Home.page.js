import React from 'react';

import Bienvenida from '../components/home/Bienvenida';

class HomePage extends React.Component {
    render () {
        return (
            <Bienvenida
                title = "Bienvenid@"
                description = "CRUD ReactJS consumiendo API NodeJS"
                buttonMessage = "Ingresar"
            />
        );
    }
}

export default HomePage;