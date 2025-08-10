import Image from "next/image";

const mediaPartners = [
  {
    company: "Otomotif News and Media Indonesia",
    imgPath: "/home/media_partner_1.png",
  },
  {
    company: "Tempo and Pikiran Rakyat Media Network",
    imgPath: "/home/media_partner_2.png",
  },
];

function MediaPartner() {
  return (
    <section className="bg-nogogeni-black px-8 py-6 tablet:px-16 tablet:py-12 desktop:px-32 desktop:py-16">
      <h2 className="text-nogogeni-white font-semibold text-center text-xl mb-4 tablet:text-4xl tablet:mb-8 desktop:text-[64px] desktop:mb-12">
        Media Partner
      </h2>

      <ul className="flex flex-col items-center">
        {mediaPartners.map((media) => (
          <li
            key={media.company}
            className="relative w-64 h-16 tablet:w-96 tablet:h-24 desktop:w-[512px] desktop:h-32"
          >
            <Image
              fill
              src={media.imgPath}
              alt={media.company}
              className="object-contain object-center"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export { MediaPartner };
