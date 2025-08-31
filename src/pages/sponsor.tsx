import { MediaPartner } from "@/components/home/MediaPartner";
import Head from "next/head";
import Image from "next/image";

const sponsors = [
  {
    company: "Pertamina Lubricants",
    imgPath: "/home/pertamina_lubricants.png",
  },
  { company: "Chempo Site Store", imgPath: "/home/chempo.png" },
  { company: "SKK Migas", imgPath: "/home/skkmigas.png" },
  { company: "PT Tritunggal Swarna", imgPath: "/home/tritunggal.png" },
  { company: "HKA", imgPath: "/home/hka.png" },
  { company: "CPT", imgPath: "/home/cpt.png" },
  {
    company: "Swanaya Prisadi Indonesia",
    imgPath: "/home/spi.png",
  },
  { company: "Telkom Indonesia", imgPath: "/home/telkom.png" },
  { company: "Grab", imgPath: "/home/grab.png" },
  { company: "Padang Cement Indonesia", imgPath: "/home/padang.png" },
  { company: "Spectrum", imgPath: "/home/spectrum.png" },
  { company: "BSS Original Exhaust", imgPath: "/home/bss.png" },
  { company: "Print & Print", imgPath: "/home/print.png" },
  { company: "Better Luck Project", imgPath: "/home/betterluck.png" },
  {
    company: "Husky-CNOOC Madura Limited",
    imgPath: "/home/hcml.png",
  },
  { company: "Kangean Energy Indonesia", imgPath: "/home/kangean.png" },
  { company: "Medco Energi", imgPath: "/home/medco.png" },
  { company: "Pertamina PHE WMO", imgPath: "/home/pertamina_phe_wmo.png" },
  { company: "Petronas", imgPath: "/home/petronas.png" },
  { company: "Pertamna EP", imgPath: "/home/pertamina_ep.png" },
  { company: "PGN Saka", imgPath: "/home/pgn.png" },
  { company: "PT Petrokimia Gresik", imgPath: "/home/petrokimia.png" },
];

export default function Sponsor() {
  return (
    <>
      <Head>
        <title>Nogogeni - Sponsor</title>
        <meta
          name="description"
          content="Meet our valued sponsors and partners who support our mission."
        />

        <meta property="og:title" content="Nogogeni - Sponsor" />
        <meta
          property="og:description"
          content="Meet our valued sponsors and partners who support our mission."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta property="og:url" content="https://www.nogogeniits.com/sponsor" />

        <meta property="twitter:title" content="Nogogeni - Sponsor" />
        <meta
          property="twitter:description"
          content="Meet our valued sponsors and partners who support our mission."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.ico" />
        <meta
          property="twitter:url"
          content="https://www.nogogeniits.com/sponsor"
        />
        <meta property="twitter:domain" content="nogogeniits.com" />
      </Head>

      <section className="bg-nogogeni-white text-center mt-16 py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:mt-24 desktop:py-32">
        <h1 className="text-nogogeni-black text-center font-extrabold text-3xl mb-12 desktop:text-[64px] desktop:mb-24">
          Supported By
        </h1>

        <div className="grid grid-cols-2 gap-4 tablet:grid-cols-4 desktop:grid-cols-5">
          {sponsors.map((sponsor) => (
            <div key={sponsor.imgPath} className="relative h-24 desktop:h-32">
              <Image
                fill
                src={sponsor.imgPath}
                alt={sponsor.company}
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </section>

      <MediaPartner />
    </>
  );
}
