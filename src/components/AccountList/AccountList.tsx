import { useDeleteAccount } from '@/src/hooks/useDeleteAccount';
import { useActionAccount } from '@/src/hooks/useActionAccount';
import { Dispatch, SetStateAction, FC, useState } from 'react';
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import { IAccount } from '@/src/interface/account';
import styles from './AccountList.module.css'
import Loader from '../Loader/Loader';
import clsx from 'clsx';

interface IAccountList {
    accounts: IAccount[]
    isLoadingAccounts: boolean;
    handleAddTask: (id: string) => void
    setShowAccountForm: Dispatch<SetStateAction<boolean>>
    setShowSettingsForm: Dispatch<SetStateAction<boolean>>
}

const AccountList: FC<IAccountList> = ({ accounts, isLoadingAccounts, handleAddTask, setShowAccountForm, setShowSettingsForm }) => {

    const [confirmOk, setConfirmOk] = useState(false);
    const { deleteAccount, isLoadingDeleteAccount } = useDeleteAccount();
    const { actionAccount, isLoadingActionAccount } = useActionAccount();

    if (isLoadingDeleteAccount) {
        return <div className={styles.accountContainer}>
            <Loader text={'Идет процесс удаления аккаунта'} />
        </div>;
    }

    if (isLoadingAccounts) {
        return <div className={styles.accountContainer}>
            <Loader text="Пожалуйста, немного подождите..." />
        </div>;
    }

    if (isLoadingActionAccount) {
        return <div className={styles.accountContainer}>
            <Loader text={'Идет процесс активации работы аккаунта'} />
        </div>;
    }

    return <div className={styles.accountContainer}>
        <div className='d-flex align-items-baseline justify-content-sm-between'>
            <h4 className='p-3 ms-2'>Список аккаунтов</h4>
            <div>
                <i role="button" onClick={() => setShowAccountForm((show) => !show)} className="bi bi-plus-lg fs-3 me-4" />
                <i role="button" onClick={() => setShowSettingsForm((show) => !show)} className="bi bi-gear-fill fs-3 me-4" />
            </div>
        </div>
        {
            accounts.length == 0 ? <div className='text-center'>
                <p className='m-0'>Для начала работы, добавьте свои аккаунты.</p>
                <p className='mt-2'>Нажмите на кнопку "Добавить аккаунты" - и Вы сможете добавить учетные записи, которые будут использоваться в системе.</p>
                <button role="button" onClick={() => setShowAccountForm((show) => !show)} className="btn btn-primary bi bi-plus-lg mt-1 mb-2">Добавить аккаунты</button>
            </div> :
                <>
                    <hr className="mt-2 mb-3" />
                    <div className={styles.tableContainer}>
                        <table className="table table-striped table-hover m-0">
                            <thead>
                                <tr>
                                    <th className="w-10 pb-3" scope="col">#</th>
                                    <th className="w-10 pb-3" scope="col">ACCOUNT</th>
                                    <th className="w-10 pb-3" scope="col">ID</th>
                                    <th className="w-10 pb-3" scope="col">TOKEN</th>
                                    <th className="w-10 pb-3" scope="col">PROXY</th>
                                    <th className="w-10 pb-3" scope="col">USER-AGENT</th>
                                    <th className="w-10 pb-3" scope="col">STATUS</th>
                                    <th className="w-10 pb-3" scope="col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    accounts?.map((account, idx) =>
                                        <tr className={clsx(account.is_blocked && styles.isBlocked)} key={idx}>
                                            <th className={styles.paddingTop} scope="row">{++idx}</th>
                                            <td className='ps-3'>
                                                <div className='d-flex align-items-center gap-1'>
                                                    <img className={styles.roundedImageAvatar} src={account.image}></img>
                                                    <span>{account.name}</span>
                                                </div>
                                            </td>
                                            <td className={styles.paddingTop}>id{account.domain}</td>
                                            <td className={styles.paddingTop}>{account.access_token}</td>
                                            <td className={styles.paddingTop}>{account.proxy}</td>
                                            <td className={styles.paddingTop}>{account.user_agent}</td>
                                            <td className={styles.paddingTop}>{account.is_work ? "В работе" : "Готов к работе"}</td>
                                            <td>
                                                <button onClick={() => handleAddTask(account.id)} type="button" className="btn btn-primary me-2">
                                                    <i className="bi bi-plus-lg" />
                                                </button>
                                                <button onClick={() => actionAccount(account.id)} type="button" className="btn btn-primary me-2">
                                                    <i className={account.is_work ? "bi bi-stop-fill" : "bi bi-play-fill"} />
                                                </button>
                                                {
                                                    confirmOk && <ConfirmForm text={`Вы хотите удалить аккаунт ${account.name}?`} description='Вы безвозвратно удалите данные аккаунта, включая журнал, историю активности и статистику. Восстановить информацию будет невозможно.' func={() => deleteAccount(account.id)} close={setConfirmOk} />
                                                }
                                                <button onClick={() => setConfirmOk((true))} type="button" className="btn btn-primary">
                                                    <i className="bi bi-trash3" />
                                                </button>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-3 ms-3'>{`Показано 1 - ${accounts.length} из 10 аккаунтов`}</div>
                </>
        }
    </div>
}

export default AccountList;