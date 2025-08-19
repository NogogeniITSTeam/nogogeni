import { VehicleList } from "@/components/garage/VehicleList";
import Image from "next/image";
import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

const vehicles = [
  { name: "Nogogeni IX EVO", imgPath: "/home/hero_image_2.jpg" },
  { name: "Nogogeni VIII EVO", imgPath: "/garage/nogogeni_viii_evo.png" },
  { name: "Nogogeni VII EVO", imgPath: "/garage/nogogeni_vii_evo.png" },
  { name: "Nogogeni VI EVO", imgPath: "/garage/nogogeni_vi_evo.png" },
  { name: "Nogogeni V EVO", imgPath: "/garage/nogogeni_v_evo.png" },
  { name: "Nogogeni IV EVO", imgPath: "/garage/nogogeni_iv_evo.png" },
  { name: "Nogogeni III EVO", imgPath: "/garage/nogogeni_iii_evo.png" },
  { name: "Nogogeni II EVO", imgPath: "/garage/nogogeni_ii_evo.jpg" },
  { name: "Pancasona", imgPath: "/garage/pancasona.jpg" },
];

export default function Garage() {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });

  const rows = useMemo(() => {
    if (width === 0) {
      return [];
    }

    const rows = [];
    let currentIndex = 0;
    let rowNumber = 1;

    while (currentIndex < vehicles.length) {
      const isOddRow = rowNumber % 2 === 1;
      let itemsPerRow = isOddRow ? 1 : 2;
      if (width < 768) {
        itemsPerRow = isOddRow ? 1 : 2;
      } else {
        itemsPerRow = isOddRow ? 2 : 3;
      }

      const rowItems = vehicles.slice(currentIndex, currentIndex + itemsPerRow);
      if (rowItems.length > 0) {
        rows.push({
          vehicles: rowItems,
          isOddRow,
        });
      }

      currentIndex += itemsPerRow;
      rowNumber++;
    }

    return rows;
  }, [width]);

  return (
    <>
      <VehicleList />

      <section className="bg-nogogeni-black py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32">
        <p className="font-semibold text-center mb-3">
          Developed Vehicles Over the Years
        </p>

        <h2 className="font-extrabold text-center text-3xl mb-4">
          Vehicle Showcase Gallery
        </h2>

        <p className="text-justify w-full mx-auto max-w-64 text-sm mb-8">
          A collection of our designs, prototypes, and race cars on track
          throughout the years.
        </p>

        <ul>
          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid gap-4 mb-4 last:mb-0 ${
                row.isOddRow
                  ? "grid-cols-1 tablet:grid-cols-2"
                  : "grid-cols-2 tablet:grid-cols-3"
              }`}
            >
              {row.vehicles.map((vehicle, index) => (
                <div
                  key={`${vehicle.imgPath}:${index}`}
                  className="relative w-full h-32"
                >
                  <Image
                    fill
                    src={vehicle.imgPath}
                    alt={vehicle.name}
                    className="object-cover object-center"
                  />
                  <p className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-nogogeni-orange to-transparent font-bold text-xs p-1">
                    {vehicle.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}
