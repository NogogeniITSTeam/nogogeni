import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const carouselItems = [
  {
    imgPath: "/about-us/kandang_kuning_1.png",
    title: "Kandang Kuning Nogogeni ITS Team",
    location: "ITS Surabaya",
  },
  {
    imgPath: "/about-us/kandang_kuning_2.png",
    title: "Kandang Kuning Nogogeni ITS Team",
    location: "ITS Surabaya",
  },
  {
    imgPath: "/about-us/kandang_kuning_3.png",
    title: "Kandang Kuning Nogogeni ITS Team",
    location: "ITS Surabaya",
  },
];

function HomeBase() {
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
    <article className="bg-nogogeni-black py-16 px-8 tablet:px-16 tablet:py-24 desktop:grid desktop:grid-cols-2 desktop:gap-12 desktop:px-32 desktop:py-32">
      <div className="space-y-6 tablet:space-y-8 tablet:mb-10">
        <h2 className="font-extrabold text-center text-3xl desktop:text-start desktop:text-[64px]">
          Nogogeni&apos;s Home Base
        </h2>

        <p className="text-justify mx-auto max-w-lg text-sm tablet:text-base desktop:mx-0 desktop:max-w-2xl desktop:text-2xl">
          Located at the Department of Industrial Mechanical Engineering, ITS
          Surabaya, this yellow container functions as our workshop where we
          design, assemble, and prepare our energy-efficient vehicles for
          competitions
        </p>
      </div>

      <div>
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
          className="mb-8"
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.imgPath}>
                <div className="relative overflow-hidden w-full mx-auto aspect-4/5 max-w-xs tablet:aspect-video tablet:max-w-lg desktop:max-w-xl">
                  <Image
                    fill
                    src={item.imgPath}
                    alt={item.title}
                    className="object-cover object-center"
                  />

                  <div className="bg-black/50 absolute z-10 bottom-0 left-0 right-0 py-4">
                    <div className="w-full mx-auto max-w-48 space-y-1 tablet:mx-0 tablet:max-w-max tablet:ml-8 desktop:ml-12">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm">{item.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-center gap-3 desktop:gap-4">
          {Array.from({ length: carouselItems.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer desktop:w-4 desktop:h-4 ${
                index + 1 === current
                  ? "bg-nogogeni-orange"
                  : "bg-nogogeni-white"
              } tablet:nth-[5]:hidden desktop:nth-[4]:hidden`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export { HomeBase };
