"use client"

import { ILogs, useLogs } from "@/src/hooks/useLogs";
import ConfirmForm from "@/src/components/ConfirmForm/ConfirmForm";
import { useEffect, useState } from "react";
import Loader from "@/src/components/Loader/Loader";
import styles from './Logs.module.css'
import clsx from 'clsx';

export default function Logs() {

  const [searchText, setSearchText] = useState('');
  const [confirmOk, setConfirmOk] = useState(false);
  const [filteredLogs, setFilteredLogs] = useState<ILogs>();
  const { data, error, isLoading, currentPage, clearLogs, handlePageChange } = useLogs()

  useEffect(() => {
    if (data) {
      if (searchText.trim() === '') {
        setFilteredLogs(data);
      } else {
        const logs = data.logs.filter((log) => `${log.createdAt} [${log.account?.name}] ${log.text}`.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredLogs({ logs, total: data.total });
      }
    }
  }, [data, searchText]);

  function formatDate(dateString: Date) {
    const date = new Date(dateString);
    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }

  const getCurrentPage = (currentPage: number): number => currentPage == 0 ? data?.total || 1 : currentPage

  const writeLog = (logger: ILogs) => logger.logs.map((log) => log.account && `${formatDate(log.createdAt)} [${log.account?.name}] ${log.text}\n`).join('')

  if (isLoading) {
    return <div className={styles.logContainer}>
      <Loader text="Идет загрузка журнала" />
    </div>
  }

  if (error) {
    return <div className={clsx(styles.logContainer, 'text-center')}>
      <p>Произошла ошибка при загрузке журнала....</p>
    </div>
  }

  return <div className={styles.logContainer}>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Поиск</span>
      </div>
      <input className={clsx("form-control", styles.logSearchText)} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button type="button" onClick={() => setSearchText('')} className="btn btn-primary">Очистить</button>
    </div>
    {
      filteredLogs && <textarea value={writeLog(filteredLogs)} readOnly rows={17} className={clsx("form-control", styles.textarea)} />
    }
    {
      data && <div className={styles.navigation}>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={clsx('page-item', getCurrentPage(currentPage) == 1 && 'disabled')}>
              <div role="button" className="page-link" onClick={() => handlePageChange(getCurrentPage(currentPage) - 1)}>Назад</div>
            </li>
            {
              Array.from({ length: 3 }, (_, index) => Math.max(1, getCurrentPage(currentPage) - 1) + index).map((page) => (
                <li key={page} className={clsx('page-item', page > getCurrentPage(currentPage) && data.logs.length <= 19 ? "disabled" : getCurrentPage(currentPage) == page && 'active')}>
                  <div role="button" className="page-link" onClick={() => handlePageChange(page)}>
                    {page}
                  </div>
                </li>))
            }
            <li className={clsx('page-item', data.logs.length <= 19 && 'disabled')}>
              <div role="button" className="page-link" onClick={() => handlePageChange(getCurrentPage(currentPage) + 1)}>Вперед</div>
            </li>
          </ul>
        </nav>
        {
          confirmOk && <ConfirmForm text="Вы хотите очистить журнал активности?" description="Вы безвозвратно удалите данные журнала активности на всех аккаунтах. Восстановить информацию будет невозможно." func={clearLogs} close={setConfirmOk} />
        }
        <button type="button" onClick={() => setConfirmOk((show) => !show)} className="btn btn-primary"><i className="bi bi-trash me-1" />Очистить журнал</button>
      </div>
    }
  </div>
}
