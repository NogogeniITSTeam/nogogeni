import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}
