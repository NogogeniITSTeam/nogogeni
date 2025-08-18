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
      <div className="bg-radial from-nogogeni-orange to-nogogeni-red relative grid place-items-center w-screen h-64">
        <h2 className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange absolute top-0 left-0 uppercase font-semibold w-fit text-lg py-2.5 px-4">
          {vehicle.name}
        </h2>

        <div className="relative w-48 h-28">
          <Image
            fill
            src={vehicle.imgPath}
            alt={vehicle.name}
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className="bg-nogogeni-black py-4 space-y-6">
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
                className="text-center min-w-48 max-w-fit pl-0 flex flex-col gap-1 justify-center items-center"
              >
                <h3 className="font-bold uppercase">{item[0]}</h3>
                <p className="uppercase text-sm">{item[1]}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Progress
          value={(current / Object.entries(vehicle.specification).length) * 100}
          max={Object.entries(vehicle.specification).length}
          className="w-32 mx-auto"
        />
      </div>
    </>
  );
}

export { VehicleItem };
