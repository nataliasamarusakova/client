import { ChangeEvent, Dispatch, SetStateAction, FC, useState } from "react";
import SpinNumberEdit from "../SpinNumberEdit/SpinNumberEdit";
import { IAccount } from "@/src/interface/account";
import { useUpdateTask } from "@/src/hooks/useUpdateTask";
import styles from './LikeUser.module.css';
import clsx from 'clsx';

interface ILikeUser {
    selectAccount: IAccount | undefined
    isOnlyDigits: (value?: string) => boolean
    setFunctions: Dispatch<SetStateAction<boolean>>
    handleFileChange: (event: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => void
}

const LikeUser: FC<ILikeUser> = ({ isOnlyDigits, selectAccount, setFunctions, handleFileChange }) => {

    const { addTask } = useUpdateTask();

    const formClose = () => {
        if (selectAccount) {
            const data = {
                id: selectAccount.id,
                body: JSON.stringify({
                    addLikePeopleCheck, addLikePeopleList, addLikePeopleSort, addLikePeopleRev,
                    addLikePeopleListCount: getLength(), addLikePeopleLimit, addLikePeopleSleepMax, addLikePeopleSleepMin
                })
            }
            addTask(data);
        }
        setFunctions((showFunctions) => !showFunctions);
    }

    const getLength = () => addLikePeopleList?.length ? addLikePeopleList?.split('\n').length : 0

    const [addLikePeopleList, setAddLikePeopleList] = useState(selectAccount?.settings.addLikePeopleList || '');
    const [addLikePeopleLimit, setAddLikePeopleLimit] = useState(selectAccount?.settings.addLikePeopleLimit || 50);
    const [addLikePeopleCheck, setAddLikePeopleCheck] = useState(selectAccount?.settings.addLikePeopleCheck || false);
    const [addLikePeopleSleepMin, setAddLikePeopleSleepMin] = useState(selectAccount?.settings.addLikePeopleSleepMin || 3);
    const [addLikePeopleSleepMax, setAddLikePeopleSleepMax] = useState(selectAccount?.settings.addLikePeopleSleepMax || 5);
    const [addLikePeopleSort, setAddLikePeopleSort] = useState(selectAccount?.settings.addLikePeopleSort || 'profile');
    const [addLikePeopleRev, setAddLikePeopleRev] = useState(selectAccount?.settings.addLikePeopleSort || '0');

    return <>
        <div className='border-start border-end border-bottom rounded-bottom-3 p-3 pt-1 gap-3'>
            <div className="p-2 pt-1 pb-1">
                <input className='me-2' id="use-add-friends" type="checkbox" onChange={(e) => setAddLikePeopleCheck(e.target.checked)} checked={addLikePeopleCheck} />
                <label htmlFor="use-add-friends">Ставить лайки пользователям</label>
            </div>
            <div className="d-flex mt-2 gap-3">
                <div className='border rounded-3 p-3 pt-2 flex-grow-2 w-50'>
                    <p className='mb-2'>Список пользователей [{getLength()}]</p>
                    <textarea style={{ height: 361 }} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setAddLikePeopleList(event.target.value)} value={addLikePeopleList} rows={15} className="form-control" />
                    {
                        isOnlyDigits(addLikePeopleList) && <p style={{ color: "tomato", margin: '5px 5px 0' }}>Указывайте только id пользователей</p>
                    }
                    <div className={clsx(styles.controlAction, 'mt-1')}>
                        <input className="form-control btn btn-primary" id="formFileMultiple" type="file" onChange={(event) => handleFileChange(event, setAddLikePeopleList)} />
                        <button onClick={() => setAddLikePeopleList('')} type="button" className="btn btn-primary mt-2">Очистить</button>
                    </div>
                </div>
                <div className='w-50'>
                    <div className='border rounded-3 p-3 pt-2'>
                        <div className="mb-2">Задержка между действиями</div>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <span>от</span>
                            <SpinNumberEdit setValueInput={setAddLikePeopleSleepMin} value={addLikePeopleSleepMin} minValue={1} />
                            <span>минут</span>
                        </div>
                        <div className="d-flex mt-2 justify-content-center align-items-center gap-3">
                            <span>до</span>
                            <SpinNumberEdit setValueInput={setAddLikePeopleSleepMax} value={addLikePeopleSleepMax} minValue={3} />
                            <span>минут</span>
                        </div>
                    </div>
                    <div className='border rounded-3 p-3 pt-2 mt-2'>
                        <div className="mb-2">Лимит на количество поставленных лайков</div>
                        <div className="d-flex align-items-center gap-3">
                            <SpinNumberEdit setValueInput={setAddLikePeopleLimit} maxLength={4} value={addLikePeopleLimit} maxValue={1000} minValue={1} />
                            <span>лайков пользователям</span>
                        </div>
                    </div>
                    <div className='border rounded-3 p-3 pt-2 mt-2'>
                        <div className="mb-2">Порядок сортировки фотографий</div>
                        <select className="form-select" aria-label="Выберите опцию" value={addLikePeopleRev} onChange={(event) => setAddLikePeopleRev(event.target.value)} >
                            <option value="0" selected>Хронологический</option>
                            <option value="1">Антихронологический</option>
                        </select>
                        <div className="mb-2 mt-2">Ставить лайки на фотографии</div>
                        <select className="form-select" aria-label="Выберите опцию" value={addLikePeopleSort} onChange={(event) => setAddLikePeopleSort(event.target.value)}>
                            <option value="wall" selected>Фотографии со стены пользователя</option>
                            <option value="profile">Фотографии пользователя</option>
                        </select>
                    </div>
                </div>
            </div >
        </div >
        <div className='d-flex justify-content-center gap-2 mt-3'>
            <button type="button" onClick={formClose} className="btn btn-primary">Сохранить задачи</button>
            <button type="button" onClick={() => setFunctions(false)} className="btn btn-outline-primary">Закрыть</button>
        </div>
    </>
}

export default LikeUser;