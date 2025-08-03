import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/components/Vehicle";
import { Competition } from "@/components/Competition";
import { Driver } from "@/components/Driver";
import { Review } from "@/components/Review";
import { Sponsor } from "@/components/Sponsor";
import { MediaPartner } from "@/components/MediaPartner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="bg-[#1E1E1E] flex justify-between items-center px-10 py-5">
        <div className="flex justify-between items-center gap-3">
          <Image
            src="/nogogeni_logo.png"
            alt="Logo Nogogeni"
            width={32}
            height={24}
          />

          <h2 className="text-sm font-bold text-nogogeni-white">
            Nogogeni ITS Team
          </h2>
        </div>

        <button type="button" className="cursor-pointer">
          <MenuIcon className="h-6 w-6 text-nogogeni-white" />
          <span className="sr-only">Menu</span>
        </button>
      </header>

      <Hero />

      <article className="bg-nogogeni-black pt-16 px-8 text-center">
        <h1 className="text-nogogeni-white text-3xl font-extrabold text-center mb-6">
          Welcome To
          <br />
          <span className="text-red-500">Nogogeni ITS Team</span>
        </h1>

        <p className="text-sm text-nogogeni-white max-w-[512px] text-justify mx-auto mb-4">
          An official student research team from Institut Teknologi Sepuluh
          Nopember (ITS), dedicated to developing energy-efficient vehicles that
          push the limits of technology, creativity, and sustainability.
        </p>

        <p className="text-sm text-nogogeni-white max-w-[512px] text-justify mx-auto mb-8">
          Since 2012, we&lsquo;ve grown from a small team of dreamers into
          Indonesia&lsquo;s most decorated energy-efficient vehicle team — with
          groundbreaking innovations, national championships, and international
          recognition to our name.
        </p>

        <Button
          asChild
          type="button"
          size="sm"
          className="bg-nogogeni-orange text-nogogeni-white hover:bg-nogogeni-orange/35 active:inset-shadow-md cursor-pointer rounded-full"
        >
          <Link href="/about-us">Learn Our History</Link>
        </Button>
      </article>

      <Vehicle />
      <Driver />
      <Competition />

      <section className="bg-nogogeni-black pt-16 px-8 space-y-8">
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/___vZMEwlCc?si=uAXuCUFlykdeH-Ob"
          title="Nogogeni ITS Team: Company Profile"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="aspect-video w-full max-w-[512px] mx-auto"
        ></iframe>

        <div className="space-y-4">
          <h2 className="hidden font-extrabold flex-col items-center text-xl tablet:flex">
            <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent">
              The Soul of
            </span>{" "}
            <br />{" "}
            <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>

          <h2 className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent font-extrabold flex flex-col items-center text-2xl tablet:hidden">
            The Soul of Our Work
          </h2>

          <p className="text-nogogeni-white font-medium text-justify text-sm">
            It is about building efficient vehicles through careful research,
            solid teamwork, and a commitment to sustainability.
          </p>
        </div>
      </section>

      <Review />
      <Sponsor />
      <MediaPartner />
      <Footer />
    </>
  );
}
