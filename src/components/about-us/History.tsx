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
  { year: 2011, imgPath: "/history_1.png" },
  { year: 2013, imgPath: "/history_2.png" },
  { year: 2014, imgPath: "/history_3.png" },
  { year: 2015, imgPath: "/history_4.png" },
  { year: 2016, imgPath: "/history_5.png" },
  { year: 2017, imgPath: "/history_6.png" },
  { year: 2018, imgPath: "/history_7.png" },
  { year: 2019, imgPath: "/history_8.png" },
  { year: 2020, imgPath: "/history_9.png" },
  { year: 2021, imgPath: "/history_10.png" },
  { year: 2022, imgPath: "/history_11.png" },
  { year: 2023, imgPath: "/history_12.png" },
  { year: 2024, imgPath: "/history_13.png" },
];

function History() {
  return (
    <article
      id="history"
      className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32"
    >
      <p className="text-justify mx-auto max-w-[512px] text-sm mb-4 tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
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

      <div className="mx-auto px-8 max-w-96 mt-8">
        <Carousel
          opts={{ align: "start" }}
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {histories.map((history) => (
              <CarouselItem key={history.year}>
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <Image
                      fill
                      src={history.imgPath}
                      alt={`${history.year}`}
                      className="object-cover object-center"
                    />
                  </div>
                  <span className="font-bold text-lg">{history.year}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-left-16 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-left-20 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8" />
          <CarouselNext className="-right-10 size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-right-16 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-right-20 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8" />
        </Carousel>
      </div>
    </article>
  );
}

export { History };
