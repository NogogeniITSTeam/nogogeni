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
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRightIcon } from "lucide-react";

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
        <span className="text-nogogeni-white">Our Vehicle</span>
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
                  <div className="flex flex-col justify-center items-center gap-4 desktop:gap-6">
                    <div className="relative">
                      <div className="bg-nogogeni-white rounded-full w-24 h-24 tablet:w-32 tablet:h-32 desktop:w-48 desktop:h-48">
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
          <CarouselPrevious className="size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-left-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-left-16 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8" />
          <CarouselNext className="size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-right-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-right-16 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8" />
        </Carousel>
      </div>

      <Button asChild className="text-sm tablet:text-base">
        <Link href="/garage">
          Explore Garage <ChevronRightIcon className="size-4 desktop:size-8" />
        </Link>
      </Button>

      <div className="absolute w-40 h-40 -left-8 -translate-y-8 tablet:w-52 tablet:h-52 tablet:-left-10 tablet:-translate-y-24 desktop:w-64 desktop:h-64 desktop:-left-12">
        <Image
          fill
          src="/pattern_left.png"
          alt=""
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}

export { Vehicle };
