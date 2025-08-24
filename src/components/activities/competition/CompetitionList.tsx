import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { CompetitionItem } from "./CompetitionItem";

type Competition =
  | "kmhe"
  | "sem_asia"
  | "fsae"
  | "pln_ice"
  | "teknofest_tubitak";

const competitions = new Map<
  Competition,
  {
    name: string;
    description: string;
    imgPath: string;
  }
>();

competitions.set("kmhe", {
  name: "Kontes Mobil Hemat Energi",
  description:
    "KMHE or Kontes Mobil Hemat Energi is an annual competition organized by the Pusat Prestasi Nasional (Puspresnas) of the Ministry of Education, Culture, Research and Technology (Kemdikbud Ristek). Republic of Indonesia. KMHE is a prestigious competition that focuses on energy-efficient vehicles. It serves as a platform for universities across Indonesia to showcase their innovations in sustainable transportation.",
  imgPath: "/activities/kmhe_logo.png",
});

competitions.set("sem_asia", {
  name: "Shell Eco-Marathon Asia (SEM Asia)",
  description:
    "Shell Eco-Marathon Asia is an international competition that invites students from around the world to design, build, and drive the most energy-efficient vehicles. The competition features two main categories: Prototype and Urban Concept. Nogogeni ITS has participated in the Battery Electric Urban Concept Category, which focuses on creating practical, efficient vehicles for future urban mobility.",
  imgPath: "/activities/sem_asia_logo.png",
});

competitions.set("fsae", {
  name: "Formula Society of Automotive Engineers",
  description:
    "Formula Society of Automotive Engineers (FSAE Australasia) FSAE Australasia is a prestigious motorsport engineering competition where students create small, formula-style racing cars. Teams are judged not only on their vehicle’s performance on track but also on their engineering design, cost analysis, and business presentation, making it a holistic test of engineering and management skills.",
  imgPath: "/activities/fsae_logo.png",
});

competitions.set("pln_ice", {
  name: "PLN Innovation and Competition in Electricity",
  description:
    "PLN ICE is a national-level competition organized by PT PLN (Persero) to foster innovation in energy and technology. The event includes various categories, such as the development of electric-powered motorcycles and go-karts, encouraging students to create practical solutions for future mobility. Nogogeni ITS has taken part in this competition, presenting student-designed electric vehicles.",
  imgPath: "/activities/pln_ice_logo.png",
});

competitions.set("teknofest_tubitak", {
  name: "TEKNOFEST TÜBİTAK",
  description:
    "TEKNOFEST TÜBİTAK is one of the world's largest technology and innovation festivals, held in Turkey. The event brings together students, researchers, and innovators to compete in areas ranging from aerospace and robotics to energy and sustainable transportation. Nogogeni ITS has represented Indonesia at TEKNOFEST, showcasing vehicle innovations on an international stage.",
  imgPath: "/activities/teknofest_logo.png",
});

function CompetitionList() {
  const [competition, setCompetition] = useState<Competition>("kmhe");

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
        <CompetitionItem
          name={selectedCompetition.name}
          description={selectedCompetition.description}
          imgPath={selectedCompetition.imgPath}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export { CompetitionList };
