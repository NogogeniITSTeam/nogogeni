import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const competitions = [
  {
    name: "Ethanol Urban Concept",
    result: "2nd Place KMHE",
    location: "Ancol Circuit, Jakarta",
    imgPath: "/home/second_place_kmhe.jpg",
    year: 2024,
  },
  {
    name: "Electric Urban Concept",
    result: "2nd Place KMHE",
    location: "Ancol Circuit, Jakarta",
    imgPath: "/home/kmhe_second_place.png",
    year: 2024,
  },
  {
    name: "Go-Kart Design",
    result: "3rd Place PLN ICE",
    location: "Sentul International Circuit, Bogor",
    imgPath: "/home/pln_ice.jpg",
    year: 2024,
  },
];

function Competition() {
  return (
    <section className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange px-8 py-6 tablet:px-16 tablet:py-12 desktop:px-32 desktop:py-16">
      <h2 className="font-extrabold text-center text-2xl mb-2 tablet:text-3xl tablet:mb-3 desktop:text-[64px] desktop:mb-4">
        Winner&apos;s Podium
      </h2>

      <p className="font-medium text-center mx-auto text-sm max-w-72 tablet:text-base tablet:max-w-96 desktop:text-2xl desktop:max-w-xl">
        Marking over a decade of continuous podium finishes at competition
      </p>

      <ul className="flex items-center flex-col gap-8 my-8 tablet:flex-row tablet:justify-center desktop:my-10">
        {competitions.map((competition, index) => (
          <li
            key={`${competition.name},${index}`}
            className="group relative overflow-hidden aspect-4/5 w-full rounded-lg max-w-3xs px-3 py-2 desktop:max-w-80 desktop:px-6 desktop:py-4"
          >
            <Badge className="border-none rounded-none bg-linear-to-r from-nogogeni-orange to-nogogeni-red absolute z-10 top-2 right-3 tablet:text-base desktop:top-4 desktop:right-6">
              {competition.year}
            </Badge>

            <Image
              fill
              src={competition.imgPath}
              alt={`${competition.result} in ${competition.name}`}
              className="object-cover object-center group-hover:scale-125 duration-300"
            />

            <div className="flex flex-col gap-1 absolute z-10 bottom-2 left-3 desktop:bottom-4 desktop:left-6">
              <h3 className="font-medium text-sm desktop:text-2xl">
                {competition.result}
              </h3>
              <p className="text-xs desktop:text-sm">
                {competition.name} <br />
                <span>{competition.location}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Button
          asChild
          variant="secondary"
          size="small"
          className="tablet:hidden"
        >
          <Link href="/activities/competition">More Achievement</Link>
        </Button>

        <Button
          asChild
          variant="secondary"
          size="medium"
          className="hidden tablet:inline-flex"
        >
          <Link href="/activities/competition">More Achievement</Link>
        </Button>
      </div>
    </section>
  );
}

export { Competition };
