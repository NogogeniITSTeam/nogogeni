import Image from "next/image";
import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import { Vehicle } from "./VehicleList";

function VehicleGallery({ gallery }: { gallery: Vehicle["gallery"] }) {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });

  const rows = useMemo(() => {
    if (width === 0) {
      return [];
    }

    const rows = [];
    let currentIndex = 0;
    let rowNumber = 1;

    while (currentIndex < gallery.length) {
      const isOddRow = rowNumber % 2 === 1;
      let itemsPerRow = isOddRow ? 1 : 2;
      if (gallery.length === 1) {
        itemsPerRow = 1;
      } else if (gallery.length === 2) {
        itemsPerRow = 2;
      } else if (width < 768) {
        itemsPerRow = isOddRow ? 1 : 2;
      } else {
        itemsPerRow = isOddRow ? 2 : 3;
      }

      const rowItems = gallery.slice(currentIndex, currentIndex + itemsPerRow);
      if (rowItems.length > 0) {
        rows.push({
          gallery: rowItems,
          isOddRow,
        });
      }

      currentIndex += itemsPerRow;
      rowNumber++;
    }

    return rows;
  }, [width, gallery]);

  return (
    <section
      id="vehicle-gallery"
      className="bg-nogogeni-black py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32"
    >
      <div className="w-full mx-auto max-w-7xl">
        <p className="font-semibold text-center mb-3 tablet:text-lg desktop:text-4xl">
          Developed Vehicles Over the Years
        </p>

        <h2 className="font-extrabold text-center text-3xl mb-4 desktop:text-[64px]">
          Vehicle Showcase Gallery
        </h2>

        <p className="text-nogogeni-white/90 text-center w-full mx-auto max-w-64 text-sm mb-8 tablet:max-w-md tablet:text-base tablet:mb-12 desktop:max-w-2xl desktop:text-2xl desktop:mb-16">
          A collection of our designs, prototypes, and race cars on track
          throughout the years.
        </p>

        {rows.map((row, index) => (
          <div
            key={index}
            className={`grid gap-4 mb-4 last:mb-0 tablet:gap-6 tablet:mb-6 desktop:gap-8 desktop:mb-8 ${
              gallery.length === 1
                ? "grid-cols-1"
                : row.isOddRow || gallery.length === 2
                ? "grid-cols-1 tablet:grid-cols-2"
                : "grid-cols-2 tablet:grid-cols-3"
            }`}
          >
            {row.gallery.map((item, index) => (
              <div
                key={`${item.imgPath}:${index}`}
                className={`relative w-full h-32 tablet:h-48 ${
                  gallery.length === 1 ? "desktop:h-96" : "desktop:h-64"
                }`}
              >
                <Image
                  fill
                  src={item.imgPath}
                  alt={item.name}
                  className="object-cover object-center"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-nogogeni-orange to-transparent font-semibold text-xs p-1 tablet:text-base tablet:p-2 desktop:text-2xl desktop:p-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export { VehicleGallery };
