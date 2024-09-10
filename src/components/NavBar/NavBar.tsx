"use client"

import Link from "next/link"
import styles from './NavBar.module.css'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

const NavBar = () => {

    const pathname = usePathname()

    return (<nav className={clsx("py-0 px-3", styles.width)}>
        <div className={styles.containerMenu}>
            <Link href="/i" aria-disabled={pathname == '/i'}>
                <img width={150} height={135} className={clsx(styles.selectImage, "p-4")} src='../logo.png' />
            </Link>
            <b className={clsx("fs-6", styles.color)}>ACCOUNTS TOOL</b>
            <ul className={styles.menuList}>
                <li>
                    <Link href="/i" className={styles.disableLink} aria-disabled={pathname == '/i'}>
                        <span className={clsx(styles.menuLink, pathname == '/i' && styles.menuSelectItem)}>
                            <i className={`bi bi-person-fill ${styles.menuLinkText}`} />
                            Аккаунты
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/i/logs" className={styles.disableLink} aria-disabled={pathname == '/i/logs'}>
                        <span className={clsx(styles.menuLink, pathname == '/i/logs' && styles.menuSelectItem)}>
                            <i className={`bi bi-file-text-fill ${styles.menuLinkText}`} />
                            Журнал
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/i/statistic" className={styles.disableLink} aria-disabled={pathname == '/i/statistic'}>
                        <span className={clsx(styles.menuLink, pathname == '/i/statistic' && styles.menuSelectItem)}>
                            <i className={`bi bi-bar-chart-fill ${styles.menuLinkText}`} />
                            Статистика
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/i/settings" className={styles.disableLink} aria-disabled={pathname == '/i/settings'}>
                        <span className={clsx(styles.menuLink, pathname == '/i/settings' && styles.menuSelectItem)}>
                            <i className={`bi bi-gear-fill ${styles.menuLinkText}`} />
                            Настройки
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    </nav >)
}

export default NavBar;