import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const reviews = [
  {
    reviewer: "Prof. Dr. Dahlan Iskan",
    content:
      "I personally and the people of East Java fully support the Nogogeni ITS Team so that they continue to work and excel for Indonesian. May Allah always bless us all",
    position: "Ex. Minister of State Owned Enterprises Period 2011-2024",
    imgPath: "/dahlan.png",
  },
  {
    reviewer: "Rudy Salim",
    content:
      "Nogogeni ITS Team has already well-answered the challenges given to students to develop the automotive sector for Indonesia. I hope the Nogogeni ITS Team will always create new moves and contribute to Indonesian automotive",
    position: "Entepreneur and Influencer",
    imgPath: "/rudy.png",
  },
  {
    reviewer: "Sandiaga Uno",
    content:
      "As initial support for Indonesia's future as a leading country in the electrical energy industry, I appreciate and certainly hope the Nogogeni ITS Team will continue to be enthusiastic about working despite the Covid Pandemic and always suceed in various fields of competition",
    position: "Ex. Minister of Tourism and Economy Creative",
    imgPath: "/sandiaga.png",
  },
  {
    reviewer: "Ir. Bambang Pramujati, S.T., M.Sc.Eng., PhD",
    content:
      "The Nogogeni ITS Team has effectively addressed the challenges posed to students in advancing Indonesia's automotive sector. I hope the team continues to innovate and make meaningful contributions to the nation's automotive industry",
    position: "Chancellor of ITS Campus",
    imgPath: "/bambang.png",
  },
  {
    reviewer: "Fitra Eri",
    content:
      "The Nogogeni ITS Team has effectively addressed the challenges posed to students in advancing Indonesia's automotive sector. I hope the team continues to innovate and make meaningful contributions to the nation's automotive industry",
    position: "Race Car Driver and Influencer",
    imgPath: "/fitra.png",
  },
];

function Review() {
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
    <section className="bg-nogogeni-black py-16 px-8 space-y-8">
      <h2 className="font-extrabold flex flex-col items-center text-3xl">
        <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent">
          What Notable Figures
        </span>{" "}
        <br />{" "}
        <span className="bg-linear-to-r from-nogogeni-white to-nogogeni-orange bg-clip-text text-transparent">
          Said About Nogogeni
        </span>
      </h2>

      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.reviewer}>
              <article className="bg-[#BA271D] relative overflow-hidden aspect-4/5 rounded-md max-w-64 mx-auto p-6">
                <Image
                  fill
                  src={review.imgPath}
                  alt={`${review.reviewer}, ${review.position}`}
                  className="object-contain object-center scale-90 translate-y-[78px] translate-x-[72px]"
                />

                <p className="text-nogogeni-white text-justify relative z-10 text-sm">
                  &quot;{review.content}&quot;
                </p>

                <div className="absolute bottom-8 flex flex-col items-start max-w-48">
                  <h3 className="text-nogogeni-white font-bold text-sm">
                    - {review.reviewer},
                  </h3>
                  <span className="text-nogogeni-white text-xs">
                    {review.position}
                  </span>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-center gap-3">
        {Array.from({ length: reviews.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index + 1 === current ? "bg-nogogeni-orange" : "bg-nogogeni-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export { Review };
