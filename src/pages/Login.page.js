import React from 'react';

import Background from '../components/login/Background';

class LoginPage extends React.Component {
    render () {
        return (
            <Background
                leftColor = "rgba(146, 255, 192, 1)"
                rightColor = "rgba(0, 38, 97, 1)"
                title = "Bienvenido"
                buttonMessage = "validar"
            />
        );
    }
}

export default LoginPage;