"use client";

import { useUserProfile } from '@/src/hooks/userUserProfile';
import styles from './Header.module.css'
import Loader from '../Loader/Loader';
import UserMenu from '../UserMenu/UserMenu';
import clsx from 'clsx';

const Header = () => {

    const { user, isLoadingUser } = useUserProfile();

    return (<header className={styles.toolBar}>
        <div className={styles.headerRight}>
            <b>Поиск</b>
            <div className="position-relative">
                <i className="fa fa-search position-absolute"></i>
                <input className={clsx("form-control", styles.input)} type="search" />
            </div>
            <i role='button' className="bi bi-bell-fill fs-4" />
            <div className={styles.userMenuContainer}>
                {
                    isLoadingUser ? <Loader /> : <UserMenu name={user?.name} />
                }
            </div>
        </div>
    </header >)
}

export default Header;