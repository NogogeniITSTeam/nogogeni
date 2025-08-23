import Image from "next/image";
import { Division } from "./DivisionList";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

function determineImageStyle(imgPath: string): string {
  switch (imgPath) {
    case "/our-team/safira.png":
      return "scale-300 translate-y-8";
    case "/our-team/aji.png":
      return "scale-250 translate-y-12";
    case "/our-team/saputra.png":
      return "scale-200 translate-y-36 desktop:translate-y-48";
    case "/our-team/roland.png":
      return "scale-200 translate-y-36 desktop:translate-y-48";
    case "/our-team/rahadi.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/bagas.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/devin.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/rizki.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/anung.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/azrul.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/raihan.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/dionisius.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/cahyo.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/rayhana.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/rifqi.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/timothy.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/mahendra.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/andika.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/randah.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/fery.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/yardan.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/kumara.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/hafiz.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/zaky.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/jeremi.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/finna.png":
      return "scale-250 -translate-y-6";
    case "/our-team/tepy.png":
      return "scale-250 translate-y-4";
    case "/our-team/putri.png":
      return "scale-250 -translate-y-6";
    case "/our-team/fadad.png":
      return "scale-250 translate-y-4";
    case "/our-team/rafif.png":
      return "scale-250 translate-y-4 desktop:translate-y-0";
    case "/our-team/rajendra.png":
      return "scale-250 translate-y-6";
    case "/our-team/firmansyah.png":
      return "scale-250 translate-y-12";
    case "/our-team/bintang.png":
      return "scale-115 translate-y-8";
    case "/our-team/danta.png":
      return "scale-115 translate-y-8";
    case "/our-team/fadhli.png":
      return "scale-115 translate-y-8";
    case "/our-team/duffania.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/zafia.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/thania.png":
      return "scale-175 translate-y-28 desktop:translate-y-36";
    case "/our-team/ervika.png":
      return "scale-275 translate-y-8 -translate-x-8";
    case "/our-team/sheren.png":
      return "scale-275 translate-y-8";
    case "/our-team/afrah.png":
      return "scale-275 translate-y-4 desktop:translate-y-0";
    case "/our-team/dita.png":
      return "scale-275 translate-y-8";

    default:
      return "";
      break;
  }
}

interface DivisionItemProps {
  division: Division;
}

function DivisionItem({ division }: DivisionItemProps) {
  return (
    <div className="mb-16">
      <h2 className="text-center font-bold text-3xl mb-8 desktop:text-[64px] desktop:mb-16">
        {division.name}
      </h2>
      <ul className="flex flex-col items-center gap-8 tablet:flex-wrap tablet:flex-row tablet:justify-center">
        {division.teams.map((team) => (
          <li
            key={team.name}
            className="w-64 space-y-2 desktop:w-80 desktop:space-y-4"
          >
            <div className="bg-linear-to-br from-nogogeni-red to-nogogeni-orange relative overflow-hidden rounded-md aspect-square mx-auto h-64 desktop:h-80">
              <Image
                fill
                src={team.imgPath}
                alt={team.name}
                className={`${determineImageStyle(
                  team.imgPath
                )} object-contain object-center`}
              />
              <div className="absolute bottom-0 top-1/2 left-0 right-0 bg-linear-to-t from-nogogeni-red to-transparent" />
            </div>

            <div className="flex flex-col items-start h-16 desktop:h-24 desktop:space-y-1">
              <div className="w-full flex justify-between gap-4">
                <h3 className="desktop:text-2xl">{team.name}</h3>
                <Link href={team.linkedInURL} target="_blank" rel="noopener">
                  <ArrowUpRightIcon className="text-nogogeni-orange size-8" />
                  <span className="sr-only">View LinkedIn</span>
                </Link>
              </div>
              <span className="text-nogogeni-white/90 text-xs desktop:text-sm">
                {team.position}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { DivisionItem };
