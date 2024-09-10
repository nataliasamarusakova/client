import React, { Dispatch, SetStateAction } from 'react';
import './Settings.css';

interface ISettingsForm {
    setShowSettingsForm: Dispatch<SetStateAction<boolean>>;
}

const SettingsForm: React.FC<ISettingsForm> = ({ setShowSettingsForm }) => {

    return (
        <div className="form-modal-container">
            <div className="form-modal-overlay"></div>
            <div className="form-modal">
                <form className="form-inline">
                    <div className="settings-function">
                        <input id="use-anti-captcha" type="checkbox" name="" value="{option}" />
                        <label htmlFor="use-anti-captcha">Использовать антикапчу</label>
                    </div>
                    <div className="settings-function">
                        <input id="use-sleep" type="checkbox" name="" value="{option}" />
                        <label htmlFor="use-sleep">Использовать задержку</label>
                    </div>
                    <div className="settings-function">
                        <input id="use-anti-ban" type="checkbox" name="" value="{option}" />
                        <label htmlFor="use-anti-ban">Использовать антибан</label>
                    </div>
                    <button type="button" onClick={() => setShowSettingsForm((show) => !show)} className="btn btn-primary mt-5">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SettingsForm;