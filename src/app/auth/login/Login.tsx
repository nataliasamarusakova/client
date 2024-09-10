"use client";

import Link from 'next/link';
import styles from './Login.module.css'
import { apiService } from '@/src/api/apiService';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ERROR_EMPTY_EMAIL, ERROR_EMPTY_PASSWORD, ERROR_VALUE_EMAIL, ERROR_VALUE_PASSWORD } from '@/src/constants/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ACCESS_TOKEN } from '@/src/constants/constants';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import clsx from 'clsx';

export interface ILogin {
    email: string;
    password: string
}

export default function Login() {

    const router = useRouter()
    const queryClient = useQueryClient();

    const { mutate, error, reset } = useMutation({
        mutationKey: ['login-user'],
        mutationFn: ({ email, password }: ILogin) => apiService.loginUser(email, password),
        onSuccess: (user) => {
            queryClient.setQueryData(['user-profile'], user);
            Cookies.set(ACCESS_TOKEN, user.access_token, { domain: 'localhost', sameSite: 'lax', secure: true, expires: 3 })
            router.push('/i');
        }
    })

    const { register, handleSubmit, formState } = useForm<ILogin>({ mode: 'onChange' });

    const onSubmit: SubmitHandler<ILogin> = (data) => {
        const { email, password } = data;
        mutate({ email, password });
    }

    const email_error = formState.errors['email']?.message
    const password_error = formState.errors['password']?.message

    return (<div className={styles.registerForm}>
        <div className={clsx("card shadow-sm", styles.wrap)}>
            <div className="card-body">
                <div className={clsx("d-flex flex-column align-items-center mb-4 mt-3", styles.selectImage)}>
                    <img width={360} height={87} src={'../logo-full.png'} />
                </div>
                <h3 className="card-title text-center mb-3">Вход</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="py-1 px-5">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Почта</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text fs-5">@</div>
                            </div>
                            <input placeholder="Enter your email" type="email" required className="form-control" id="email" aria-describedby="emailHelp" {...register('email', {
                                required: ERROR_EMPTY_EMAIL, pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: ERROR_VALUE_EMAIL },
                                onChange: () => reset()
                            })} />
                        </div>
                        {
                            email_error && <p className={styles.formAuthError}>{email_error}</p>
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
                            <input placeholder="********" type="password" required className="form-control" id="password" {...register('password', {
                                required: ERROR_EMPTY_PASSWORD, minLength: { value: 8, message: ERROR_VALUE_PASSWORD },
                                onChange: () => reset()
                            })} />
                        </div>
                        {
                            password_error && <p className={styles.formAuthError}>{password_error}</p>
                        }
                    </div>
                    {
                        error && <p className={styles.formAuthError}>{error.message}</p>
                    }
                    <button type="submit" className="btn btn-primary d-block w-100">Войти</button>
                    <div className="mt-3 text-center ">
                        <label htmlFor="password" className="form-label">У вас нет аккаунта? <span><Link href={'register'}>Зарегистрироваться</Link></span></label>
                    </div>
                </form>
            </div>
            <img className={styles.selectImage} src='../prev.png' />
        </div >
    </div >);
}
