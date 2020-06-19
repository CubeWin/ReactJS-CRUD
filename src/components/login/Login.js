import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import cubImage from '../../images/cub2.png';

import './Login.css';

class InicioLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cwDate: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setCwState();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    setCwState() {
        this.setState({
            cwDate: new Date()
        })
    }

    render() {
        const { leftColor, rightColor, title, buttonMessage } = this.props;
        return (
            <div className="d-flex justify-content-center align-items-center"
                style={{
                    height: '100vh',
                    width: '100%',
                    backgroundImage: `url(${cubImage})`
                }}
            >
                <div className="wrapper d-flex justify-content-center align-items-center"
                    style={{
                        background: `linear-gradient(135deg, ${leftColor} 0%, ${rightColor} 100%)`
                    }}
                >
                    <form autocomplete="off" onsubmit="return false" className="cw-form-login text-center p-5 rounded" id="login">
                        <h1 className="cw-font-futura font-weight-bold text-white">{title}</h1>
                        <small className="text-white">{this.state.cwDate.toLocaleTimeString()}</small>
                        <br />
                        <input type="text" className="font-weight-bold text-dark" required name="usuario" placeholder="Usuario" id="usuarioInput" minlength="4" />
                        <label for="usuarioInput" className="error yellow-text small d-block"></label>
                        <input type="password" className="font-weight-bold text-dark" required name="password" placeholder="Clave" id="passwordInput" minlength="4" />
                        <label for="passwordInput" className="error yellow-text small d-block"></label>
                        <button id="enviar" type="submit" onclick="loginUser()">{buttonMessage} <FontAwesomeIcon icon={faSignInAlt} /></button>
                        <div>
                            <div id="respuestaPost" className="card-body">
                            </div>
                        </div>
                    </form>
                    <ul className="bg-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className="d-flex align-items-center justify-content-center">
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default InicioLogin;