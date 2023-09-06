import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/swiper.css";
import "@/mocks";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

if (process.env.NODE_ENV === "development") {
  await import("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
