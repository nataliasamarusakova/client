import Statistics from "@/src/app/i/statistic/Statistics";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accounts Tool - Статистика",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function StatisticsPage() {

    return (<Statistics />);
}
