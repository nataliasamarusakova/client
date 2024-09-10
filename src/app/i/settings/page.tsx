import Settings from "@/src/app/i/settings/Settings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accounts Tool - Профиль пользователя",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function ProfilePage() {

    return (<Settings />);
}
