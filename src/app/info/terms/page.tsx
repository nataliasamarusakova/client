import { Metadata } from "next"; 
import Terms from "./Terms";

export const metadata: Metadata = {
    title: "Accounts Tool - Пользовательское соглашение",
    description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function TermsPage() {
    return (<Terms />);
}
