import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

class ButtonReturn extends React.Component {
    render() {
        const { textButton } = this.props;
        return (
            <div className="position-absolute"
                style={{
                    top: '15px',
                    right: '25px'
                }}
            >
                <Link to="/" className="btn btn-info font-weight-bold">
                    <FontAwesomeIcon icon={faBackspace} /> {textButton}
                </Link>
            </div>
        );
    }
}

export default ButtonReturn;