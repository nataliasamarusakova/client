"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { IAddAccount, useAddAccount } from "@/src/hooks/useAddAccount";
import { SubmitHandler, useForm } from "react-hook-form";
import Success from "../Success/Success";
import Loader from "../Loader/Loader";
import './AddAccountForm.css';
import { ERROR_EMPTY_PROXY, ERROR_EMPTY_TOKEN, ERROR_VALUE_TOKEN, ERROR_VALUE_USER_AGENT, ERROR_VALUE_PROXY } from "@/src/constants/constants";

interface IAddAccountForm { setShowAccountForm: Dispatch<SetStateAction<boolean>>; }

interface IAddForm extends IAddAccount { }

const AddAccountForm: React.FC<IAddAccountForm> = ({ setShowAccountForm }) => {

  const { addAccount, authError, authSuccess, isLoadingAddAccount } = useAddAccount();

  const { register, handleSubmit, formState, reset, setValue } = useForm<IAddForm>({ mode: 'onChange' });

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true)
    return () => document.removeEventListener('click', handleClickOutSide, true)
  }, [reset])

  const onSubmit: SubmitHandler<IAddForm> = (data) => {
    let { access_token, proxy, user_agent } = data
    if (access_token.startsWith('https://oauth.vk.com/blank.html#')) {
      const authAccessToken = new URLSearchParams(new URL(access_token).hash.slice(1)).get('access_token');
      if (authAccessToken) {
        access_token = authAccessToken;
      }
    }
    addAccount({ access_token, proxy, user_agent });
  }

  const formRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = (event: any) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowAccountForm(false);
    }
  }

  const Random = (min: number, max: number) => {
    if (min > max) [min, max] = [max, min];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateUserAgent = () => {
    const yandex = 24;
    const chrome = 130;
    let winVer = "Windows NT ";
    const random = Random(1, 3);
    switch (random) {
      case 1: winVer += "6.1"; break;
      case 3: winVer += "6.3"; break;
      case 2: winVer += "10.0"; break;
    }
    const userAgent = `Mozilla/5.0 (${winVer}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Random(chrome - 5, chrome) + ".0." + Random(4300, 4400) + "." + Random(90, 150)} Yandex/${Random(yandex - 3, yandex) + "." + Random(6, 9) + "." + Random(1, 3) + "." + Random(100, 1500)} Yowser/2.5 Safari/537.36`;
    setValue('user_agent', userAgent);
  }

  const proxy_error = formState.errors['proxy']?.message
  const user_agent_error = formState.errors['user_agent']?.message
  const access_token_error = formState.errors['access_token']?.message
  const authLink = "https://oauth.vk.com/authorize?client_id=5776857&redirect_uri=https://oauth.vk.com/blank.html&display=page&scope=groups,wall,video,photos,notifications,friends,status,messages,offline&response_type=token&revoke=1"

  return <div className="form-modal-container">
    <div className="form-modal-overlay" />
    <div ref={formRef} className="form-modal-account">
      <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
        {
          authSuccess ?
            <>
              <Success text="Ваш аккаунт успешно добавлен" />
              <div className="text-center">
                <button type="button" onClick={() => setShowAccountForm(false)} className="btn btn-primary mt-3">Закрыть</button>
              </div>
            </> :
            isLoadingAddAccount ? <Loader text="Пожалуйста, немного подождите..." /> :
              <>
                <div className="d-flex text-center align-items-center">
                  <b className="flex-grow-1">ДОБАВЛЕНИЕ АККАУНТА</b>
                  <i role="button" onClick={() => setShowAccountForm((show) => !show)} className="bi bi-x-lg text-primary fs-5"></i>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mt-3">TOKEN</p>
                  <a role="button" target="_blank" href="https://q-sender.ru/shop" className="mt-3 text-primary">Купить</a>
                </div>
                <input className="form-control textarea-account" {...register('access_token', { required: ERROR_EMPTY_TOKEN, minLength: { value: 8, message: ERROR_VALUE_TOKEN } })} />
                {
                  access_token_error && <p className="form-auth-error">{access_token_error}</p>
                }
                <p className="mt-2 mb-0">Пожалуйста, перейдите по <a target="_blank" href={authLink}>ссылке</a>, чтобы получить токен для авторизации</p>
                <div className="d-flex justify-content-between">
                  <p className="mt-3">PROXY / HTTP:IP:PORT:LOGIN:PASS</p>
                  <a role="button" target="_blank" href="https://q-sender.ru/shop" className="mt-3 text-primary">Купить</a>
                </div>
                <input className="form-control textarea-account" {...register('proxy', { required: ERROR_EMPTY_PROXY, pattern: { value: /^(\w+):(.*?):(\w+):(\w+)$/, message: ERROR_VALUE_PROXY } })} />
                {
                  proxy_error && <p className="form-auth-error">{proxy_error}</p>
                }
                <div className="d-flex justify-content-between">
                  <p className="mt-3">USER-AGENT</p>
                  <p role="button" onClick={generateUserAgent} className="mt-3 text-primary">Сгенерировать</p>
                </div>
                <input className="form-control textarea-account" {...register('user_agent', { minLength: { value: 8, message: ERROR_VALUE_USER_AGENT } })} />
                {
                  user_agent_error && <p className="form-auth-error">{user_agent_error}</p>
                }
                {
                  authError && <p className="form-auth-error">{authError.message}</p>
                }
                <div className="text-center">
                  <button type="submit" className="btn btn-primary mt-3">Добавить</button>
                </div>
              </>
        }
      </form>
    </div>
  </div >
}

export default AddAccountForm