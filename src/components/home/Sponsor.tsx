import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

const sponsors = [
  {
    company: "Pertamina Lubricants",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pertamina_lubricants.png",
  },
  {
    company: "Chempo Site Store",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/chempo.png",
  },
  {
    company: "SKK Migas",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/skkmigas.png",
  },
  {
    company: "PT Tritunggal Swarna",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/tritunggal.png",
  },
  {
    company: "HKA",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/hka.png",
  },
  {
    company: "CPT",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/cpt.png",
  },
  {
    company: "Swanaya Prisadi Indonesia",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/spi.png",
  },
  {
    company: "Telkom Indonesia",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/telkom.png",
  },
  {
    company: "Grab",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/grab.png",
  },
  {
    company: "Padang Cement Indonesia",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/padang.png",
  },
  {
    company: "Spectrum",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/spectrum.png",
  },
  {
    company: "BSS Original Exhaust",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/bss.png",
  },
  {
    company: "Print & Print",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/print.png",
  },
  {
    company: "Better Luck Project",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/betterluck.png",
  },
  {
    company: "Husky-CNOOC Madura Limited",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/hcml.png",
  },
  {
    company: "Kangean Energy Indonesia",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/kangean.png",
  },
  {
    company: "Medco Energi",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/medco.png",
  },
  {
    company: "Pertamina PHE WMO",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pertamina_phe_wmo.png",
  },
  {
    company: "Petronas",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/petronas.png",
  },
  {
    company: "Pertamna EP",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pertamina_ep.png",
  },
  {
    company: "PGN Saka",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pgn.png",
  },
  {
    company: "PT Petrokimia Gresik",
    imgPath:
      "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/petrokimia.png",
  },
];

function Sponsor() {
  return (
    <section className="bg-nogogeni-white text-center px-8 py-6 tablet:px-16 tablet:py-12 desktop:px-32 desktop:py-16">
      <h2 className="text-nogogeni-black font-bold mx-auto max-w-80 text-xl mb-6 tablet:max-w-md tablet:text-[28px] tablet:mb-8 desktop:max-w-4xl desktop:text-[56px] desktop:mb-12">
        Supported by 50+ companies from the beginning
      </h2>

      <Button asChild size="small" className="tablet:hidden">
        <Link href="/sponsor">Our Sponsor</Link>
      </Button>

      <Button asChild size="medium" className="hidden tablet:inline-flex">
        <Link href="/sponsor">Our Sponsor</Link>
      </Button>

      <div className="px-8 mt-3 tablet:mt-4 desktop:mt-6">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnFocusIn: false,
            }),
          ]}
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
          <CarouselPrevious
            variant="primary"
            className="size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-left-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-left-16 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8"
          />
          <CarouselNext
            variant="primary"
            className="size-6 [&_svg]:w-4 [&_svg]:h-4 tablet:-right-14 tablet:size-8 tablet:[&_svg]:w-6 tablet:[&_svg]:h-6 desktop:-right-16 desktop:size-10 desktop:[&_svg]:w-8 desktop:[&_svg]:h-8"
          />
        </Carousel>
      </div>
    </section>
  );
}

export { Sponsor };
