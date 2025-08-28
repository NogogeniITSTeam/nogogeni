import { News } from "@/pages/activities/newsroom";
import Image from "next/image";
import { useRef } from "react";

interface NewsCardProps extends News {
  newsType: string;
}

function NewsCard({
  articleURL,
  date,
  imgPath,
  newsType,
  title,
}: NewsCardProps) {
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
    <div
      onMouseEnter={hoverCard}
      onMouseLeave={unhoverCard}
      onClick={clickCard}
      className="w-full mx-auto max-w-64 tablet:max-w-sm"
    >
      <div className="cursor-pointer relative w-full h-40 tablet:h-56">
        <Image
          fill
          src={imgPath}
          alt={title}
          className="object-cover object-center"
        />
      </div>

      <div className="w-full flex justify-between items-center gap-2 mt-2 mb-4">
        <span className="text-nogogeni-orange shrink-0 text-xs tablet:text-sm">
          {date}
        </span>
        <span className="bg-nogogeni-orange w-full h-[1px]"></span>
        <span className="text-nogogeni-orange shrink-0 capitalize text-xs tablet:text-sm">
          {newsType}
        </span>
      </div>

      <h2 className="cursor-pointer font-bold text-sm tablet:text-base">
        {title}
      </h2>

      <a
        ref={ref}
        href={articleURL}
        target="_blank"
        rel="noopener"
        className="sr-only"
      >
        {title}
      </a>
    </div>
  );
}

export { NewsCard };
