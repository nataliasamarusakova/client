import Script from "next/script"; 
import { Metadata } from "next";
import Lending from "../components/Lending/Lending";

export const metadata: Metadata = {
  title: "Accounts Tool - Продвижение в один клик",
  description: "Автоматизируйте продвижение ВКонтакте одним кликом. Увеличьте охват, подписчиков и продажи.",
};

export default function Page() {

  return <>

    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
      <link rel="stylesheet" href="assets/css/page.css" />
      <link rel="stylesheet" href="assets/css/animated.css" />
      <link rel="stylesheet" href="assets/css/owl.css" />
    </head>

    <body>
      <Lending  />
    </body>

    <Script src="vendor/jquery/jquery.min.js" />
    <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
    <Script src="assets/js/owl-carousel.js" />
    <Script src="assets/js/animation.js" />
    <Script src="assets/js/imagesloaded.js" />
    <Script src="assets/js/popup.js" />
    <Script src="assets/js/custom.js" />
  </>
}