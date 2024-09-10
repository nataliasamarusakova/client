import { Metadata } from "next"; 
import Privacy from "./Privacy";

export const metadata: Metadata = {
    title: "Accounts Tool - Политика конфиденциальности",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function PrivacyPage() {

    return (<Privacy />);
}
