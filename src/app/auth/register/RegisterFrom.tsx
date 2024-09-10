"use client";

import Link from 'next/link';
import styles from './Register.module.css'
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ERROR_EMPTY_NAME, ERROR_VALUE_NAME, ERROR_EMPTY_EMAIL, ERROR_VALUE_EMAIL, ERROR_EMPTY_PASSWORD, ERROR_VALUE_PASSWORD } from '../../../constants/constants';
import Loader from '../../../components/Loader/Loader';
import { apiService } from '@/src/api/apiService';
import { useMutation } from '@tanstack/react-query';

export default function Register() {

    const { mutate, reset, isSuccess, error, isPending } = useMutation({
        mutationKey: ['register-user'],
        mutationFn: ({ name, email, password }: IRegisterFrom) => apiService.registerUser(name, email, password)
    })

    const { register, handleSubmit, formState } = useForm<IRegisterFrom>({ mode: 'onChange' });

    const onSubmit: SubmitHandler<IRegisterFrom> = (data) => {
        const { name, email, password } = data;
        mutate({ name, email, password })
    }

    const name_error = formState.errors['name']?.message
    const email_error = formState.errors['email']?.message
    const password_error = formState.errors['password']?.message

    return (<div className={styles.registerForm}>
        <div className={clsx("card shadow-sm", styles.wrap)}>
            <div className="card-body">
                {
                    isSuccess ? <div className={styles.registerSuccess}>
                        <div className='text-center'>
                            <b>Вы успешно зарегистрированы</b>
                            <div className="bi bi-check-circle-fill text-primary fs-1 mt-2" />
                        </div>
                        <p>Письмо со ссылкой для активации аккаунта было отправлено на указанный адрес электронной почты, если письма нет, посмотрите папку «Cпам»</p>
                        <Link className={clsx("btn btn-primary w-100", styles.registerSuccessLogin)} href={'login'}>Войти</Link>
                        <p>C уважением</p>
                    </div>
                        : isPending ? <Loader text='Идет процесс регистрации аккаунта...' /> :
                            <>
                                <div className={clsx("d-flex flex-column align-items-center mb-4 mt-3", styles.selectImage)}>
                                    <img width={360} height={87} src={'../logo-full.png'} />
                                </div>
                                <h3 className="card-title text-center mb-3">Регистрация</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="py-1 px-5">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Имя</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="bi bi-person-fill fs-5" />
                                                </div>
                                            </div>
                                            <input type="text" required placeholder="Enter your name" className="form-control" id="name" {...register('name', {
                                                required: ERROR_EMPTY_NAME, minLength: { value: 4, message: ERROR_VALUE_NAME },
                                                onChange: () => reset()
                                            })} />
                                        </div>
                                        {
                                            name_error && <p className={styles.formRegisterError}>{name_error}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Почта</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text fs-5">@</div>
                                            </div>
                                            <input required placeholder="Enter your email" type="email" className="form-control" id="email" aria-describedby="emailHelp" {...register('email', {
                                                required: ERROR_EMPTY_EMAIL, pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: ERROR_VALUE_EMAIL },
                                                onChange: () => reset()
                                            })} />
                                        </div>
                                        {
                                            email_error && <p className={styles.formRegisterError}>{email_error}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Пароль</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="bi bi-lock-fill fs-5" />
                                                </div>
                                            </div>
                                            <input required placeholder="********" type="password" className="form-control" id="password" {...register('password', {
                                                required: ERROR_EMPTY_PASSWORD, minLength: { value: 8, message: ERROR_VALUE_PASSWORD },
                                                onChange: () => reset()
                                            })} />
                                        </div>
                                        {
                                            password_error && <p className={styles.formRegisterError}>{password_error}</p>
                                        }
                                    </div>
                                    {
                                        error && <p className={styles.formRegisterError}>{error.message}</p>
                                    }
                                    <div className={clsx("mb-3", styles.useTermsUse)}>
                                        <input required className='me-3' id="use-terms-use" type="checkbox" />
                                        <label htmlFor="use-terms-use">Я соглашаюсь на обработку персональных данных в соответствии условиям
                                            <a className='ms-2' target='_blank' href='/info/privacy'>Политики конфиденциальности</a>
                                        </label>
                                    </div>
                                    <button disabled={isPending} type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
                                    <div className="mt-3 text-center">
                                        <label htmlFor="password" className="form-label">У вас уже есть аккаунт? <span><Link href={'login'}>Войти</Link></span></label>
                                    </div>
                                </form>
                            </>
                }
            </div>
            <img className={styles.selectImage} src='../prev.png' />
        </div>
    </div >);
}
