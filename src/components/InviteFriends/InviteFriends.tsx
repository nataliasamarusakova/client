import { ChangeEvent, Dispatch, SetStateAction, useState, FC } from "react";
import SpinNumberEdit from "../SpinNumberEdit/SpinNumberEdit";
import { IAccount } from '../../interface/account';
import styles from './InviteFriends.module.css';
import { useUpdateTask } from "@/src/hooks/useUpdateTask";
import clsx from 'clsx';

interface IInviteFriends {
    selectAccount: IAccount | undefined
    isOnlyDigits: (value?: string) => boolean
    setFunctions: Dispatch<SetStateAction<boolean>>
    handleFileChange: (event: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => void
}

const InviteFriends: FC<IInviteFriends> = ({ selectAccount, isOnlyDigits, handleFileChange, setFunctions }) => {

    const { addTask } = useUpdateTask();

    const formClose = () => {
        if (selectAccount) {
            const data = {
                id: selectAccount.id,
                body: JSON.stringify({
                    addFriendCheck, addFriendText, addFriendList, addFriendListCount: getLength(),
                    addFriendLimit, addFriendSleepMax, addFriendSleepMin
                })
            }
            addTask(data);
        }
        setFunctions((showFunctions) => !showFunctions);
    }

    const getLength = () => addFriendList?.length ? addFriendList?.split('\n').length : 0

    const [addFriendText, setAddFriendText] = useState(selectAccount?.settings.addFriendText || '');
    const [addFriendList, setAddFriendList] = useState(selectAccount?.settings.addFriendList || '');
    const [addFriendLimit, setAddFriendLimit] = useState(selectAccount?.settings.addFriendLimit || 100);
    const [addFriendCheck, setAddFriendCheck] = useState(selectAccount?.settings.addFriendCheck || false);
    const [addFriendSleepMax, setAddFriendSleepMax] = useState(selectAccount?.settings.addFriendSleepMax || 3);
    const [addFriendSleepMin, setAddFriendSleepMin] = useState(selectAccount?.settings.addFriendSleepMin || 1);

    return <>
        <div className='border-start border-end border-bottom rounded-bottom-3 p-3 pt-1 gap-3'>
            <div className="p-2 pt-1 pb-1">
                <input className='me-2' id="use-add-friends" type="checkbox" onChange={(e) => setAddFriendCheck(e.target.checked)} checked={addFriendCheck} />
                <label htmlFor="use-add-friends">Добавлять пользователей в друзья</label>
            </div>
            <div className="d-flex mt-2 gap-3">
                <div className='border rounded-3 p-3 pt-2 w-50'>
                    <p className='mb-2'>Список пользователей [{getLength()}]</p>
                    <textarea style={{ height: 361 }} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setAddFriendList(event.target.value)} value={addFriendList} rows={14} className="form-control" />
                    {
                        isOnlyDigits(addFriendList) && <p style={{ color: "tomato", margin: '5px 5px 0' }}>Указывайте только id пользователей</p>
                    }
                    <div className={clsx(styles.controlAction, 'mt-1')}>
                        <input className="form-control btn btn-primary" id="formFileMultiple" type="file" onChange={(event) => handleFileChange(event, setAddFriendList)} />
                        <button onClick={() => setAddFriendList('')} type="button" className="btn btn-primary mt-2">Очистить</button>
                    </div>
                </div>
                <div className='w-50'>
                    <div className='border rounded-3 p-3 pt-2'>
                        <div className="mb-2">Задержка между действиями</div>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <span>от</span>
                            <SpinNumberEdit setValueInput={setAddFriendSleepMin} value={addFriendSleepMin} minValue={1} />
                            <span>минут</span>
                        </div>
                        <div className="d-flex mt-2 justify-content-center align-items-center gap-3">
                            <span>до</span>
                            <SpinNumberEdit setValueInput={setAddFriendSleepMax} value={addFriendSleepMax} minValue={3} />
                            <span>минут</span>
                        </div>
                    </div>
                    <div className='border rounded-3 p-3 pt-2 mt-2'>
                        <div className="mb-2">Лимит на количество отправленных заявок</div>
                        <div className="d-flex align-items-center gap-3">
                            <SpinNumberEdit setValueInput={setAddFriendLimit} maxLength={4} value={addFriendLimit} maxValue={1000} minValue={1} />
                            <span>заявок в друзья</span>
                        </div>
                    </div>
                    <div className='border rounded-3 p-3 pt-2 mt-2'>
                        <div className="mb-2">Сопроводительное сообщение для заявки. Максимальная длина — 500 символов</div>
                        <textarea onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setAddFriendText(event.target.value)} value={addFriendText} rows={3} className="form-control" />
                        <div className={clsx(styles.controlAction, 'mt-1')}>
                            <input className="form-control btn btn-primary" id="formFileMultiple" type="file" onChange={(event) => handleFileChange(event, setAddFriendText)} />
                            <button onClick={() => setAddFriendText('')} type="button" className="btn btn-primary mt-2">Очистить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center gap-2 mt-3'>
            <button type="button" onClick={formClose} className="btn btn-primary">Сохранить задачи</button>
            <button type="button" onClick={() => setFunctions(false)} className="btn btn-outline-primary">Закрыть</button>
        </div>
    </>
}

export default InviteFriends;