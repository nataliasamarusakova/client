import axios, { AxiosRequestConfig } from "axios";
import { IAccount } from "../interface/account";
import { IProfileUser } from "../interface/profile.user";
import { ACCESS_TOKEN } from "../constants/constants";
import Cookies from 'js-cookie';
import { ILogs } from "../hooks/useLogs";

class ApiService {

    private URL = 'http://localhost:3300/api';

    private error(error: unknown, massage: string, auth?: boolean) {
        if (axios.isAxiosError(error) && error.response) {
            if (auth && error.response.data.statusCode == 401) {
                Cookies.remove(ACCESS_TOKEN);
                window.location.href = "/auth/login";
            }
            throw error.response.data
        }
        throw Error(`${massage} Пожалуйста, попробуйте повторить попытку позже...`);
    };

    private getRequestConfig(): AxiosRequestConfig {
        const access_token = Cookies.get(ACCESS_TOKEN)
        return {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        };
    }

    async getAccounts(): Promise<IAccount[]> {
        try {
            return (await axios.get(`${this.URL}/account/get`, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при получении списка аккаунтов.', true)
        }
    };

    async getStatisticsAccounts(): Promise<{ accounts: IAccount[], tasks: [] }> {
        try {
            return (await axios.get(`${this.URL}/account/statistics`, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при получении статистики аккаунтов.', true)
        }
    };

    async deleteAccount(id: string): Promise<IAccount> {
        try {
            return (await axios.delete(`${this.URL}/account/${id}`, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при удалении аккаунта.', true)
        }
    };

    async clearLogs() {
        try {
            return (await axios.get(`${this.URL}/logger/clear`, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при очистке журнала.', true)
        }
    };

    async getLogsPage(page: number): Promise<ILogs> {
        try {
            return (await axios.get(`${this.URL}/logger/get/${page}`, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при получении данных из журнала.', true)
        }
    };

    async getInfoUser(): Promise<IProfileUser> {
        try {
            return (await axios.get(`${this.URL}/user/me`, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при получении информации о пользователе.', true)
        }
    };

    async updateUser(name: string, email: string, password: string, confirmPassword: string): Promise<IProfileUser> {
        try {
            return (await axios.put(`${this.URL}/user/update`, { name, email, password, confirmPassword }, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при обновлении информации о пользователе.', true)
        }
    };

    async addAccount(access_token: string, proxy: string, user_agent?: string): Promise<IAccount> {
        try {
            return (await axios.post(`${this.URL}/account/add`, { access_token, proxy, user_agent }, this.getRequestConfig())).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при добавлении аккаунта.', true)
        }
    };

    async registerUser(name: string, email: string, password: string): Promise<IProfileUser> {
        try {
            return (await axios.post(`${this.URL}/user/register`, { name, email, password })).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при регистрации.')
        }
    };

    async loginUser(email: string, password: string): Promise<IProfileUser> {
        try {
            return (await axios.post(`${this.URL}/user/login`, { email, password })).data;
        }
        catch (error) {
            throw this.error(error, 'Произошла ошибка при входе в аккаунт.')
        }
    };

    async actionAccount(id: string): Promise<IAccount> {
        const response = await axios.get<IAccount>(`${this.URL}/account/${id}`, this.getRequestConfig());
        return response.data;
    };

    async updateTaskAccount(id: string, data: string): Promise<IAccount> {
        const response = await axios.post<IAccount>(`${this.URL}/account/update/${id}`, { data }, this.getRequestConfig());
        return response.data;
    };

    async loadTaskAccount(id: string): Promise<IAccount | Error> {
        const response = await axios.get<IAccount>(`${this.URL}/account/${id}`, this.getRequestConfig());
        return response.data;
    };
}

export const apiService = new ApiService()