import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import './Bienvenida.css';

class Bienvenida extends React.Component {
    render() {
        const { title, description, buttonMessage } = this.props;
        return (
            <div className="bg-secondary text-white d-flex justify-content-center align-items-center"
                style={{
                    height: '100vh',
                    width: '100%'
                }}
            >
                <div className="card">
                    <div className="card-body text-center">
                        <h1 className="text-primary">{title}</h1>
                        <p className="text-secondary">{description}</p>
                        <Link to="/login" className="card-link text-uppercase font-weight-bold">
                            {buttonMessage} <FontAwesomeIcon icon={faSignInAlt} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bienvenida;