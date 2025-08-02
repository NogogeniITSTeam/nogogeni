import { useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/components/Vehicle";

export default function Home() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (carouselApi) {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
      carouselApi.on("select", () => {
        setCurrent(carouselApi.selectedScrollSnap() + 1);
      });
    }
  }, [carouselApi]);

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

      <section className="relative bg-nogogeni-black">
        <Carousel setApi={setCarouselApi}>
          <CarouselContent>
            <CarouselItem className="w-full h-64">
              <div className="bg-blue-600 w-full h-full"></div>
            </CarouselItem>
            <CarouselItem className="w-full h-64">
              <div className="bg-green-600 w-full h-full"></div>
            </CarouselItem>
            <CarouselItem className="w-full h-64">
              <div className="bg-purple-600 w-full h-full"></div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index + 1 === current
                  ? "bg-nogogeni-orange"
                  : "bg-nogogeni-white"
              }`}
            />
          ))}
        </div>
      </section>

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

        <Link
          href="/about-us"
          className="bg-nogogeni-orange hover:bg-nogogeni-orange/35 active:inset-shadow-md transition-all text-sm font-medium text-nogogeni-white px-3 py-2 rounded-full"
        >
          Learn Our History
        </Link>
      </article>

      <Vehicle />
    </>
  );
}
