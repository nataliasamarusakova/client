import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (<footer className="p-3 mt-4 bg-gradient-warning text-dark">
        <div className="row">
            <div className="col-md-5">
                <h5 className="mb-3">Информация</h5>
                <p>ACCOUNTS TOOL - Автоматизированная система для продвижения<br />в социальных сетях за пару кликов.</p>
            </div>
            <div className="col-md-4">
                <h5 className="mb-3">Инструкции</h5>
                <ul className="list-unstyled">
                    <li className="mb-1">
                        <a href="/" className={styles.footerLink}>Главная страница</a>
                    </li>
                    <li className="mb-1">
                        <a href="/info/privacy" target='_blank' className={styles.footerLink}>Политика конфиденциальности</a>
                    </li>
                    <li className="mb-1">
                        <a href="/info/terms" target='_blank' className={styles.footerLink}>Пользовательское соглашение</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 className="mb-3">Контакты</h5>
                <ul className="list-unstyled">
                    <li className="mb-1">
                        <i className="bi bi-send-exclamation-fill me-2" />
                        <a href="#" className={styles.footerLink}>Новостной канал</a>
                    </li>
                    <li className="mb-1">
                        <i className="bi bi-send-fill me-2" />
                        <a href="#" className={styles.footerLink}>Написать в поддержку</a>
                    </li>
                    <li className="mb-1">
                        <i className="bi bi-envelope-fill me-2" />
                        <span className={styles.footerLink}>dmsssoft@gmail.com</span>
                    </li>
                </ul>
            </div>
        </div>
        <hr className={styles.divider} />
        <div className="text-center">
            <p>&copy; {new Date().getFullYear()} ACCOUNTS TOOL. Все права защищены.</p>
        </div>
    </footer>);
};

export default Footer;