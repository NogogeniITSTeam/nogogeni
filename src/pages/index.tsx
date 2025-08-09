import { Vehicle } from "@/components/Vehicle";
import { Competition } from "@/components/Competition";
import { Driver } from "@/components/Driver";
import { Review } from "@/components/Review";
import { Sponsor } from "@/components/Sponsor";
import { MediaPartner } from "@/components/MediaPartner";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { MiniAboutUs } from "@/components/MiniAboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <MiniAboutUs />

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
        <h2 className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent font-extrabold flex flex-col items-center text-2xl mb-6 tablet:text-3xl tablet:mb-8 desktop:text-[64px] desktop:mb-10">
          The Soul of Our Work
        </h2>

        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/___vZMEwlCc?si=uAXuCUFlykdeH-Ob"
          title="Nogogeni ITS Team: Company Profile"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="aspect-video mx-auto w-full max-w-[512px] mb-8 tablet:max-w-2xl tablet:mb-10 desktop:max-w-5xl desktop:mb-12"
        ></iframe>
      </section>

      <Review />
      <Sponsor />
      <MediaPartner />
    </>
  );
}
