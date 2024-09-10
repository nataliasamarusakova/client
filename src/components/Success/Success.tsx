import React from 'react';
import './Success.css'

interface ISuccess {
    text: string
}

const Success: React.FC<ISuccess> = ({ text }) => {
    return (
        <div className="loader-form">
            <i className="bi bi-hand-thumbs-up-fill text-primary fs-1"></i>
            <div className="mt-3">{text}</div>
        </div>
    );
};

export default Success;