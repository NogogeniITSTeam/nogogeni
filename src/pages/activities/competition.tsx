import { CompetitionList } from "@/components/activities/competition/CompetitionList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const achievements = [
  {
    name: "Years of Active Innovation",
    value: "13+",
  },
  {
    name: "Different Vehicle Generations",
    value: "8+",
  },
  {
    name: "Podium Titles",
    value: "20+",
  },
];

export default function Competition() {
  return (
    <>
      <section className="relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            src="/about-us/history_12.jpg"
            alt="First Place in KMHE Urban Motor Electric Category 188,69 Km/Kwh"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm space-y-8 px-8 tablet:max-w-lg tablet:px-0 desktop:max-w-6xl desktop:space-y-12">
          <h1 className="text-center font-bold text-3xl desktop:text-[64px]">
            The Only Team in Indonesia Who Achieve{" "}
            <span className="text-nogogeni-orange">a Quintrick Victory</span> in
            KMHE Urban Electric Category
          </h1>

          <ul className="flex flex-col gap-6 tablet:flex-row tablet:justify-between">
            {achievements.map((achievement) => (
              <li className="text-center w-full mx-auto flex flex-col gap-1 max-w-36 tablet:max-w-64">
                <span className="text-nogogeni-orange font-extrabold text-3xl desktop:text-[64px]">
                  {achievement.value}
                </span>
                <p className="font-bold desktop:text-2xl">{achievement.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <article className="bg-nogogeni-black pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
        <p className="text-justify w-full mx-auto max-w-lg text-sm tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
          Nogogeni ITS Team has consistently proven its excellence in
          energy-efficient automotive competitions, both nationally and
          internationally. Our journey is a combination of engineering
          precision, teamwork, and national pride.
        </p>
      </article>

      <CompetitionList />
    </>
  );
}
