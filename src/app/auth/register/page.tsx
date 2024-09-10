
import Register from "@/src/app/auth/register/RegisterFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accounts Tool - Регистрация пользователя",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function RegisterPage() {
    return (<Register />);
}
