import { ChevronDownCircleIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const externalActivities = [
  {
    name: "PEVS Jakarta",
    description:
      "For the past three years, we have joined the Periklindo Electric Vehicle Show (PEVS) in Jakarta, showcasing our innovations in electric mobility, connecting with industry leaders, and engaging the public on cleaner, smarter transportation solutions.",
    imgPath: "/activities/pevs_jakarta.jpg",
  },
  {
    name: "IIMS Surabaya",
    description:
      "We have taken part in the Indonesia International Motor Show (IIMS) in Surabaya, presenting our latest breakthroughs in electric vehicle technology. This event has served as a valuable stage to interact with automotive enthusiasts, collaborate with industry players, and promote the vision of sustainable, future-ready mobility.",
    imgPath: "/activities/iims_surabaya.jpg",
  },
  {
    name: "GIIAS Surabaya",
    description:
      "We have participated in the GAIKINDO Indonesia International Auto Show (GIIAS) in Surabaya, showcasing our advancements in electric vehicle technology. Through this event, we have engaged with automotive communities, built industry connections, and promoted sustainable mobility innovations to a wider audience.",
    imgPath: "/activities/giias_surabaya.jpg",
  },
];

const internalActivities = [
  {
    name: "Launching",
    description:
      "Each year, we host a launching event to unveil our latest vehicle innovations, celebrate months of hard work, and share our vision with partners, sponsors, and the public, reinforcing our commitment to sustainable mobility.",
    imgPath: "/activities/launching.jpg",
  },
  {
    name: "Commtech",
    description:
      "CommTECH Camp is an international program that invites students, academics, and professionals to explore community and global issues through courses, cultural activities, site visits, and community engagement, while experiencing Indonesia’s rich heritage and ITS’s expertise in technology for society.",
    imgPath: "/activities/commtech.png",
  },
  {
    name: "ITS Big Event",
    description:
      "Each year, we take part in ITS events such as GERIGI ITS, UKM Expo, and departmental activities to introduce our team, showcase achievements, inspire future members, and strengthen our presence within the campus community.",
    imgPath: "/activities/its_big_event.jpg",
  },
];

export default function InternalAndExternal() {
  return (
    <>
      <Head>
        <title>Nogogeni - Internal & External Activities</title>
        <meta
          name="description"
          content="View our current activities and collaborative projects with partners and community organizations."
        />

        <meta
          property="og:title"
          content="Nogogeni - Internal & External Activities"
        />
        <meta
          property="og:description"
          content="View our current activities and collaborative projects with partners and community organizations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.nogogeniits.com/activities/internal-and-external"
        />

        <meta
          property="twitter:title"
          content="Nogogeni - Internal & External Activities"
        />
        <meta
          property="twitter:description"
          content="View our current activities and collaborative projects with partners and community organizations."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.ico" />
        <meta
          property="twitter:url"
          content="https://www.nogogeniits.com/activities/internal-and-external"
        />
        <meta property="twitter:domain" content="nogogeniits.com" />
      </Head>

      <section className="text-center relative mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            priority
            src="/activities/hero.png"
            alt="Nogogeni Team"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm space-y-4 px-8 desktop:max-w-6xl desktop:space-y-6">
          <h1 className="font-extrabold text-3xl desktop:text-[64px]">
            Connecting Through{" "}
            <span className="leading-snug border-b-4 border-b-nogogeni-orange">
              Action
            </span>
            , Growing Through{" "}
            <span className="leading-snug border-b-4 border-b-nogogeni-orange">
              Collaboration
            </span>
          </h1>

          <Link
            href="/activities/internal-and-external#activities"
            className="flex justify-center items-center"
          >
            <ChevronDownCircleIcon className="size-8 desktop:size-12" />
            <span className="sr-only">
              View Our Internal and External Activities
            </span>
          </Link>
        </div>
      </section>

      <section
        id="activities"
        className="bg-nogogeni-black w-full mx-auto pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:max-w-7xl desktop:px-0 desktop:pt-32"
      >
        <h2 className="font-extrabold text-center text-3xl mb-8 desktop:text-[64px] desktop:mb-16">
          External Activities
        </h2>

        <div className="flex flex-col gap-8 desktop:flex-row">
          {externalActivities.map((activity) => (
            <article
              key={activity.imgPath}
              className="relative overflow-hidden rounded-tr-3xl rounded-bl-3xl w-full mx-auto max-w-xs tablet:max-w-sm"
            >
              <h3 className="absolute z-10 top-[calc(160px-16px)] left-1/2 -translate-x-1/2 rounded-tr-2xl rounded-bl-2xl text-nowrap bg-linear-to-r from-nogogeni-black to-nogogeni-orange font-bold text-xl px-6 py-0.5 tablet:top-[calc(192px-16px)] desktop:top-[calc(192px-18px)] desktop:text-2xl">
                {activity.name}
              </h3>
              <div className="relative w-full h-40 tablet:h-48">
                <Image
                  fill
                  src={activity.imgPath}
                  alt={activity.name}
                  className="object-cover object-center"
                />
              </div>
              <p className="bg-nogogeni-white text-nogogeni-black text-justify text-sm py-8 px-6 tablet:text-base desktop:h-[280px]">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-nogogeni-black w-full mx-auto py-16 px-8 tablet:px-16 tablet:py-24 desktop:max-w-7xl desktop:px-0 desktop:py-32">
        <h2 className="font-extrabold text-center text-3xl mb-8 desktop:text-[64px] desktop:mb-16">
          Internal Activities
        </h2>

        <div className="flex flex-col gap-8 desktop:flex-row">
          {internalActivities.map((activity) => (
            <article
              key={activity.imgPath}
              className="relative overflow-hidden rounded-tr-3xl rounded-bl-3xl w-full mx-auto max-w-xs tablet:max-w-sm"
            >
              <h3 className="absolute z-10 top-[calc(160px-16px)] left-1/2 -translate-x-1/2 rounded-tr-2xl rounded-bl-2xl text-nowrap bg-linear-to-r from-nogogeni-black to-nogogeni-orange font-bold text-xl px-6 py-0.5 tablet:top-[calc(192px-16px)] desktop:top-[calc(192px-18px)] desktop:text-2xl">
                {activity.name}
              </h3>
              <div className="relative w-full h-40 tablet:h-48">
                <Image
                  fill
                  src={activity.imgPath}
                  alt={activity.name}
                  className="object-cover object-center"
                />
              </div>
              <p className="bg-nogogeni-white text-nogogeni-black text-justify text-sm py-8 px-6 tablet:text-base desktop:h-[280px]">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
