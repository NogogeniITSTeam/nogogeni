import Image from "next/image";

const drivers = [
  {
    name: "Roland Khusnu Winada",
    vehicleType: "Urban Ethanol Car",
    imgPath: "/roland.png",
  },
  {
    name: "Saputra Ardyan Syah",
    vehicleType: "Urban Electric Car",
    imgPath: "/saputra.png",
  },
];

function Driver() {
  return (
    <section className="bg-nogogeni-black pt-16 text-center">
      <h2 className="text-nogogeni-orange font-extrabold text-2xl px-8 mb-8">
        These Are
        <br />
        <span className="text-nogogeni-white">Nogogeni&apos;s Drivers</span>
      </h2>

      <div className="relative pb-16">
        <Image
          fill
          src="/hero_image_1.jpg"
          alt="Nogogeni VII"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/85" />

        <ul className="relative z-10 flex justify-center items-center gap-8">
          {drivers.map((driver) => (
            <li
              key={driver.name}
              className="group basis-1/2 space-y-2 max-w-36 tablet:max-w-3xs desktop:max-w-[512px]"
            >
              <div className="bg-nogogeni-orange relative overflow-hidden aspect-square rounded-md max-w-36 tablet:max-w-3xs desktop:max-w-[512px]">
                <Image
                  fill
                  src={driver.imgPath}
                  alt={driver.name}
                  className="object-contain object-center translate-y-20 scale-[185%] group-hover:scale-[210%] duration-300 tablet:translate-y-36"
                />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-nogogeni-white font-bold text-xs tablet:text-base">
                  {driver.name}
                </h3>
                <span className="text-nogogeni-white font-semibold text-[8px] tablet:text-xs">
                  {driver.vehicleType}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { Driver };
