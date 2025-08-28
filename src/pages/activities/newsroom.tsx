import { NewsCard } from "@/components/activities/NewsCard";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

type NewsType = "achievement" | "article" | "event";
interface News {
  title: string;
  imgPath: string;
  date: string;
  articleURL: string;
}

const newsList = new Map<NewsType, News[]>();
newsList.set("achievement", [
  {
    title: "Tim Nogogeni ITS Kembali Raih Kemenangan di KMHE 2024",
    imgPath: "/home/second_place_kmhe.jpg",
    date: "15 Okt 2024",
    articleURL:
      "https://www.its.ac.id/stp/2024/10/15/tim-nogogeni-its-kembali-raih-kemenangan-di-kmhe-2024",
  },
  {
    title: "Tim Nogogeni ITS Meraih Juara di PLN ICE 2024",
    imgPath: "/home/pln_ice.jpg",
    date: "08 Nov 2024",
    articleURL:
      "https://www.its.ac.id/tmi/tim-nogogeni-its-meraih-juara-di-pln-ice-2024",
  },
  {
    title: "Tim Nogogeni ITS Raih Dua Prestasi di KMHE 2024",
    imgPath: "/about-us/history_13.jpg",
    date: "15 Okt 2024",
    articleURL:
      "https://mercuryfm.id/2024/10/11/tim-nogogeni-its-raih-dua-prestasi-di-kmhe-2024",
  },
]);

newsList.set("event", [
  {
    title: "Tim Nogogeni ITS Unjuk Inovasi di PEVS 2025",
    imgPath: "/activities/event_02_may_2025.jpg",
    date: "02 May 2025",
    articleURL:
      "https://www.tempo.co/prelude/tim-nogogeni-its-unjuk-inovasi-di-pevs-2025-1313598#goog_rewarded",
  },
  {
    title: "Kembali Unjuk Diri, Tim Nogogeni Hadir di IIMS Surabaya 2025",
    imgPath: "/activities/event_02_jun_2025.jpg",
    date: "02 Jun 2025",
    articleURL:
      "https://mediaindonesia.com/otomotif/778669/kembali-unjuk-diri-tim-nogogeni-hadir-di-iims-surabaya-2025",
  },
  {
    title:
      "Tim Nogogeni ITS Unjuk Diri di Periklindo Electric Vehicle Show 2024",
    imgPath: "/activities/event_06_may_2024.jpg",
    date: "06 May 2024",
    articleURL:
      "https://www.its.ac.id/news/2024/05/06/tim-nogogeni-its-unjuk-diri-di-periklindo-electric-vehicle-show-2024",
  },
]);

newsList.set("article", [
  {
    title:
      "Kenalkan Mobil Terbaru, Tim Nogogeni ITS Optimistis Juara di KMHE 2024",
    imgPath: "/activities/article_27_sep_2024.jpg",
    date: "27 Sep 2024",
    articleURL:
      "https://www.its.ac.id/news/2024/09/27/kenalkan-mobil-terbaru-tim-nogogeni-its-optimistis-juara-di-kmhe-2024",
  },
  {
    title: "Mobil Balap Listrik Nogogeni ITS Terus Melesat Bersama PT SIER",
    imgPath: "/activities/article_05_may_2024.jpg",
    date: "05 May 2024",
    articleURL:
      "https://www.detik.com/jatim/jatim-moncer/d-7326293/mobil-balap-listrik-nogogeni-its-terus-melesat-bersama-pt-sier",
  },
  {
    title:
      "CommTECH Camp Insight 2025 Stream 2: The Future of Zero-Emission Mobility",
    imgPath: "/activities/article_24_feb_2025.png",
    date: "24 Feb 2025",
    articleURL:
      "https://www.its.ac.id/tmi/commtech-camp-insight-2025-zero-emission-mobility",
  },
]);

export default function Newsroom() {
  const [newsType, setNewsType] = useState<NewsType>("achievement");

  const selectedNewsList = useMemo(() => {
    return newsList.get(newsType);
  }, [newsType]);

  const clickURL = (articleURL: string) => {
    const a = document.createElement("a");
    a.setAttribute("href", articleURL);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    a.click();
    a.remove();
  };

  return (
    <>
      <section className="bg-nogogeni-black w-full mx-auto py-16 px-8 mt-16 tablet:px-0 tablet:py-24 desktop:max-w-7xl desktop:py-32 desktop:mt-24">
        <h1 className="text-nogogeni-orange text-center font-extrabold text-3xl tablet:text-[64px]">
          News
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-6 my-12 tablet:my-16">
          <Button
            className={`${
              newsType === "achievement"
                ? "bg-nogogeni-white/50"
                : "bg-nogogeni-black"
            } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
            onClick={() => setNewsType("achievement")}
          >
            Achievement
          </Button>
          <Button
            className={`${
              newsType === "article"
                ? "bg-nogogeni-white/50"
                : "bg-nogogeni-black"
            } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
            onClick={() => setNewsType("article")}
          >
            Article
          </Button>
          <Button
            className={`${
              newsType === "event"
                ? "bg-nogogeni-white/50"
                : "bg-nogogeni-black"
            } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
            onClick={() => setNewsType("event")}
          >
            Event
          </Button>
        </div>

        {selectedNewsList ? (
          <div className="flex flex-col gap-8 tablet:flex-row tablet:flex-wrap">
            {selectedNewsList.map((news) => (
              <NewsCard
                key={news.articleURL}
                articleURL={news.articleURL}
                date={news.date}
                imgPath={news.imgPath}
                title={news.title}
                newsType={newsType}
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export type { News, NewsType };
