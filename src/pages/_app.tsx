import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={cn(poppins.className, "relative overflow-hidden")}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}
