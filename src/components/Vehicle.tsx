import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";

const vehicles = [
  { name: "Nogogeni VII", year: "2024", imgPath: "/nogogeni_vii.png" },
  { name: "Nogogeni IX Evo", year: "2024", imgPath: "/nogogeni_ix_evo.png" },
  { name: "Gokart", year: "2024", imgPath: "/gokart.png" },
  { name: "Ng-5000", year: "2024", imgPath: "/ng_5000.png" },
];

function Vehicle() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (carouselApi) {
      setCurrent(carouselApi.selectedScrollSnap());
      carouselApi.on("select", () => {
        setCurrent(carouselApi.selectedScrollSnap());
      });
    }
  }, [carouselApi]);

  return (
    <section className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
      <h2 className="text-nogogeni-orange font-extrabold text-2xl tablet:text-[40px] desktop:text-[80px]">
        Let&apos;s Explore
        <br />
        <span>Our Vehicle</span>
      </h2>

      <div className="mx-auto px-8 max-w-96 my-12 tablet:px-0 tablet:max-w-[512px] tablet:my-16 desktop:max-w-3xl desktop:my-24">
        <Carousel
          setApi={setCarouselApi}
          opts={{ align: "center", loop: true }}
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {vehicles.map((vehicle, index) => (
              <CarouselItem key={vehicle.name} className="basis-1/2">
                <div
                  className={`transition-all duration-500 ${
                    index === current
                      ? "scale-100 opacity-100"
                      : "scale-50 opacity-50"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="relative">
                      <div className="bg-nogogeni-white rounded-full w-20 h-20 tablet:w-28 tablet:h-28 desktop:w-32 desktop:h-32">
                        <Image
                          fill
                          src={vehicle.imgPath}
                          alt={vehicle.name}
                          className="object-contain object-center scale-150"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-nowrap text-xs tablet:text-xl">
                      <span className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange font-semibold uppercase px-2 py-1">
                        {vehicle.name}
                      </span>
                      <span>{vehicle.year}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="[&_svg]:text-nogogeni-black hover:bg-nogogeni-white/90 -left-12 size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-left-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6" />
          <CarouselNext className="[&_svg]:text-nogogeni-black hover:bg-nogogeni-white/90 -right-12 size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-right-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6" />
        </Carousel>
      </div>

      <Button
        asChild
        type="button"
        size="sm"
        className="bg-nogogeni-orange hover:bg-nogogeni-orange/35 active:inset-shadow-md cursor-pointer rounded-full desktop:h-full desktop:text-[28px] desktop:px-6 desktop:py-3"
      >
        <Link href="/garage">
          Explore Garage <ChevronRightIcon className="size-4 desktop:size-8" />
        </Link>
      </Button>
    </section>
  );
}

export { Vehicle };
