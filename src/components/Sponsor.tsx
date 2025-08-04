import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";

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
  { company: "Better Luck Project", imgPath: "/betterluck.png" },
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
  return (
    <section className="bg-nogogeni-white text-center px-8 py-6 tablet:px-16 tablet:py-12 desktop:px-32 desktop:py-16">
      <h2 className="text-nogogeni-black text-xl mb-6 tablet:text-4xl tablet:mb-8 desktop:text-[64px] desktop:mb-12">
        <span className="font-bold">Supported by 50+</span>
        <br />
        companies from the beginning
      </h2>

      <Button
        asChild
        type="button"
        size="sm"
        className="bg-nogogeni-orange text-nogogeni-white hover:bg-nogogeni-red active:inset-shadow-md cursor-pointer rounded-full mb-6 px-6 desktop:mb-8"
      >
        <Link href="/sponsor">Our Sponsor</Link>
      </Button>

      <div className="px-8">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          opts={{ align: "start" }}
          className="w-full mx-auto max-w-[270px] tablet:max-w-[532px] desktop:max-w-[792px]"
        >
          <CarouselContent>
            {sponsors.map((sponsor) => (
              <CarouselItem
                key={sponsor.company}
                className="max-w-fit basis-1/2 tablet:pl-5 desktop:pl-6"
              >
                <div className="relative w-32 h-32 tablet:w-64 desktop:w-96">
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
          <CarouselPrevious className="bg-nogogeni-orange hover:bg-nogogeni-red hover:text-nogogeni-white size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-left-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-left-16 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8" />
          <CarouselNext className="bg-nogogeni-orange hover:bg-nogogeni-red hover:text-nogogeni-white size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-right-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-right-16 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8" />
        </Carousel>
      </div>
    </section>
  );
}

export { Sponsor };
