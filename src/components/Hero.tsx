import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  { path: "/hero_image_1.jpg", alt: "Nogogeni VII" },
  { path: "/hero_image_2.jpg", alt: "Nogogeni IX Evo" },
  { path: "/hero_image_3.jpg", alt: "Nogogeni Driver and Its Team" },
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
    <section className="relative bg-nogogeni-black">
      <Carousel setApi={setCarouselApi} plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {heroImages.map((img) => (
            <CarouselItem key={img.alt} className="relative h-72">
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index + 1 === current ? "bg-nogogeni-orange" : "bg-nogogeni-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export { Hero };
