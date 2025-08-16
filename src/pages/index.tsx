import { Vehicle } from "@/components/home/Vehicle";
import { Competition } from "@/components/home/Competition";
import { Driver } from "@/components/home/Driver";
import { Review } from "@/components/home/Review";
import { Sponsor } from "@/components/home/Sponsor";
import { MediaPartner } from "@/components/home/MediaPartner";
import { Hero } from "@/components/home/Hero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <article className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
        <h1 className="font-extrabold text-center text-3xl mb-6 desktop:text-[64px] desktop:mb-12">
          Welcome To
          <br />
          <span className="text-red-500">Nogogeni ITS Team</span>
        </h1>

        <div className="relative w-fit mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 right-0">
            <div className="relative w-24 h-24 desktop:w-32 desktop:h-32">
              <Image
                fill
                src="/star.png"
                alt=""
                className="object-contain object-center"
              />
            </div>
            <div className="bg-nogogeni-black/85 absolute inset-0 translate-x-8 -translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
          </div>

          <p className="relative z-10 text-justify max-w-[512px] text-sm mb-4 tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
            An official student research team from Institut Teknologi Sepuluh
            Nopember (ITS), dedicated to developing energy-efficient vehicles
            that push the limits of technology, creativity, and sustainability.
          </p>

          <p className="relative z-10 text-justify max-w-[512px] text-sm mb-8 tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
            Since 2012, we&lsquo;ve grown from a small team of dreamers into
            Indonesia&lsquo;s most decorated energy-efficient vehicle team —
            with groundbreaking innovations, national championships, and
            international recognition to our name.
          </p>
        </div>

        <Button asChild size="small" className="tablet:hidden">
          <Link href="/about-us">Learn Our History</Link>
        </Button>

        <Button asChild size="medium" className="hidden tablet:inline-flex">
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

      <section className="bg-nogogeni-black text-center w-full mx-auto max-w-[512px] pt-16 px-8 tablet:max-w-2xl tablet:px-16 tablet:pt-24 desktop:max-w-5xl desktop:px-32 desktop:pt-32">
        <h2 className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent font-extrabold flex flex-col items-center text-2xl mb-6 tablet:text-3xl tablet:mb-8 desktop:text-[64px] desktop:mb-10">
          The Soul of Our Work
        </h2>

        <div className="relative">
          <div className="absolute -top-12 -right-12 desktop:-top-16 desktop:-right-16">
            <div className="relative w-24 h-24 desktop:w-32 desktop:h-32">
              <Image
                fill
                src="/star.png"
                alt=""
                className="object-contain object-center"
              />
            </div>
            <div className="bg-nogogeni-black/85 absolute inset-0 translate-x-8 -translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
          </div>

          <div className="absolute z-10 -bottom-12 -left-12 desktop:-bottom-16 desktop:-left-16">
            <div className="relative w-24 h-24 desktop:w-32 desktop:h-32">
              <Image
                fill
                src="/star.png"
                alt=""
                className="object-contain object-center"
              />
            </div>
            <div className="bg-nogogeni-black/85 absolute inset-0 -translate-x-8 translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
          </div>

          <iframe
            allowFullScreen
            src="https://www.youtube.com/embed/___vZMEwlCc?si=uAXuCUFlykdeH-Ob"
            title="Nogogeni ITS Team: Company Profile"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="relative z-20 aspect-video w-full"
          ></iframe>
        </div>
      </section>

      <Review />
      <Sponsor />
      <MediaPartner />
    </>
  );
}
