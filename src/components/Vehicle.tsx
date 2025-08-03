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
    <section className="bg-nogogeni-black pt-16 px-8 text-center">
      <h2 className="text-nogogeni-orange font-extrabold text-2xl">
        Let&apos;s Explore
        <br />
        <span className="text-nogogeni-white">Our Vehicle</span>
      </h2>

      <div className="px-4 my-12">
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
                      <div className="bg-nogogeni-white rounded-full w-20 h-20">
                        <Image
                          fill
                          src={vehicle.imgPath}
                          alt={vehicle.name}
                          className="object-contain object-center scale-150"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-nowrap">
                      <span className="text-nogogeni-white text-xs bg-linear-to-r from-nogogeni-red to-nogogeni-orange font-semibold uppercase px-2 py-1">
                        {vehicle.name}
                      </span>
                      <span className="text-nogogeni-white text-xs">
                        {vehicle.year}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-8 size-6 [&_svg]:w-4 [&_svg]:h-4" />
          <CarouselNext className="-right-8 size-6 [&_svg]:w-4 [&_svg]:h-4" />
        </Carousel>
      </div>

      <Button
        asChild
        type="button"
        size="sm"
        className="bg-nogogeni-orange text-nogogeni-white hover:bg-nogogeni-orange/35 active:inset-shadow-md cursor-pointer rounded-full"
      >
        <Link href="/garage">
          Explore Garage <ChevronRightIcon className="w-4 h-4" />
        </Link>
      </Button>
    </section>
  );
}

export { Vehicle };
