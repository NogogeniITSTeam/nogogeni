import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const histories = [
  { year: 2011, imgPath: "/about-us/history_1.png" },
  { year: 2013, imgPath: "/about-us/history_2.png" },
  { year: 2014, imgPath: "/about-us/history_3.png" },
  { year: 2015, imgPath: "/about-us/history_4.png" },
  { year: 2016, imgPath: "/about-us/history_5.png" },
  { year: 2017, imgPath: "/about-us/history_6.png" },
  { year: 2018, imgPath: "/about-us/history_7.png" },
  { year: 2019, imgPath: "/about-us/history_8.png" },
  { year: 2020, imgPath: "/about-us/history_9.png" },
  { year: 2021, imgPath: "/about-us/history_10.png" },
  { year: 2022, imgPath: "/about-us/history_11.png" },
  { year: 2023, imgPath: "/about-us/history_12.png" },
  { year: 2024, imgPath: "/about-us/history_13.png" },
];

function History() {
  return (
    <article
      id="history"
      className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32"
    >
      <p className="text-justify mx-auto max-w-[512px] text-sm mb-8 tablet:max-w-xl tablet:text-base tablet:mb-12 desktop:max-w-4xl desktop:text-2xl desktop:mb-16">
        <span className="text-nogogeni-orange font-bold">
          Nogogeni ITS Team
        </span>{" "}
        was established in 2011. The team originated from a final project by a
        student from the 2009-2010 cohort of the Diploma III in Industrial
        Mechanical Engineering at ITS. This project was later developed by
        junior students into a dedicated team. Initially named Nagageni upon its
        founding in 2011, the team was renamed Pancasona the following year.
        Since 2013, it has been known as Nogogeni, a name it retains to this
        day.
      </p>

      <div className="w-full mx-auto px-8 max-w-96 mt-8 tablet:px-0 tablet:max-w-[660px] desktop:max-w-[1008px]">
        <Carousel
          opts={{ align: "center" }}
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {histories.map((history) => (
              <CarouselItem
                key={history.year}
                className="tablet:basis-1/2 tablet:pl-5 desktop:basis-1/3 desktop:pl-6"
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl aspect-video tablet:w-xs">
                    <Image
                      fill
                      src={history.imgPath}
                      alt={`${history.year}`}
                      className="object-cover object-center"
                    />
                  </div>
                  <span className="font-bold flex justify-start items-center text-lg tablet:text-xl">
                    {history.year}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-left-16 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:size-9 desktop:[&_svg]:w-7 desktop:[&_svg]:h-7" />
          <CarouselNext className="-right-10 size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-right-16 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:size-9 desktop:[&_svg]:w-7 desktop:[&_svg]:h-7" />
        </Carousel>
      </div>
    </article>
  );
}

export { History };
