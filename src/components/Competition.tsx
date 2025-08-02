import Image from "next/image";
import { Badge } from "./ui/badge";

const competitions = [
  {
    name: "Ethanol Urban Concept",
    result: "2nd Place KMHE",
    location: "Ancol Circuit, Jakarta",
    imgPath: "/nogogeni_vii.png",
    year: 2024,
  },
  {
    name: "Ethanol Urban Concept",
    result: "2nd Place KMHE",
    location: "Ancol Circuit, Jakarta",
    imgPath: "/nogogeni_vii.png",
    year: 2024,
  },
  {
    name: "Go-Kart Design",
    result: "3rd Place PLN ICE",
    location: "Sentul International Circuit, Bogor",
    imgPath: "/nogogeni_vii.png",
    year: 2024,
  },
];

function Competition() {
  return (
    <section className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange px-8 py-6">
      <h2 className="text-nogogeni-white font-extrabold text-center text-3xl mb-2">
        Winner&apos;s Podium
      </h2>

      <p className="text-nogogeni-white font-medium text-center text-xs max-w-3xs mx-auto mb-8">
        Marking over a decade of continuous podium finishes at competition
      </p>

      <ul className="flex items-center gap-8 flex-col tablet:flex-row tablet:justify-center">
        {competitions.map((competition, index) => (
          <li
            key={`${competition.name},${index}`}
            className="group relative overflow-hidden aspect-4/5 w-full max-w-3xs px-3 py-2 rounded-lg tablet:basis-1/2 desktop:basis-1/3"
          >
            <Badge className="border-none rounded-none absolute z-10 top-2 right-3 bg-linear-to-r from-nogogeni-orange to-nogogeni-red text-nogogeni-white">
              {competition.year}
            </Badge>

            <Image
              fill
              src={competition.imgPath}
              alt={`${competition.result} in ${competition.name}`}
              className="object-cover object-center group-hover:scale-125 duration-300"
            />

            <div className="absolute z-10 bottom-2 left-3 flex flex-col gap-1">
              <h4 className="text-nogogeni-white font-medium text-sm">
                {competition.result}
              </h4>
              <p className="text-nogogeni-white text-xs">
                {competition.name} <br />
                <span>{competition.location}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { Competition };
