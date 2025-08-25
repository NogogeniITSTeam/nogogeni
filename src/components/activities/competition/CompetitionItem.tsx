import Image from "next/image";
import { useMemo } from "react";

interface CompetitionItemProps {
  name: string;
  description: string;
  imgPath: string;
}

function CompetitionItem({ name, description, imgPath }: CompetitionItemProps) {
  const imgColor = useMemo((): string => {
    if (
      imgPath === "/activities/pln_ice_logo.png" ||
      imgPath === "/activities/teknofest_logo.png"
    ) {
      return "bg-nogogeni-white";
    } else {
      return "";
    }
  }, [imgPath]);

  return (
    <article className="py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-center font-bold text-[28px] desktop:text-[56px]">
          {name}
        </h2>
        <div className="my-16 tablet:flex tablet:items-center tablet:gap-12 desktop:my-20 desktop:gap-16">
          <div className="shrink-0 relative mx-auto w-64 h-32tablet:w-80 tablet:h-40 desktop:w-md desktop:h-56">
            <Image
              fill
              src={imgPath}
              alt={name}
              className={`${imgColor} object-contain object-center`}
            />
          </div>
          <p className="text-justify w-full mx-auto max-w-lg text-sm tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export { CompetitionItem };
