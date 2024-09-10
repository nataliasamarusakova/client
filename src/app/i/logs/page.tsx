import Logs from "@/src/app/i/logs/Logs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accounts Tool - Журнал работы",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function LogsPage() {
    return (<Logs />);
}
