import { FC, ChangeEvent, Dispatch, RefObject, SetStateAction, useState } from 'react';
import { IAccount } from '../../interface/account';
import styles from './AddFunctionForm.module.css';
import clsx from 'clsx';
import InviteFriends from '../InviteFriends/InviteFriends';
import SendMessageUser from '../SendMessageUser/SendMessageUser';
import LikeUser from '../LikeUser/LikeUser';

interface IFunctionsProps {
    setFunctions: Dispatch<SetStateAction<boolean>>
    selectAccount: IAccount | undefined
    formRef: RefObject<HTMLDivElement>
}

const AddFunctionForm: FC<IFunctionsProps> = ({ formRef, selectAccount, setFunctions }) => {

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setValue(reader.result as string);
                } else {
                    console.error('File content is not a string');
                }
            };
            reader.readAsText(file);
        }
    };

    const isOnlyDigits = (value?: string) => {
        if (!value) return false;
        const digitRegex = /^\d+$/;
        return !(value.split('\n').filter((item) => item.trim() !== '').every((item) => digitRegex.test(item.trim())));
    };

    const [activeTab, setActiveTab] = useState('use-add-friends');

    return <div className={styles.formModalContainer}>
        <div className={styles.formModalOverlay} />
        <div ref={formRef} className={styles.formModal}>
            <div className='d-flex text-center align-items-center mb-3'>
                <b className="flex-grow-1">СПИСОК ДОСТУПНЫХ ФУНКЦИЙ</b>
                <i role="button" onClick={() => setFunctions((show) => !show)} className="bi bi-x-lg text-primary fs-5"></i>
            </div>
            <form className="form-inline">
                <ul className="nav nav-tabs gap-1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${clsx(activeTab === 'use-add-friends' ? `active ${styles.NavLinkActive}` : styles.NavLink)}`} type="button" role="tab" onClick={() => setActiveTab('use-add-friends')}><i className="bi bi-person-fill me-2" />Инвайтер в друзья</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${clsx(activeTab === 'use-send-people-ls' ? `active ${styles.NavLinkActive}` : styles.NavLink)}`} type="button" role="tab" onClick={() => setActiveTab('use-send-people-ls')}><i className="bi bi-envelope-fill me-2" />Рассылка пользователям</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${clsx(activeTab === 'use-add-likes' ? `active ${styles.NavLinkActive}` : styles.NavLink)}`} type="button" role="tab" onClick={() => setActiveTab('use-add-likes')}><i className="bi bi-heart-fill me-2" />Лайкер пользователей</button>
                    </li> 
                </ul>
                {
                    activeTab === 'use-add-friends' && <InviteFriends handleFileChange={handleFileChange} isOnlyDigits={isOnlyDigits} selectAccount={selectAccount} setFunctions={setFunctions} />
                }
                {
                    activeTab === 'use-send-people-ls' && <SendMessageUser handleFileChange={handleFileChange} isOnlyDigits={isOnlyDigits} selectAccount={selectAccount} setFunctions={setFunctions} />
                }
                {
                    activeTab === 'use-add-likes' && <LikeUser handleFileChange={handleFileChange} isOnlyDigits={isOnlyDigits} selectAccount={selectAccount} setFunctions={setFunctions} />
                }
            </form>
        </div>
    </div>
};

export default AddFunctionForm;