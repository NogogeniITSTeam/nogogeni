import Image from "next/image";
import { Vehicle } from "./VehicleList";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Progress } from "../ui/progress";
import { useEffect, useState } from "react";

interface VehicleProps {
  vehicle: Vehicle;
}

function VehicleItem({ vehicle }: VehicleProps) {
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
      <div className="bg-radial from-nogogeni-orange to-nogogeni-red/50 relative grid place-items-center w-screen h-64 desktop:h-[448px]">
        <h2 className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange absolute top-0 left-0 uppercase font-semibold w-fit text-lg py-2.5 px-4 desktop:text-4xl desktop:py-4 desktop:px-6">
          {vehicle.name}
        </h2>

        <div className="relative w-48 h-28 tablet:w-64 tablet:h-40 desktop:w-md desktop:h-64">
          <Image
            fill
            src={vehicle.imgPath}
            alt={vehicle.name}
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className="bg-nogogeni-black py-4 space-y-6 tablet:py-6 desktop:py-8 desktop:space-y-8">
        <Carousel
          setApi={setCarouselApi}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnFocusIn: false,
            }),
          ]}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent>
            {Object.entries(vehicle.specification).map((item) => (
              <CarouselItem
                key={`${vehicle.name}:${item[0]}:${item[1]}`}
                className="text-nowrap flex flex-col justify-center items-center gap-1 basis-1/2 pl-0 tablet:basis-1/4 desktop:basis-1/5"
              >
                <h3 className="font-bold uppercase desktop:text-2xl">
                  {item[0]}
                </h3>
                <p className="uppercase text-sm desktop:text-lg">{item[1]}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Progress
          value={(current / Object.entries(vehicle.specification).length) * 100}
          max={Object.entries(vehicle.specification).length}
          className="w-32 mx-auto tablet:w-64 desktop:w-md"
        />
      </div>
    </>
  );
}

export { VehicleItem };
