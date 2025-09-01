import { History } from "@/components/about-us/History";
import { HomeBase } from "@/components/about-us/HomeBase";
import { Pattern } from "@/components/icons/Pattern";
import { WhiteBlurredStar } from "@/components/icons/WhiteBlurredStar";
import { ChevronDownCircleIcon, ChevronRightIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Nogogeni - About Us</title>
        <meta
          name="description"
          content="Nogogeni ITS Team was established in 2011. The team originated from a final project by a student from the 2009-2010 cohort of the Diploma III in Industrial Mechanical Engineering at ITS."
        />

        <meta property="og:title" content="Nogogeni - About Us" />
        <meta
          property="og:description"
          content="Nogogeni ITS Team was established in 2011. The team originated from a final project by a student from the 2009-2010 cohort of the Diploma III in Industrial Mechanical Engineering at ITS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.nogogeniits.com/about-us"
        />

        <meta property="twitter:title" content="Nogogeni - About Us" />
        <meta
          property="twitter:description"
          content="Nogogeni ITS Team was established in 2011. The team originated from a final project by a student from the 2009-2010 cohort of the Diploma III in Industrial Mechanical Engineering at ITS."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.ico" />
        <meta
          property="twitter:url"
          content="https://www.nogogeniits.com/about-us"
        />
        <meta property="twitter:domain" content="nogogeniits.com" />
      </Head>

      <section className="text-center relative mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            priority
            src="/about-us/hero.jpg"
            alt="Nogogeni V Evo"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm space-y-4 desktop:max-w-3xl desktop:space-y-6">
          <h1 className="uppercase flex flex-col">
            <span className="font-bold desktop:text-2xl">Nogogeni History</span>{" "}
            <span className="font-extrabold text-3xl desktop:text-[64px]">
              The Journey Begins
            </span>
          </h1>

          <Link
            href="/about-us#history"
            className="flex justify-center items-center"
          >
            <ChevronDownCircleIcon className="tablet:size-8 desktop:size-12" />
            <span className="sr-only">Learn Our History</span>
          </Link>
        </div>
      </section>

      <History />

      <article className="bg-nogogeni-black relative w-fit mx-auto py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32">
        <Pattern className="scale-x-[-1] w-32 absolute top-32 left-0 tablet:w-40 tablet:top-16 desktop:w-64 desktop:top-20" />

        <h2 className="font-extrabold text-center mx-auto max-w-lg text-3xl mb-8 desktop:max-w-5xl desktop:text-[64px] desktop:mb-12">
          Back to Where It All Started on the Race Track
        </h2>

        <p className="text-justify w-full mx-auto max-w-lg text-sm tablet:max-w-xl tablet:text-base desktop:max-w-5xl desktop:text-2xl">
          Since 2012, our team has continuously developed our vehicle designs,
          adapting to the evolving challenges and demands of each competition we
          join. This journey began to show results in 2013, when we achieved our
          first victory by winning 1st place in the Urban Electricity category
          at the Indonesia Energy Marathon Challenge (IEMC).
        </p>

        <Pattern className="w-16 absolute top-48 right-0 tablet:w-20 tablet:top-36 desktop:w-32 desktop:top-48" />
      </article>

      <section className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange px-8 py-6 tablet:px-16 tablet:py-12 desktop:px-32 desktop:py-16">
        <div className="w-full mx-auto max-w-7xl desktop:grid desktop:grid-cols-2 desktop:gap-16">
          <div className="group relative w-full mx-auto aspect-4/5 max-w-xs mb-8 tablet:aspect-5/4 tablet:max-w-xl desktop:max-w-full desktop:h-full">
            <div className="relative overflow-hidden w-full mx-auto aspect-4/5 max-w-xs mb-8 tablet:aspect-5/4 tablet:max-w-xl desktop:max-w-full desktop:h-full">
              <Image
                fill
                src="/about-us/first_place.png"
                alt="First place in Urban Electricity category at IEMC 2013"
                className="object-cover object-center group-hover:scale-125 duration-300"
              />
            </div>

            <div className="bg-black/50 absolute z-10 bottom-0 left-0 right-0 py-4">
              <div className="w-full mx-auto max-w-48 space-y-1 desktop:max-w-lg">
                <h3 className="font-bold">
                  Achieved 1st place in Urban Electricity category at IEMC 2013
                </h3>
                <p className="text-sm">Kenjeran Circuit, Surabaya</p>
              </div>
            </div>

            <WhiteBlurredStar className="absolute -left-8 top-16 w-16 h-16 tablet:w-20 tablet:h-20 tablet:-left-10 desktop:w-24 desktop:h-24 desktop:-left-12" />
          </div>

          <article className="w-full mx-auto max-w-lg space-y-3 tablet:max-w-xl tablet:space-y-4 desktop:max-w-full desktop:space-y-5">
            <p className="text-justify text-sm tablet:text-base desktop:text-2xl">
              We have consistently taken part in various national competitions
              such as IEMC, PLN Innovation and Competition in Electricity (PLN
              ICE), and Kontes Mobil Hemat Energi (KMHE). Through these events,
              we proudly recorded a milestone as the only team to secure five
              consecutive 1st place wins at KMHE.
            </p>

            <p className="text-justify text-sm tablet:text-base desktop:text-2xl">
              On the international stage, we have represented Indonesia in
              competitions such as the Shell Eco Marathon (SEM-Asia), the
              Formula Society of Automotive Engineers (FSAE-Australasia), and
              TÜBİTAK TEKNOFEST. These opportunities have allowed us to bring
              home several awards that mark our team&apos;s achievements in the
              field of energy-efficient vehicles.
            </p>
          </article>
        </div>
      </section>

      <article className="bg-nogogeni-black space-y-8 pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
        <p className="text-center w-full mx-auto max-w-xs text-sm tablet:text-base desktop:max-w-full desktop:text-2xl">
          In everything we do, we hold onto one powerful belief:
        </p>

        <h2 className="font-bold flex justify-center items-center gap-1 text-3xl desktop:text-[64px]">
          <span className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange bg-clip-text text-transparent">
            Work
          </span>{" "}
          <ChevronRightIcon className="size-12" />{" "}
          <span className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange bg-clip-text text-transparent">
            Pray
          </span>{" "}
          <ChevronRightIcon className="size-12" />
          <span className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange bg-clip-text text-transparent">
            Trust
          </span>
        </h2>

        <p className="text-justify mx-auto max-w-lg text-sm tablet:text-base desktop:max-w-4xl desktop:text-2xl">
          With every project, we commit to advancing sustainable vehicle
          research, inspiring thousands of students across generations, and
          proudly representing Indonesia on the global stage.
        </p>
      </article>

      <HomeBase />
    </>
  );
}
