const HomePage = () => {

    return <>
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.55s" data-wow-delay="0s" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="/" className="logo">
                                <img src="logo.png" width={50} height={50} alt="Accounts Tool" />
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section">
                                    <a href="#top">ГЛАВНАЯ</a>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#services">ФУНКЦИИ</a>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#how-it-works">ПОДДЕРЖКА</a>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#pricing">ТАРИФЫ</a>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#footer">НОВОСТИ</a>
                                </li>
                                <li>
                                    <div className="gradient-button">
                                        <a href="/auth/login">
                                            Войти<i className="fa fa-sign-in-alt ms-1" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s" >
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <h2 className='header_color'>ACCOUNTS TOOL</h2>
                                            <p className='header_color'>
                                                Представляем автоматизированную систему для продвижения в социальных сетях, которая освободит Ваше время и позволит сфокусироваться на том, что действительно важно.
                                            </p>
                                            <div className="white-button first-button scroll-to-section">
                                                <a href="/auth/register">
                                                    Зарегистрироваться
                                                </a>
                                            </div>
                                            <div className="white-button scroll-to-section">
                                                <a href="/auth/login">
                                                    Войти<i className="fas fa-sign-in-alt" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s" >
                                    <img src="assets/images/slider-dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4>ОСНОВНЫЕ <em>ФУНКЦИИ</em></h4>
                            <img src="assets/images/heading-line-dec.png" alt="" />
                            <p>
                                С помощью нашей системы вы сможете автоматизировать до 80% рутинных задач в социальных сетях, освобождая время для более важных дел.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="service-item first-service">
                            <div className="icon" />
                            <h4>ПОИСК</h4>
                            <p>
                                Система автоматически находит пользователей, подписчиков, группы по Вашим критериям, что позволяет адаптировать свою стратегию продвижения.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item second-service">
                            <div className="icon" />
                            <h4>ИНВАЙТИНГ</h4>
                            <p>
                                Система автоматически отправляет приглашения в группы, друзья, сообщества, а также мероприятия, что экономит Ваше время и силы.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item fourth-service">
                            <div className="icon" />
                            <h4>РАССЫЛКА</h4>
                            <p>
                                Система автоматически отправляет сообщения подписчикам, по группам с актуальной информацией, новостями, предложениями.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item third-service">
                            <div className="icon" />
                            <h4>ЛАЙКИНГ</h4>
                            <p>
                                Система автоматически ставит лайки под постами в социальных сетях, что повышает вовлеченность и привлекает внимание к Вашим материалам.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="how-it-works" className="how-it-works section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 align-self-center">
                        <div className="section-heading">
                            <h4>КАК <em>РАБОТАЕТ</em></h4>
                            <img src="assets/images/heading-line-dec.png" alt="" />
                            <p>
                                Автоматизация продвижения в социальных сетях: привлеките больше клиентов, больше времени на развитие Вашего бизнеса.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="service-item box-item">
                                    <h5 className="mb-2">ЭКОНОМИЯ ВРЕМЕНИ</h5>
                                    <p>Не нужно вручную ставить лайки, отправлять сообщения, комментарии или отправлять приглашения.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-item box-item">
                                    <h5 className="mb-2">ЭФФЕКТИВНОСТЬ</h5>
                                    <p>Постоянная работа 24/7, что позволяет Вам быстрее и эффективнее продвигать свои аккаунты.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-item box-item">
                                    <h5 className="mb-2">УВЕЛИЧЕНИЕ ОХВАТА</h5>
                                    <p>Привлекайте внимание целевой аудитории, увеличивая число подписчиков и взаимодействий.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-item box-item">
                                    <h5 className="mb-2">АНАЛИТИКА</h5>
                                    <p>Система предоставляет отчеты о проделанной работе, что помогает оптимизировать кампании.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="pricing" className="pricing-tables">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>ВЫБЕРИТЕ <em>ТАРИФ</em></h4>
                            <img src="assets/images/heading-line-dec.png" alt="" />
                            <p>Подберите тарифный план, который идеально подходит для вашего бизнеса! У нас есть решения для всех: от новичков до профессионалов.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-item-pro">
                            <span className="price">0р</span>
                            <h4>БАЗОВЫЙ</h4>
                            <div className="icon">
                                <img src="assets/images/pricing-table-01.png" alt="" />
                            </div>
                            <ul>
                                <li className="pro-function">Управление до 1 аккаунтов</li>
                                <li className="non-function">Доступ ко всем функциям платформы</li>
                                <li className="non-function">Доступ к эксклюзивным материалам</li>
                                <li className="non-function">Продвинутая аналитика и отчетность</li>
                                <li className="non-function">Набор инструментов автоматизации</li>
                                <li className="non-function">Приоритетная поддержка</li>
                            </ul>
                            <div className="border-button">
                                <a target='_blank' href="/auth/register">ПОЛУЧИТЬ ТАРИФНЫЙ ПЛАН</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-item-pro">
                            <span className="price">699р</span>
                            <h4>СТАНДАРТ</h4>
                            <div className="icon">
                                <img src="assets/images/pricing-table-01.png" alt="" />
                            </div>
                            <ul>
                                <li className="pro-function">Управление до 3 аккаунтов</li>
                                <li className="pro-function">Доступ ко всем функциям платформы</li>
                                <li className="pro-function">Доступ к эксклюзивным материалам</li>
                                <li className="non-function">Продвинутая аналитика и отчетность</li>
                                <li className="non-function">Набор инструментов автоматизации</li>
                                <li className="non-function">Приоритетная поддержка</li>
                            </ul>
                            <div className="border-button">
                                <a target='_blank' href="/auth/register">ПРИОБРЕСТИ ТАРИФНЫЙ ПЛАН</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-item-pro">
                            <span className="price">1499р</span>
                            <h4>ПРЕМИУМ</h4>
                            <div className="icon">
                                <img src="assets/images/pricing-table-01.png" alt="" />
                            </div>
                            <ul>
                                <li className="pro-function">Управление до 10 аккаунтов</li>
                                <li className="pro-function">Доступ ко всем функциям платформы</li>
                                <li className="pro-function">Доступ к эксклюзивным материалам</li>
                                <li className="pro-function">Продвинутая аналитика и отчетность</li>
                                <li className="pro-function">Набор инструментов автоматизации</li>
                                <li className="pro-function">Приоритетная поддержка</li>
                            </ul>
                            <div className="border-button">
                                <a target='_blank' href="/auth/register">ПРИОБРЕСТИ ТАРИФНЫЙ ПЛАН</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="faq" className="faq">
            <div className="container">
                <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                        <h4>ПРОСТО <em>ОТВЕТЫ</em></h4>
                        <img src="assets/images/heading-line-dec.png" alt="" />
                        <p className='mb-3'>В этом разделе Вы найдете ответы на самые частые вопросы, которые возникают у пользователей.</p>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseZero" aria-controls="flush-collapseZero">
                                        Сколько действует оплаченный тариф?
                                    </button>
                                </h2>
                                <div id="flush-collapseZero" className="accordion-collapse collapse">
                                    <div className="accordion-body text-md-justify">Оплаченный тариф действует в течение 30 календарных дней с момента оплаты. В течение указанного периода вы можете использовать все включенные в данный тариф услуги и возможности. По истечении 30 календарных дней тариф требует повторной оплаты для продолжения предоставления услуг.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-controls="flush-collapseOne">
                                        Как получить партнерскую ссылку?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse">
                                    <div className="accordion-body text-md-justify">Партнерская ссылка находится в личном кабинете, чтобы ее получить, нужно пройти регистрацию на сайте. Вознаграждение за каждого привлеченного клиента выплачивается до 50% от стоимости тарифа, который он приобрел.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-controls="flush-collapseTwo">
                                        Можно ли вернуть денежные средства?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body text-md-justify">Заявку на возврат денежных средств можно оставить в течении 24-х часов с момента покупки лицензии. Возврат средств производится банком на реквизиты с которых оформлялась покупка. Срок возврата составляет 5 (пять) рабочих банковских дней.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-controls="flush-collapseThree">
                                        Произвели оплату, но на почту ничего не пришло?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body text-md-justify">Сообщения могут приходить с задержкой из-за большой нагруженности на сервере. Подождите (обычно не более 5-10 минут) и обновите свою почту, если сообщения нет, то проверьте раздел "спам" или "промоакции", если и там сообщения нет, обратитесь в службу поддержки.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-controls="flush-collapseFour">
                                        Можно ли получить блокировку из-за использования сервиса?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse">
                                    <div className="accordion-body text-md-justify">Сервис работает через встроенный браузер, имитируя действия живого человека, что минимизирует риск блокировки аккаунта, которая составляет всего 2 - 6 процентов. Алгоритмы сервиса строго придерживаются всех ограничений, временных интервалов и рекомендаций социальных сетей, чтобы обеспечить максимальную безопасность и эффективность.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 offset-lg-1">
                        <div className="footer-widget">
                            <h4>КОНТАКТЫ</h4>
                            <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                            <p>
                                <a href="#">010-020-0340</a>
                            </p>
                            <p>
                                <a href="#">info@company.co</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-widget">
                            <h4>НАВИГАЦИЯ</h4>
                            <ul>
                                <li>
                                    <a href="#">Функции</a>
                                </li>
                                <li>
                                    <a href="#">Поддержка</a>
                                </li>
                                <li>
                                    <a href="#">Тарифы</a>
                                </li>
                                <li>
                                    <a href="#">Новости</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>ИНФОРМАЦИЯ</h4>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://q-sender.ru/shop">Магазин</a>
                                </li>
                                <li>
                                    <a target="_blank" href="/info/terms">Пользовательское соглашение</a>
                                </li>
                                <li>
                                    <a target="_blank" href="/info/privacy">Политика конфиденциальности</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>СЕРВИС</h4>
                            <div className="logo">
                                <img width={30} height={60} src="white-logo.png" alt="" />
                            </div>
                            <p>Продвижение аккаунтов в социальных сетях одним кликом.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>&copy; {new Date().getFullYear()} ACCOUNTS TOOL. Все права защищены.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default HomePage