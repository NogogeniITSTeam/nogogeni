import Image from "next/image";

const drivers = [
  {
    name: "Roland Khusnu Winada",
    vehicleType: "Urban Ethanol Car",
    imgPath: "/home/roland.png",
  },
  {
    name: "Saputra Ardyan Syah",
    vehicleType: "Urban Electric Car",
    imgPath: "/home/saputra.png",
  },
];

function Driver() {
  return (
    <section className="bg-nogogeni-black text-center pt-16 tablet:pt-24 desktop:pt-32">
      <h2 className="text-nogogeni-orange font-extrabold text-2xl tablet:text-3xl desktop:text-[64px]">
        These Are
        <br />
        <span className="text-nogogeni-white">Nogogeni&apos;s Drivers</span>
      </h2>

      <div className="relative">
        <Image
          fill
          src="/hero_image_1.jpg"
          alt="Nogogeni VII"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-nogogeni-black to-black/85" />

        <ul className="relative z-10 flex flex-col items-center gap-8 p-8 tablet:gap-16 tablet:flex-row tablet:justify-center tablet:py-16">
          {drivers.map((driver) => (
            <li
              key={driver.name}
              className="group space-y-2 tablet:space-y-4 tablet:basis-1/2 tablet:max-w-fit"
            >
              <div className="bg-linear-to-br from-nogogeni-red to-nogogeni-orange relative overflow-hidden rounded-md aspect-square h-64 desktop:h-96">
                <Image
                  fill
                  src={driver.imgPath}
                  alt={driver.name}
                  className="object-contain object-center duration-300 translate-y-40 scale-[185%] group-hover:scale-[210%] desktop:translate-y-56"
                />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="font-bold uppercase desktop:text-2xl">
                  {driver.name}
                </h3>
                <span className="text-nogogeni-white/90 font-medium text-sm desktop:text-lg">
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
