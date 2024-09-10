"use client";

import { ChangeEvent, useState } from 'react';
import styles from './Statistics.module.css'
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/src/api/apiService';
import Loader from '@/src/components/Loader/Loader';
import ConfirmForm from '@/src/components/ConfirmForm/ConfirmForm';
import { IAccount } from '@/src/interface/account';
import clsx from 'clsx';

const Statistics = () => {

    const [confirmOk, setConfirmOk] = useState(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['get-statics-accounts'],
        queryFn: async () => apiService.getStatisticsAccounts()
    })

    const statistics = [
        { title: 'Количество аккаунтов', value: data?.accounts.length },
        { title: 'Аккаунты в работе', value: data?.accounts.filter(account => account.is_work).length },
        { title: 'Остановленные аккаунты', value: data?.accounts.filter(account => !account.is_work).length },
    ];

    const getLength = (list: string) => list?.length ? list?.split('\n').length : 0

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>, index: number) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[index] = event.target.value;
        setSelectedValues(newSelectedValues);
    };

    const preStats = (account: IAccount, idx: number) => {
        let success, error, left, percent, isWork;
        const selectedTaskIndex = selectedValues[idx - 1];

        // default check 0, 1 сделать по умлочанию 

        switch (selectedTaskIndex) {
            case '1':
                error = account.statistics.errorSendPeopleLs;
                success = account.statistics.successSendPeopleLs;
                isWork = account.is_work && account.settings.sendMassagePeopleCheck;
                left = isWork ? account.settings.sendMassagePeopleListCount - getLength(account.settings.sendMassagePeopleList) : 0;
                percent = Math.round((1 - getLength(account.settings.sendMassagePeopleList) / account.settings.sendMassagePeopleListCount) * 100);
                break;
            case '2':
                error = account.statistics.errorLikePeople;
                success = account.statistics.successLikePeople;
                isWork = account.is_work && account.settings.addLikePeopleCheck;
                left = isWork ? account.settings.addLikePeopleListCount - getLength(account.settings.addLikePeopleList) : 0;
                percent = Math.round((1 - getLength(account.settings.addLikePeopleList) / account.settings.addLikePeopleListCount) * 100);
                break;
            default:
                error = account.statistics.errorInviteFriends;
                success = account.statistics.successInviteFriends;
                isWork = account.is_work && account.settings.addFriendCheck;
                left = isWork ? account.settings.addFriendListCount - getLength(account.settings.addFriendList) : 0;
                percent = Math.round((1 - getLength(account.settings.addFriendList) / account.settings.addFriendListCount) * 100);
                break;
        }

        return <>
            <td className={styles.paddingTop}>
                {
                    isWork ? <div className="progress mt-2">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: percent !== 0 ? `${percent}%` : '' }} >
                            {percent}%
                        </div>
                    </div> : <span>—</span>
                }
            </td>
            <td className={clsx(styles.paddingTop, "text-primary")}>{success}</td>
            <td className={clsx(styles.paddingTop, "text-success-emphasis")}>{left}</td>
            <td className={clsx(styles.paddingTop, "text-danger")}>{error}</td>
        </>
    };

    if (isLoading) {
        return <div className={styles.containerStatistics}>
            <Loader text='Идет процесс загрузки статистики журнала' />
        </div>
    }

    if (error) {
        return <div className={clsx(styles.containerStatistics, 'text-center')}>
            <p>Произошла ошибка при загрузке журнала....</p>
        </div>
    }

    return <div className={styles.containerStatistics}>
        <div className="row">
            <div className="col">
                <h4>Статистика</h4>
            </div>
        </div>
        <div className="row mt-3">
            {
                statistics.map((stat, index) => (<div key={index} className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">{stat.title}</h5>
                            <p className="card-text text-primary h3">{stat.value}</p>
                        </div>
                    </div>
                </div>))
            }
        </div>
        {
            data && data.accounts?.length > 0 && <div className={styles.tableContainer}>
                <div className="card">
                    <table className="table table-striped table-hover m-0">
                        <thead>
                            <tr>
                                <th className="w-10 pb-3 pt-3" scope="col">#</th>
                                <th className="w-10 pb-3 pt-3" scope="col">ACCOUNT</th>
                                <th className="w-10 pb-3 pt-3" scope="col">ID</th>
                                <th className="w-10 pb-3 pt-3" scope="col">TASK</th>
                                <th className="w-10 pb-3 pt-3" scope="col">PROGRESS</th>
                                <th className="w-10 pb-3 pt-3" scope="col">EXECUTED</th>
                                <th className="w-10 pb-3 pt-3" scope="col">LEFT</th>
                                <th className="w-10 pb-3 pt-3" scope="col">ERROR</th>
                                <th className="w-10 pb-3 pt-3" scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.accounts?.map((account, idx) =>
                                    <tr className={clsx(account.is_blocked && styles.isBlocked)} key={idx}>
                                        <th className={styles.paddingTop} scope="row">{++idx}</th>
                                        <td className='ps-3'>
                                            <div className='d-flex align-items-center gap-1'>
                                                <img className={styles.roundedImageAvatar} src={account.image}></img>
                                                <span>{account.name}</span>
                                            </div>
                                        </td>
                                        <td className={styles.paddingTop}>id{account.domain}</td>
                                        <td className={styles.paddingTop}>
                                            <select className="form-select" value={selectedValues[idx - 1]} onChange={(event) => handleSelectChange(event, idx - 1)}>
                                                {
                                                    data?.tasks.map((task, taskIdx) => (<option key={taskIdx} value={taskIdx}>{task}</option>))
                                                }
                                            </select>
                                        </td>
                                        {
                                            preStats(account, idx)
                                        }
                                        <td>
                                            <button type="button" onClick={() => setConfirmOk((show) => !show)} className="btn btn-primary me-2">
                                                <i className="bi bi-arrow-clockwise" />
                                            </button>
                                            {
                                                confirmOk && <ConfirmForm text={`Сбросить статистику на аккаунте ${account.name}?`} description="Вы безвозвратно сбросите данные статиситки на аккаунте. Восстановить информацию будет невозможно." func={() => setConfirmOk(false)} close={setConfirmOk} />
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        }

    </div>
};

export default Statistics;
