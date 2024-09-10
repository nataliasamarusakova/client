"use client";

import React from 'react';
import styles from './Tariff.module.css'
import clsx from 'clsx';

const Tariff = () => {

  const plans = [
    {
      name: 'БАЗОВЫЙ',
      price: 0,
      select: true,
      features: [
        { pro: true, description: 'Управление до 1 аккаунтов' },
        { pro: false, description: 'Доступ ко всем функциям платформы' },
        { pro: false, description: 'Доступ к эксклюзивным материалам' },
        { pro: false, description: 'Продвинутая аналитика и отчетность' },
        { pro: false, description: 'Набор инструментов автоматизации' },
        { pro: false, description: 'Приоритетная поддержка' },
      ],
      buttonText: 'Действующий тариф'
    },
    {
      name: 'СТАНДАРТ',
      price: 699,
      select: false,
      features: [
        { pro: true, description: 'Управление до 3 аккаунтов' },
        { pro: true, description: 'Доступ ко всем функциям платформы' },
        { pro: true, description: 'Доступ к эксклюзивным материалам' },
        { pro: false, description: 'Продвинутая аналитика и отчетность' },
        { pro: false, description: 'Набор инструментов автоматизации' },
        { pro: false, description: 'Приоритетная поддержка' },
      ],
      buttonText: 'Обновить сейчас'
    },
    {
      name: 'ПРЕМИУМ',
      price: 1499,
      select: false,
      features: [
        { pro: true, description: 'Управление до 10 аккаунтов' },
        { pro: true, description: 'Доступ ко всем функциям платформы' },
        { pro: true, description: 'Доступ к эксклюзивным материалам' },
        { pro: true, description: 'Продвинутая аналитика и отчетность' },
        { pro: true, description: 'Набор инструментов автоматизации' },
        { pro: true, description: 'Приоритетная поддержка' },
      ],
      buttonText: 'Обновить сейчас'
    }
  ];

  return <div className={styles.containerTariff}>
    <div className="row">
      <div className="col">
        <h4>Тарифный план</h4>
      </div>
    </div>
    <div className="container mt-4">
      <div className="row justify-content-center">
        {
          plans.map((plan, index) => (<div key={index} className="col ps-0 mb-4">
            <div className={clsx("card", plan.select && styles.select)}>
              <div className="card-header text-center">
                <h5 className="card-title m-3">{plan.name}</h5>
              </div>
              <div className="card-body text-center">
                <h5 className="card-price">
                  {plan.price}
                  <span className="ms-1">рублей/месяц</span>
                </h5>
                <ul className="list-group list-group-flush">
                  {
                    plan.features.map((feature, featureIndex) => (<li key={featureIndex} className={clsx("list-group-item", feature.pro ? styles.pro : styles.basic)}>{feature.description}</li>))
                  }
                </ul>
              </div>

              <div className="card-footer text-center">
                <button className={clsx("btn btn-primary m-2", plan.select && "disabled")}>{plan.buttonText}</button>
              </div>

            </div>
          </div>))
        }
      </div>
    </div>
  </div>
};

export default Tariff;
