import { MediaPartner } from "@/components/home/MediaPartner";
import Head from "next/head";
import Image from "next/image";

const sponsors = [
  [
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
  ],
  [
    {
      company: "PT Petrokimia Gresik",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/petrokimia.png",
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
  ],
  [
    {
      company: "Husky-CNOOC Madura Limited",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/hcml.png",
    },
    {
      company: "Swanaya Prisadi Indonesia",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/spi.png",
    },
    {
      company: "Pertamina PHE WMO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pertamina_phe_wmo.png",
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
  ],
  [
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
      company: "Better Luck Project",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/betterluck.png",
    },
    {
      company: "Kangean Energy Indonesia",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/kangean.png",
    },
  ],
  [
    {
      company: "Medco Energi",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/medco.png",
    },
    {
      company: "Petronas",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/petronas.png",
    },
    {
      company: "PGN Saka",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pgn.png",
    },
    {
      company: "Pertamna EP",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pertamina_ep.png",
    },
  ],
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
        <meta
          property="og:image"
          content="https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/nogogeni_logo_full.png"
        />
        <meta property="og:url" content="https://www.nogogeniits.com/sponsor" />

        <meta property="twitter:title" content="Nogogeni - Sponsor" />
        <meta
          property="twitter:description"
          content="Meet our valued sponsors and partners who support our mission."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/nogogeni_logo_full.png"
        />
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

        <div className="w-full m-auto max-w-4xl flex flex-col justify-center items-center">
          <div className="relative w-64 h-24 tablet:w-sm tablet:h-36 desktop:w-lg desktop:h-32">
            <Image
              fill
              src="https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/pertamina_lubricants.png"
              alt="Pertamina Lubricants"
              className="object-contain object-center"
            />
          </div>

          {sponsors.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              {item.map((sponsor) => (
                <div
                  key={sponsor.imgPath}
                  className={`relative h-16 ${
                    index === 0
                      ? "w-32 tablet:w-52 tablet:h-24 desktop:w-72 desktop:h-32"
                      : "w-16 tablet:w-28 tablet:h-20 desktop:w-32 desktop:h-28"
                  }`}
                >
                  <Image
                    fill
                    src={sponsor.imgPath}
                    alt={sponsor.company}
                    className="object-contain object-center"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <MediaPartner />
    </>
  );
}
