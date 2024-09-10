import React, { Dispatch, SetStateAction } from 'react';
import styles from './ConfirmForm.module.css';
import clsx from 'clsx';

interface IConfirmForm {
    text: string;
    description?: string
    close: Dispatch<SetStateAction<boolean>>;
    func: () => void;
}

const ConfirmForm: React.FC<IConfirmForm> = ({ text, description, func, close }) => {

    return (<div className={styles.configFormContainer}>
        <div className={styles.formOverlay} />
        <div className={styles.formModal}>
            <div className='d-flex gap-2 align-items-baseline justify-content-center'>
                <h5>{text}</h5>
                <i role="button" onClick={() => close((show) => !show)} className="bi bi-x-lg text-primary fs-5 ms-auto" />
            </div>
            <form className={clsx(styles.form, "form-inline")}>
                {
                    description && <p className={clsx(styles.description, "mt-2 mb-1")}>{description}</p>
                }
                <div className="form-inline d-flex justify-content-center gap-2 mt-3">
                    <button type="button" onClick={() => { func(); close((show) => !show) }} className="btn btn-primary">Да</button>
                    <button type="button" onClick={() => close((show) => !show)} className="btn btn-outline-primary">Нет</button>
                </div>
            </form>
        </div>
    </div >);
};

export default ConfirmForm;