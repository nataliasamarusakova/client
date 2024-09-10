import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ACCESS_TOKEN } from '@/src/constants/constants';
import Cookies from 'js-cookie';
import styles from './UserMenu.module.css'

interface IUserMenu {
    name?: string
}

const UserMenu: React.FC<IUserMenu> = ({ name }) => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => setIsOpen((show) => !show);
    const exit = () => Cookies.remove(ACCESS_TOKEN);

    const getName = (name?: string) => {
        if (!name) return '';
        const parts = name.split(' ');
        if (parts.length > 1) {
            return parts[0].charAt(0) + parts[1].charAt(0);
        } else {
            return parts[0].charAt(0);
        }
    };

    const handleClickOutSide = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutSide, true)
        return () => document.removeEventListener('click', handleClickOutSide, true)
    }, [])

    return (<div onClick={toggleMenu} className={styles.menuContainer} ref={menuRef}>
        <div className={styles.imageAvatar}>
            <span>{getName(name)}</span>
        </div>
        <span>{name}</span>
        {
            isOpen && (<div className={styles.profileMenuDropdown}>
                <Link href={'/i'}>
                    <i role="button" className="bi bi-house-door-fill" />
                    <span>Главная</span>
                </Link>
                <Link href={'/i/tariff'}>
                    <i role="button" className="bi bi-person-fill" />
                    <span>Тарифы</span>
                </Link>
                <Link href={'/i/settings'}>
                    <i role="button" className="bi bi-gear-fill" />
                    <span>Настройки</span>
                </Link>
                <hr className={styles.divider} />
                <Link onClick={exit} className={styles.buttonExit} href={'/auth/login'}>
                    <i role="button" className="bi bi-box-arrow-left" />
                    <span>Выйти</span>
                </Link>
            </div>)
        }
        <i role='button' className="bi bi-caret-down-fill" />
    </div>);
};

export default UserMenu;

