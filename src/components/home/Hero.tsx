import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";

const heroImages = [
  { path: "/home/hero_image_1.jpg", alt: "Nogogeni VII" },
  { path: "/home/hero_image_2.jpg", alt: "Nogogeni IX Evo" },
  { path: "/home/hero_image_3.jpg", alt: "Nogogeni Driver and Its Team" },
];

function Hero() {
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
    <section className="relative bg-nogogeni-black mt-16 desktop:mt-24">
      <Carousel setApi={setCarouselApi} plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {heroImages.map((img) => (
            <CarouselItem
              key={img.alt}
              className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]"
            >
              <Image
                fill
                src={img.path}
                alt={img.alt}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <Link
          href="/garage/vehicle-types"
          className="text-sm font-semibold flex justify-center items-center gap-2 tablet:text-base tablet:gap-3 desktop:hidden"
        >
          Discover <ChevronRightCircleIcon className="size-4 tablet:size-5" />
        </Link>

        <div className="flex items-center gap-3 desktop:gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={`rounded-full transition-colors cursor-pointer w-3 h-3 desktop:w-4 desktop:h-4 ${
                index + 1 === current
                  ? "bg-nogogeni-orange"
                  : "bg-nogogeni-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Hero };
