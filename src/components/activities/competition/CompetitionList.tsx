import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { Overview } from "./Overview";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Competition =
  | "kmhe"
  | "sem_asia"
  | "fsae"
  | "pln_ice"
  | "teknofest_tubitak";

interface Achievement {
  name: string;
  ranking: string;
  year: number;
  location: string;
  imgPath: string;
}

const competitions = new Map<
  Competition,
  {
    name: string;
    description: string;
    imgPath: string;
    achievements: Achievement[];
  }
>();

competitions.set("kmhe", {
  name: "Kontes Mobil Hemat Energi",
  description:
    "KMHE or Kontes Mobil Hemat Energi is an annual competition organized by the Pusat Prestasi Nasional (Puspresnas) of the Ministry of Education, Culture, Research and Technology (Kemdikbud Ristek). Republic of Indonesia. KMHE is a prestigious competition that focuses on energy-efficient vehicles. It serves as a platform for universities across Indonesia to showcase their innovations in sustainable transportation.",
  imgPath: "/activities/kmhe_logo.png",
  achievements: [
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2013,
      location: "Kenjeran Park Circuit",
      imgPath: "/about-us/history_2.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2014,
      location: "Kenjeran Park Circuit",
      imgPath: "/about-us/history_3.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "2nd Place",
      year: 2015,
      location: "Kanjuruhan Stadium",
      imgPath: "/about-us/history_4.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "2nd Place",
      year: 2016,
      location: "Prambanan Temple Complex",
      imgPath: "/about-us/history_5.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "2nd Place",
      year: 2017,
      location: "Kenjeran Park Circuit",
      imgPath: "/activities/kmhe_2017_2nd.jpg",
    },
    {
      name: "Urban Concept ICE Ethanol",
      ranking: "3rd Place",
      year: 2017,
      location: "Kenjeran Park Circuit",
      imgPath: "/activities/kmhe_2017_3rd.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "3rd Place",
      year: 2018,
      location: "Universitas Negeri Padang",
      imgPath: "/activities/kmhe_2018_3rd.jpg",
    },
    {
      name: "Urban Concept Ethanol",
      ranking: "1st Place",
      year: 2018,
      location: "Universitas Negeri Padang",
      imgPath: "/activities/kmhe_2018_1st.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2019,
      location: "Universitas Negeri Malang",
      imgPath: "/about-us/history_8.png",
    },
    {
      name: "Urban Concept Ethanol",
      ranking: "2nd Place",
      year: 2019,
      location: "Universitas Negeri Malang",
      imgPath: "/activities/kmhe_2019_2nd.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2020,
      location: "Universitas Indonesia",
      imgPath: "/about-us/history_9.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2021,
      location: "Gelora Bung Tomo Circuit",
      imgPath: "/about-us/history_10.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2022,
      location: "Gelora Bung Tomo Circuit",
      imgPath: "/about-us/history_11.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "1st Place",
      year: 2023,
      location: "Jakarta International E-Prix Circuit",
      imgPath: "/about-us/history_12.png",
    },
    {
      name: "Urban Concept Ethanol",
      ranking: "2nd Place",
      year: 2023,
      location: "Jakarta International E-Prix Circuit",
      imgPath: "/about-us/history_12.png",
    },
    {
      name: "Urban Concept Electric",
      ranking: "2nd Place",
      year: 2024,
      location: "Jakarta International E-Prix Circuit",
      imgPath: "/home/kmhe_second_place.png",
    },
    {
      name: "Urban Concept Ethanol",
      ranking: "2nd Place",
      year: 2024,
      location: "Jakarta International E-Prix Circuit",
      imgPath: "/about-us/history_13.png",
    },
  ],
});

competitions.set("sem_asia", {
  name: "Shell Eco-Marathon Asia (SEM Asia)",
  description:
    "Shell Eco-Marathon Asia is an international competition that invites students from around the world to design, build, and drive the most energy-efficient vehicles. The competition features two main categories: Prototype and Urban Concept. Nogogeni ITS has participated in the Battery Electric Urban Concept Category, which focuses on creating practical, efficient vehicles for future urban mobility.",
  imgPath: "/activities/sem_asia_logo.png",
  achievements: [
    {
      name: "Urban Electric Class of SEM-Asia",
      ranking: "3rd Place",
      year: 2017,
      location: "Changi Exhibition Centre",
      imgPath: "/about-us/history_6.png",
    },
    {
      name: "Urban Electric Class of SEM-Asia",
      ranking: "2nd Place",
      year: 2018,
      location: "Changi Exhibition Centre",
      imgPath: "/activities/sem_asia_2018_2nd.png",
    },
    {
      name: "Urban Electric Class of SEM-Asia",
      ranking: "2nd Place",
      year: 2019,
      location: "Sepang International Circuit",
      imgPath: "/activities/sem_asia_2019_2nd.png",
    },
  ],
});

competitions.set("fsae", {
  name: "Formula Society of Automotive Engineers",
  description:
    "Formula Society of Automotive Engineers (FSAE Australasia) FSAE Australasia is a prestigious motorsport engineering competition where students create small, formula-style racing cars. Teams are judged not only on their vehicle’s performance on track but also on their engineering design, cost analysis, and business presentation, making it a holistic test of engineering and management skills.",
  imgPath: "/activities/fsae_logo.png",
  achievements: [
    {
      name: "Design Event and Coast Event",
      ranking: "14th Place",
      year: 2020,
      location: "FSAE Australasia",
      imgPath: "/activities/fsae_2020_14th.png",
    },
    {
      name: "Presentation Event",
      ranking: "8th Place",
      year: 2020,
      location: "FSAE Australasia",
      imgPath: "/activities/fsae_2020_8th.png",
    },
  ],
});

competitions.set("pln_ice", {
  name: "PLN Innovation and Competition in Electricity",
  description:
    "PLN ICE is a national-level competition organized by PT PLN (Persero) to foster innovation in energy and technology. The event includes various categories, such as the development of electric-powered motorcycles and go-karts, encouraging students to create practical solutions for future mobility. Nogogeni ITS has taken part in this competition, presenting student-designed electric vehicles.",
  imgPath: "/activities/pln_ice_logo.png",
  achievements: [
    {
      name: "Innovation Competition in Electricity",
      ranking: "Top 10",
      year: 2023,
      location: "Sentul International Circuit",
      imgPath: "/activities/pln_ice_2023.png",
    },
    {
      name: "Gokart Category",
      ranking: "3rd Place",
      year: 2024,
      location: "Sentul International Circuitt",
      imgPath: "/home/pln_ice.jpg",
    },
  ],
});

competitions.set("teknofest_tubitak", {
  name: "TEKNOFEST TÜBİTAK",
  description:
    "TEKNOFEST TÜBİTAK is one of the world's largest technology and innovation festivals, held in Turkey. The event brings together students, researchers, and innovators to compete in areas ranging from aerospace and robotics to energy and sustainable transportation. Nogogeni ITS has represented Indonesia at TEKNOFEST, showcasing vehicle innovations on an international stage.",
  imgPath: "/activities/teknofest_logo.png",
  achievements: [
    {
      name: "Efficiency Challenge Electric Vehicle",
      ranking: "Finalist",
      year: 2022,
      location: "Turkey",
      imgPath: "/activities/tubitak_2022.png",
    },
  ],
});

function CompetitionList() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [competition, setCompetition] = useState<Competition>("kmhe");

  useEffect(() => {
    if (carouselApi) {
      setCurrent(carouselApi.selectedScrollSnap());
      carouselApi.on("select", () => {
        setCurrent(carouselApi.selectedScrollSnap());
      });
    }
  }, [carouselApi]);

  const selectedCompetition = useMemo(() => {
    return competitions.get(competition);
  }, [competition]);

  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-6 w-full mx-auto max-w-sm pt-16 px-8 tablet:max-w-2xl tablet:px-0 tablet:pt-24 desktop:max-w-3xl desktop:pt-32">
        <Button
          className={`${
            competition === "kmhe"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setCompetition("kmhe")}
        >
          KMHE
        </Button>
        <Button
          className={`${
            competition === "sem_asia"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setCompetition("sem_asia")}
        >
          SEM ASIA
        </Button>
        <Button
          className={`${
            competition === "fsae"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setCompetition("fsae")}
        >
          FSAE
        </Button>
        <Button
          className={`${
            competition === "pln_ice"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setCompetition("pln_ice")}
        >
          PLN ICE
        </Button>
        <Button
          className={`${
            competition === "teknofest_tubitak"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setCompetition("teknofest_tubitak")}
        >
          TEKNOFEST TÜBİTAK
        </Button>
      </section>

      {selectedCompetition ? (
        <>
          <Overview
            name={selectedCompetition.name}
            description={selectedCompetition.description}
            imgPath={selectedCompetition.imgPath}
          />

          <article className="py-16 tablet:py-24 desktop:py-32">
            <div className="w-full mx-auto max-w-7xl">
              <h2 className="text-center font-bold text-[28px] mb-16 mx-8 tablet:mx-0 desktop:text-[56px] desktop:mb-20">
                Achievements Timeline
              </h2>

              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "center", loop: true }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                    stopOnInteraction: false,
                    stopOnFocusIn: false,
                  }),
                ]}
              >
                <CarouselContent>
                  {selectedCompetition.achievements.map(
                    (achievement, index) => (
                      <CarouselItem
                        key={`${achievement.imgPath}:${achievement.ranking}`}
                        className="basis-1/2"
                      >
                        <div
                          className={`transition-all duration-500 ${
                            index === current
                              ? "scale-100 opacity-100"
                              : "scale-85 opacity-50"
                          }`}
                        >
                          <div className="flex flex-col justify-center items-center gap-2">
                            <div className="relative w-full h-40">
                              <Image
                                fill
                                src={achievement.imgPath}
                                alt={achievement.name}
                                className="object-cover object-center"
                              />

                              <div className="text-center absolute bottom-4 left-0 right-0">
                                <p className="text-nogogeni-orange font-bold text-xs">
                                  {achievement.ranking}
                                </p>
                                <h4 className="font-bold text-xs">
                                  {achievement.name}
                                </h4>
                              </div>
                            </div>

                            <div className="w-full flex flex-col items-start gap-1">
                              <span className="text-xs">
                                {achievement.year}
                              </span>
                              <h3 className="font-bold text-xs">
                                {achievement.location}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
              </Carousel>
            </div>
          </article>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export { CompetitionList };
export type { Achievement };
