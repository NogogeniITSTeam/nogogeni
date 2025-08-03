import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";
import Image from "next/image";

const sponsors = [
  { company: "Pertamina Lubricants", imgPath: "/pertamina_lubricants.png" },
  { company: "Chempo Site Store", imgPath: "/chempo.png" },
  { company: "SKK Migas", imgPath: "/skkmigas.png" },
  { company: "PT Tritunggal Swarna", imgPath: "/tritunggal.png" },
  { company: "HKA", imgPath: "/hka.png" },
  { company: "CPT", imgPath: "/cpt.png" },
  {
    company: "Swanaya Prisadi Indonesia",
    imgPath: "/spi.png",
  },
  { company: "Telkom Indonesia", imgPath: "/telkom.png" },
  { company: "Grab", imgPath: "/grab.png" },
  { company: "Padang Cement Indonesia", imgPath: "/padang.png" },
  { company: "Spectrum", imgPath: "/spectrum.png" },
  { company: "BSS Original Exhaust", imgPath: "/bss.png" },
  { company: "Print & Print", imgPath: "/print.png" },
  { company: "Better Luck Project", imgPath: "/better.png" },
  {
    company: "Husky-CNOOC Madura Limited",
    imgPath: "/hcml.png",
  },
  { company: "Kangean Energy Indonesia", imgPath: "/kangean.png" },
  { company: "Medco Energi", imgPath: "/medco.png" },
  { company: "Pertamina PHE WMO", imgPath: "/pertamina_phe_wmo.png" },
  { company: "Petronas", imgPath: "/petronas.png" },
  { company: "Pertamna EP", imgPath: "/pertamina_ep.png" },
  { company: "PGN Saka", imgPath: "/pgn.png" },
  { company: "PT Petrokimia Gresik", imgPath: "/petrokimia.png" },
];

function Sponsor() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (carouselApi) {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
      carouselApi.on("select", () => {
        setCurrent(carouselApi.selectedScrollSnap() + 1);
      });
    }
  }, [carouselApi]);

  return (
    <section className="bg-nogogeni-white px-8 py-6">
      <h2 className="text-nogogeni-black text-center text-xl mb-6">
        <span className="font-bold">Supported by 50+</span>
        <br />
        companies from the beginning
      </h2>

      <Link
        href="/sponsor"
        className="bg-nogogeni-orange hover:bg-nogogeni-red active:inset-shadow-md transition-all text-sm font-medium text-nogogeni-white px-3 py-2 rounded-full block w-32 text-center mx-auto mb-4"
      >
        Our Sponsor
      </Link>

      <div className="px-4">
        <Carousel setApi={setCarouselApi}>
          <CarouselContent>
            {sponsors.map((sponsor) => (
              <CarouselItem key={sponsor.company} className="basis-1/2 pl-0">
                <div className="relative w-32 h-32">
                  <Image
                    fill
                    src={sponsor.imgPath}
                    alt={sponsor.company}
                    className="object-contain object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-nogogeni-orange hover:bg-nogogeni-red -left-8 size-6 [&_svg]:text-nogogeni-white [&_svg]:w-4 [&_svg]:h-4" />
          <CarouselNext className="bg-nogogeni-orange hover:bg-nogogeni-red -right-8 size-6 [&_svg]:text-nogogeni-white [&_svg]:w-4 [&_svg]:h-4" />
        </Carousel>
      </div>
    </section>
  );
}

export { Sponsor };
