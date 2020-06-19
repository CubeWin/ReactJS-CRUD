import React from 'react';
import cubImage from '../../images/cub2.png';
import Formulario from './Formulario';
import ButtonReturn from './ButtonReturn';
import './Background.css';

class Background extends React.Component {

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
                <ButtonReturn
                    textButton = "Ir al inicio"
                />
                <div className="wrapper d-flex justify-content-center align-items-center"
                    style={{
                        background: `linear-gradient(135deg, ${leftColor} 0%, ${rightColor} 100%)`
                    }}
                >
                    <Formulario
                        title = {title}
                        buttonMessage = {buttonMessage}
                    />
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

export default Background;