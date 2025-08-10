import { History } from "@/components/about-us/History";
import { ChevronDownCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <section className="text-center relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            src="/about_us_hero.jpg"
            alt="Nogogeni V Evo"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-xs space-y-4">
          <h1 className="uppercase flex flex-col">
            <span className="font-bold">Nogogeni History</span>{" "}
            <span className="font-extrabold text-3xl">The Journey Begins</span>
          </h1>

          <Link
            href="/about-us#history"
            className="text-sm font-semibold flex justify-center items-center gap-2 tablet:text-base tablet:gap-3 desktop:hidden"
          >
            <ChevronDownCircleIcon />
          </Link>
        </div>
      </section>

      <History />
    </>
  );
}
