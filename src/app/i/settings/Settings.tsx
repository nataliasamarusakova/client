"use client";

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Settings.module.css'
import { ERROR_EMPTY_EMAIL, ERROR_EMPTY_PASSWORD, ERROR_VALUE_EMAIL, ERROR_VALUE_PASSWORD, ERROR_EMPTY_NAME, ERROR_VALUE_NAME } from '../../../constants/constants';
import { FC, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@/src/api/apiService';
import clsx from 'clsx';
import { IProfileUser } from '@/src/interface/profile.user';
import Loader from '../../../components/Loader/Loader';

interface ISettings extends IRegisterFrom {
    confirmPassword: string
}

const Settings: FC = () => {

    const queryClient = useQueryClient();
    const { formState, reset, watch, register, handleSubmit } = useForm<ISettings>({ mode: 'onChange' });

    const { data } = useQuery({
        queryKey: ['user-profile'],
        queryFn: () => queryClient.getQueryData<IProfileUser>(['user-profile'])
    })

    useEffect(() => {
        reset({ email: data?.email, name: data?.name });
    }, [data])


    const onSubmit: SubmitHandler<IProfile> = (data) => {
        const { name, email, password, confirmPassword } = data;
        mutate({ name, email, password, confirmPassword });
    };

    const { mutate, reset: resetMutation, isSuccess, error, isPending } = useMutation({
        mutationKey: ['update-user'],
        mutationFn: ({ name, email, password, confirmPassword }: IProfile) => apiService.updateUser(name, email, password, confirmPassword),
        onSuccess: (user) => {
            reset({ password: '', confirmPassword: '' });
            queryClient.setQueryData(['user-profile'], user)
        }
    })

    if (isPending) {
        return <div className={styles.containerProfiles}>
            <Loader text="Идет процесс обновления профиля" />
        </div>
    }
    const getName = (name?: string) => {
        if (!name) return '';
        const parts = name.split(' ');
        if (parts.length > 1) {
            return parts[0].charAt(0) + parts[1].charAt(0);
        } else {
            return parts[0].charAt(0);
        }
    };

    return <div className={clsx(styles.containerProfiles)}>
        <h4 className="mb-4">Настройки профиля</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex justify-content-between'>
                <div className={styles.imageAvatar}>
                    <span>{getName(data?.name)}</span>
                </div>
                <div className='flex-grow-1'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input type="text" required placeholder="Enter your name" className="form-control" id="name" {...register('name', {
                            required: ERROR_EMPTY_NAME, minLength: { value: 4, message: ERROR_VALUE_NAME },
                            onChange: () => resetMutation(),
                        })} />
                        {
                            formState.errors.name && <div className={styles.formEditProfileError}>{formState.errors.name.message}</div>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input required placeholder="Enter your email" type="email" className="form-control" id="email" aria-describedby="emailHelp" {...register('email',
                            {
                                required: ERROR_EMPTY_EMAIL, pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: ERROR_VALUE_EMAIL },
                                onChange: () => resetMutation(),
                            })} />
                        {
                            formState.errors.email && <div className={styles.formEditProfileError}>{formState.errors.email.message}</div>
                        }
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input required placeholder="********" type="password" className="form-control" id="password" {...register('password', {
                    required: ERROR_EMPTY_PASSWORD, minLength: { value: 8, message: ERROR_VALUE_PASSWORD },
                    onChange: () => resetMutation(),
                })} />
                {
                    formState.errors.password && <div className={styles.formEditProfileError}>{formState.errors.password.message}</div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Повторите пароль</label>
                <input required placeholder="********" type="password" className="form-control" id="confirmPassword" {...register('confirmPassword', {
                    required: ERROR_EMPTY_PASSWORD, minLength: { value: 8, message: ERROR_VALUE_PASSWORD },
                    onChange: () => resetMutation(),
                    validate: (value: string): string | undefined => {
                        if (watch('password') != value) {
                            return "Введенные пароли не совпадают";
                        }
                        return undefined;
                    }
                })} />
                {
                    formState.errors.confirmPassword && <div className={styles.formEditProfileError}>{formState.errors.confirmPassword.message}</div>
                }
            </div>
            {
                isSuccess && <div className="text-primary mb-3">Профиль успешно обновлен</div>
            }
            {
                error && <div className={clsx(styles.formEditProfileError, "mb-3")}>{error.message}</div>
            }
            <button type="submit" className="btn btn-primary">Сохранить</button>
        </form>
    </div>
};

export default Settings;