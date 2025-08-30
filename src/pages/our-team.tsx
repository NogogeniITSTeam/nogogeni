import { DivisionList } from "@/components/our-team/DivisionList";
import { ChevronDownCircleIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  return (
    <>
      <Head>
        <title>Nogogeni - Our Team</title>
        <meta
          name="description"
          content="The people behind Nogogeni ITS that work together to design, build, and develop energy-efficient vehicles."
        />

        <meta property="og:title" content="Nogogeni - Our Team" />
        <meta
          property="og:description"
          content="The people behind Nogogeni ITS that work together to design, build, and develop energy-efficient vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.nogogeniits.com/our-team"
        />

        <meta property="twitter:title" content="Nogogeni - Our Team" />
        <meta
          property="twitter:description"
          content="The people behind Nogogeni ITS that work together to design, build, and develop energy-efficient vehicles."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.ico" />
        <meta
          property="twitter:url"
          content="https://www.nogogeniits.com/our-team"
        />
        <meta property="twitter:domain" content="nogogeniits.com" />
      </Head>

      <section className="text-center relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            src="/our-team/hero.jpg"
            alt="Nogogeni Team"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm space-y-4 desktop:max-w-3xl desktop:space-y-6">
          <h1 className="uppercase flex flex-col">
            <span className="font-bold desktop:text-2xl">Meet Our Team</span>{" "}
            <span className="font-extrabold text-3xl desktop:text-[64px]">
              Behind The Garage
            </span>
          </h1>

          <Link
            href="/our-team#description"
            className="flex justify-center items-center"
          >
            <ChevronDownCircleIcon className="tablet:size-8 desktop:size-12" />
          </Link>
        </div>
      </section>

      <article
        id="description"
        className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32"
      >
        <div className="relative w-full mx-auto max-w-[512px] tablet:max-w-xl desktop:max-w-4xl">
          <div className="absolute -top-12 -left-12">
            <Image src="/star.png" alt="" width={128} height={128} />
            <div className="bg-nogogeni-black/85 absolute inset-0 -translate-x-8 -translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
          </div>

          <p className="relative z-10 text-justify text-sm tablet:text-base desktop:text-2xl">
            Let&apos;s introduce the people behind Nogogeni ITS. we work
            together to design, build, and develop energy-efficient vehicles.
            The team is divided into managers, finance, technical, and
            non-technical divisions, all working hand in hand to achieve our
            goals{" "}
            <span className="text-nogogeni-orange font-bold">#juarasatu</span>
          </p>

          <div className="absolute -bottom-12 -right-12">
            <Image src="/star.png" alt="" width={128} height={128} />
            <div className="bg-nogogeni-black/85 absolute inset-0 translate-x-8 translate-y-8 w-32 h-32 rounded-full blur-xl"></div>
          </div>
        </div>
      </article>

      <DivisionList />
    </>
  );
}
