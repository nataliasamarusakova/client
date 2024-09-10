import React from 'react';
import styles from './Mark.module.css'
import Link from 'next/link';
import clsx from 'clsx';

const Mark: React.FC = () => {
    return (
        <div className={styles.mark}>
            <Link target='_blank' href="https://q-sender.ru/shop" className={styles.text}>
                <img src='../buyAccount.png' />
                <div>
                    <div>Купить аккаунты</div>
                    <div className={styles.description}>от 15р за единицу</div>
                    <i role="button" className={clsx("bi bi-people-fill mr-3", styles.active)}> +55% last month</i>
                </div>
            </Link>
            <Link target='_blank' href="https://q-sender.ru/shop" className={styles.text}>
                <img src='../proxy.png' />
                <div>
                    <div>Купить прокси</div>
                    <div className={styles.description}>от 35р за единицу</div>
                    <i role="button" className={clsx("bi bi-people-fill mr-3", styles.active)}> +55% last month</i>
                </div>
            </Link>
            <Link target='_blank' href="https://q-sender.ru/shop" className={styles.text}>
                <img src='../info.png' />
                <div>
                    <div>Прочитать информацию</div>
                    <div className={styles.description}>правила и лимиты</div>
                    <i role="button" className={clsx("bi bi-people-fill mr-3", styles.active)}> +55% last month</i>
                </div>
            </Link>
        </div >
    );
};

export default Mark;