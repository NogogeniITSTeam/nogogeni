import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useWindowSize } from "usehooks-ts";

const reviews = [
  { reviewer: "Prof. Dr. Dahlan Iskan", imgPath: "/home/dahlan.png" },
  { reviewer: "Rudy Salim", imgPath: "/home/rudy.png" },
  { reviewer: "Sandiaga Uno", imgPath: "/home/sandiaga.png" },
  {
    reviewer: "Ir. Bambang Pramujati, S.T., M.Sc.Eng., PhD",
    imgPath: "/home/bambang.png",
  },
  { reviewer: "Fitra Eri", imgPath: "/home/fitra.png" },
];

function Review() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { width = 0 } = useWindowSize({ initializeWithValue: false });

  useEffect(() => {
    if (carouselApi) {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
      carouselApi.on("select", () => {
        setCurrent(carouselApi.selectedScrollSnap() + 1);
      });
    }
  }, [carouselApi]);

  return (
    <section className="bg-nogogeni-black relative w-fit mx-auto space-y-8 py-16 px-8 tablet:px-16 tablet:py-24 desktop:space-y-12 desktop:px-32 desktop:py-32">
      <h2 className="font-extrabold flex flex-col items-center text-2xl tablet:text-[40px] desktop:text-[80px]">
        <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent">
          What Notable Figures
        </span>
        <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent">
          Said About Nogogeni
        </span>
      </h2>

      <Carousel
        setApi={setCarouselApi}
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{ align: "start" }}
        className="relative w-full tablet:mx-auto tablet:max-w-[532px] desktop:max-w-[1184px]"
      >
        <div className="absolute -top-12 -right-12 desktop:-top-12 desktop:-right-12">
          <div className="relative w-24 h-24 desktop:w-32 desktop:h-32">
            <Image
              fill
              src="/star.png"
              alt=""
              className="object-contain object-center"
            />
          </div>
          <div className="bg-nogogeni-black/85 absolute inset-0 translate-x-8 -translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
        </div>

        <div className="absolute -bottom-12 -left-12 desktop:-bottom-12 desktop:-left-12">
          <div className="relative w-24 h-24 desktop:w-32 desktop:h-32">
            <Image
              fill
              src="/star.png"
              alt=""
              className="object-contain object-center"
            />
          </div>
          <div className="bg-nogogeni-black/85 absolute inset-0 -translate-x-8 translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
        </div>

        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review.reviewer}
              className="tablet:max-w-fit tablet:basis-1/2 tablet:pl-5 desktop:basis-1/3 desktop:pl-8"
            >
              <Image
                src={review.imgPath}
                alt={review.reviewer}
                width={width < 1440 ? 256 : 384}
                height={width < 1440 ? 256 : 384}
                className="mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-center gap-3 desktop:gap-4">
        {Array.from({ length: reviews.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer desktop:w-4 desktop:h-4 ${
              index + 1 === current ? "bg-nogogeni-orange" : "bg-nogogeni-white"
            } tablet:nth-[5]:hidden desktop:nth-[4]:hidden`}
          />
        ))}
      </div>
    </section>
  );
}

export { Review };
