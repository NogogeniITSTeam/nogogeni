import Link from "next/link";
import { Vehicle } from "@/components/Vehicle";
import { Competition } from "@/components/Competition";
import { Driver } from "@/components/Driver";
import { Review } from "@/components/Review";
import { Sponsor } from "@/components/Sponsor";
import { MediaPartner } from "@/components/MediaPartner";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <article className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
        <h1 className="font-extrabold text-center text-3xl mb-6 tablet:text-[40px] desktop:text-[80px] desktop:mb-12">
          Welcome To
          <br />
          <span className="text-red-500">Nogogeni ITS Team</span>
        </h1>

        <p className="text-justify mx-auto max-w-[512px] text-sm mb-4 tablet:max-w-3xl tablet:text-xl desktop:max-w-6xl desktop:text-[40px]">
          An official student research team from Institut Teknologi Sepuluh
          Nopember (ITS), dedicated to developing energy-efficient vehicles that
          push the limits of technology, creativity, and sustainability.
        </p>

        <p className="text-justify mx-auto max-w-[512px] text-sm mb-8 tablet:max-w-3xl tablet:text-xl tablet:mb-12 desktop:max-w-6xl desktop:text-[40px]">
          Since 2012, we&lsquo;ve grown from a small team of dreamers into
          Indonesia&lsquo;s most decorated energy-efficient vehicle team — with
          groundbreaking innovations, national championships, and international
          recognition to our name.
        </p>

        <Button
          asChild
          type="button"
          size="sm"
          className="bg-nogogeni-orange hover:bg-nogogeni-orange/35 active:inset-shadow-md cursor-pointer rounded-full desktop:h-full desktop:text-[28px] desktop:px-6 desktop:py-3"
        >
          <Link href="/about-us">Learn Our History</Link>
        </Button>
      </article>

      <div className="absolute w-40 h-40 -right-8 -translate-y-12 tablet:w-52 tablet:h-52 tablet:-right-10 tablet:-translate-y-16 desktop:w-64 desktop:h-64 desktop:-right-12 desktop:-translate-y-28">
        <Image
          fill
          src="/pattern_right.png"
          alt=""
          className="object-contain object-center"
        />
      </div>

      <Vehicle />
      <Driver />
      <Competition />

      <section className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/___vZMEwlCc?si=uAXuCUFlykdeH-Ob"
          title="Nogogeni ITS Team: Company Profile"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="aspect-video mx-auto w-full max-w-[512px] mb-8 tablet:max-w-2xl tablet:mb-10 desktop:max-w-5xl desktop:mb-12"
        ></iframe>

        <div className="space-y-4 tablet:space-y-0 tablet:flex tablet:justify-center tablet:items-center tablet:gap-6 desktop:gap-11">
          <h2 className="font-extrabold flex-col text-[40px] hidden tablet:flex desktop:text-[80px]">
            <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent desktop:leading-tight">
              The Soul of
            </span>
            <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent desktop:leading-tight">
              Our Work
            </span>
          </h2>

          <h2 className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent font-extrabold flex flex-col items-center text-2xl tablet:hidden">
            The Soul of Our Work
          </h2>

          <p className="font-medium text-justify mx-auto text-sm max-w-80 tablet:mx-0 tablet:text-base desktop:text-[28px] desktop:max-w-[512px]">
            It is about building efficient vehicles through careful research,
            solid teamwork, and a commitment to sustainability.
          </p>
        </div>
      </section>

      <Review />
      <Sponsor />
      <MediaPartner />
    </>
  );
}
