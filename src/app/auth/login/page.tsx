import { Metadata } from "next";
import LoginFrom from '@/src/app/auth/login/Login';

export const metadata: Metadata = {
    title: "Accounts Tool - Вход в аккаунт",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function LoginPage() {

    return (<LoginFrom />);
}
