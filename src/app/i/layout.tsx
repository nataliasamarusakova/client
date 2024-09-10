import NavBar from "@/src/components/NavBar/NavBar";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Mark from "@/src/components/Mark/Mark";

export const metadata = {
  title: "Accounts Tool - Список аккаунтов",
  description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи",
};

export default function ILayout({ children }: { children: React.ReactNode; }) {

  return <body>
    <Header />
    <div className="containerLayout">
      <NavBar />
      <div className="flex-grow-1 me-2">
        <div className="py-0 px-2">
          <Mark />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  </body>
}