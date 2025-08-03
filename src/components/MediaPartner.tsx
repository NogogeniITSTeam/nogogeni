import Image from "next/image";

const mediaPartners = [
  {
    company: "Otomotif News and Media Indonesia",
    imgPath: "/media_partner_1.png",
  },
  {
    company: "Tempo and Pikiran Rakyat Media Network",
    imgPath: "/media_partner_2.png",
  },
];

function MediaPartner() {
  return (
    <section className="bg-nogogeni-black py-6 px-8">
      <h2 className="text-nogogeni-white font-semibold text-center text-xl mb-4">
        Media Partner
      </h2>

      <ul className="flex flex-col items-center">
        {mediaPartners.map((media) => (
          <li key={media.company} className="relative w-64 h-16">
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
