import { ChevronDownCircleIcon } from "lucide-react";
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
      <section className="text-center relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            src="/activities/hero.png"
            alt="Nogogeni Team"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm space-y-4 px-8 desktop:max-w-3xl desktop:space-y-6">
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
          </Link>
        </div>
      </section>

      <section
        id="activities"
        className="bg-nogogeni-black py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32"
      >
        <h2 className="font-extrabold text-center text-3xl mb-8">
          External Activities
        </h2>

        <div className="flex flex-col gap-8">
          {externalActivities.map((activity) => (
            <article
              key={activity.imgPath}
              className="relative overflow-hidden rounded-tr-3xl rounded-bl-3xl w-full mx-auto max-w-64"
            >
              <h3 className="absolute z-10 top-[calc(128px-16px)] left-1/2 -translate-x-1/2 rounded-tr-2xl rounded-bl-2xl text-nowrap bg-linear-to-r from-nogogeni-black to-nogogeni-orange font-bold text-xl px-6 py-0.5">
                {activity.name}
              </h3>
              <div className="relative w-full h-32">
                <Image
                  fill
                  src={activity.imgPath}
                  alt={activity.name}
                  className="object-cover object-center"
                />
              </div>
              <p className="bg-nogogeni-white text-nogogeni-black text-justify text-xs py-8 px-6">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-nogogeni-black py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32">
        <h2 className="font-extrabold text-center text-3xl mb-8">
          Internal Activities
        </h2>

        <div className="flex flex-col gap-8">
          {internalActivities.map((activity) => (
            <article
              key={activity.imgPath}
              className="relative overflow-hidden rounded-tr-3xl rounded-bl-3xl w-full mx-auto max-w-64"
            >
              <h3 className="absolute z-10 top-[calc(128px-16px)] left-1/2 -translate-x-1/2 rounded-tr-2xl rounded-bl-2xl text-nowrap bg-linear-to-r from-nogogeni-black to-nogogeni-orange font-bold text-xl px-6 py-0.5">
                {activity.name}
              </h3>
              <div className="relative w-full h-32">
                <Image
                  fill
                  src={activity.imgPath}
                  alt={activity.name}
                  className="object-cover object-center"
                />
              </div>
              <p className="bg-nogogeni-white text-nogogeni-black text-justify text-xs py-8 px-6">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
