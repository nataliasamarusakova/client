import React from 'react';
import styles from './Loader.module.css'
import clsx from 'clsx';

interface ILoader {
    text?: string
    className?: string;
}

const Loader: React.FC<ILoader> = ({ text, className }) => {
    return (
        <div className={clsx(styles.loader, className)}>
            <div className="spinner-border text-primary" role="status" />
            {
                text && <div className="mt-3">{text}</div>
            }
        </div>
    );
};

export default Loader;