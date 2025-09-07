import Image from "next/image";
import { Division } from "./DivisionList";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function determineImageStyle(imgPath: string): string {
  switch (imgPath) {
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/safira.png":
      return "scale-300 translate-y-10 group-hover:scale-350 desktop:translate-y-12";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/aji.png":
      return "scale-250 translate-y-12 -translate-x-2 group-hover:scale-300 desktop:translate-y-14";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/saputra.png":
      return "scale-200 translate-y-44 group-hover:scale-225 desktop:translate-y-60";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/roland.png":
      return "scale-200 translate-y-44 group-hover:scale-225 desktop:translate-y-60";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/rahadi.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/bagas.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/devin.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/rizki.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/anung.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/azrul.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/raihan.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/cahyo.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/rayhana.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/rifqi.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/timothy.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/mahendra.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/andika.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/randah.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/fery.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/yardan.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/kumara.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/hafiz.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/zaky.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/jeremi.png":
      return "scale-175 translate-y-28 group-hover:scale-200 desktop:translate-y-32";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/finna.png":
      return "scale-250 -translate-y-6 group-hover:scale-300";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/tepy.png":
      return "scale-250 translate-y-4 group-hover:scale-300";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/putri.png":
      return "scale-250 -translate-y-6 group-hover:scale-300";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/fadad.png":
      return "scale-250 translate-y-8 group-hover:scale-300 desktop:translate-y-10";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/rafif.png":
      return "scale-250 translate-y-4 group-hover:scale-300 desktop:translate-y-6";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/rajendra.png":
      return "scale-250 translate-y-10 group-hover:scale-300 desktop:translate-y-12";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/firmansyah.png":
      return "scale-250 translate-y-14 group-hover:scale-300 desktop:translate-y-20";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/bintang.png":
      return "scale-115 translate-y-10 group-hover:scale-135 desktop:translate-y-12";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/danta.png":
      return "scale-115 translate-y-10 group-hover:scale-135 desktop:translate-y-12";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/fadhli.png":
      return "scale-115 translate-y-10 group-hover:scale-135";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/duffania.png":
      return "scale-175 translate-y-36 group-hover:scale-200 desktop:translate-y-48";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/zafia.png":
      return "scale-175 translate-y-36 group-hover:scale-200 desktop:translate-y-48";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/thania.png":
      return "scale-175 translate-y-36 group-hover:scale-200 desktop:translate-y-48";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/ervika.png":
      return "scale-275 translate-y-8 -translate-x-8 group-hover:scale-325";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/sheren.png":
      return "scale-275 translate-y-8 group-hover:scale-325";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/afrah.png":
      return "scale-275 translate-y-4 group-hover:scale-325 desktop:translate-y-0";
    case "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/our-team/dita.png":
      return "scale-275 translate-y-8 group-hover:scale-325";
    default:
      return "";
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
          <TeamCard
            key={team.name}
            name={team.name}
            imgPath={team.imgPath}
            linkedInURL={team.linkedInURL}
            position={team.position}
          />
        ))}
      </ul>
    </div>
  );
}

function TeamCard({
  name,
  imgPath,
  linkedInURL,
  position,
}: Division["teams"][number]) {
  const ref = useRef<HTMLAnchorElement>(null);

  const hoverCard = () => {
    if (ref.current) {
      ref.current.focus({ preventScroll: true });
    }
  };

  const unhoverCard = () => {
    if (ref.current) {
      ref.current.blur();
    }
  };

  const clickCard = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <li
      onMouseEnter={hoverCard}
      onMouseLeave={unhoverCard}
      onClick={clickCard}
      className="group cursor-pointer w-64 space-y-2 desktop:w-80 desktop:space-y-4"
    >
      <div className="bg-linear-to-t from-nogogeni-red to-nogogeni-orange relative overflow-hidden rounded-md w-64 h-72 desktop:w-80 desktop:h-96">
        <Image
          fill
          src={imgPath}
          alt={name}
          className={`${determineImageStyle(
            imgPath
          )} transition-all duration-300 object-contain object-center`}
        />
        <div className="absolute bottom-0 top-1/2 left-0 right-0 bg-linear-to-t from-nogogeni-red to-transparent" />
      </div>

      <div className="flex flex-col items-start h-16 desktop:h-24 desktop:space-y-1">
        <div className="w-full flex justify-between gap-4">
          <h3 className="desktop:text-2xl">{name}</h3>
          <Link
            ref={ref}
            href={linkedInURL}
            target="_blank"
            rel="noopener"
            className="focus:outline-none"
          >
            <ArrowUpRightIcon className="text-nogogeni-orange size-8 group-hover:rotate-45 transition-all duration-300" />
            <span className="sr-only">View LinkedIn</span>
          </Link>
        </div>
        <span className="text-nogogeni-white/90 text-xs desktop:text-sm">
          {position}
        </span>
      </div>
    </li>
  );
}

export { DivisionItem };
