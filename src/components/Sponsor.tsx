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
    <section className="bg-nogogeni-white text-center px-8 py-6">
      <h2 className="text-nogogeni-black text-xl mb-6">
        <span className="font-bold">Supported by 50+</span>
        <br />
        companies from the beginning
      </h2>

      <Button
        asChild
        type="button"
        size="sm"
        className="bg-nogogeni-orange text-nogogeni-white hover:bg-nogogeni-red active:inset-shadow-md cursor-pointer rounded-full"
      >
        <Link href="/sponsor">Our Sponsor</Link>
      </Button>

      <div className="px-4">
        <Carousel plugins={[Autoplay({ delay: 2000 })]}>
          <CarouselContent>
            {sponsors.map((sponsor) => (
              <CarouselItem key={sponsor.company} className="basis-1/2">
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
