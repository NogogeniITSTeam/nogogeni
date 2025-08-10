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
    imgPath: "/history_1.png",
    title: "Foo",
    location: "Foo Bar",
  },
  {
    imgPath: "/history_2.png",
    title: "Bar",
    location: "Bar Foo",
  },
  {
    imgPath: "/history_3.png",
    title: "Baz",
    location: "Foo Baz",
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
    <article className="bg-nogogeni-black py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32">
      <h2 className="font-extrabold text-center text-3xl mb-6">
        Nogogeni&apos;s Home Base
      </h2>

      <p className="text-justify mx-auto max-w-lg text-sm mb-8">
        With every project, we commit to advancing sustainable vehicle research,
        inspiring thousands of students across generations, and proudly
        representing Indonesia on the global stage.
      </p>

      <Carousel
        setApi={setCarouselApi}
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{ align: "center", loop: true }}
        className="mb-8"
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.title}>
              <div className="relative overflow-hidden aspect-4/5 w-full mx-auto max-w-xs">
                <Image
                  fill
                  src={item.imgPath}
                  alt={item.title}
                  className="object-cover object-center"
                />

                <div className="bg-black/50 absolute z-10 bottom-0 left-0 right-0 py-4">
                  <div className="w-full mx-auto max-w-48 space-y-1">
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
              index + 1 === current ? "bg-nogogeni-orange" : "bg-nogogeni-white"
            } tablet:nth-[5]:hidden desktop:nth-[4]:hidden`}
          />
        ))}
      </div>
    </article>
  );
}

export { HomeBase };
