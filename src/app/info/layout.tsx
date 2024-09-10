import Footer from "@/src/components/Footer/Footer";

export default function InfoLayout({ children }: { children: React.ReactNode; }) {

  return (<body>
    <div className="containerLayout">
      <div className="flex-grow-1 me-2 ms-2">
        {children}
        <Footer />
      </div>
    </div>
  </body>);
}