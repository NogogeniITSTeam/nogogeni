import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { VehicleItem } from "./VehicleItem";
import { VehicleGallery } from "./VehicleGallery";

type VehicleType =
  | "electric_urban_car"
  | "ethanol_urban_car"
  | "gokart"
  | "motorcycle";

interface Vehicle {
  name: string;
  imgPath: string;
  specification: Record<string, string>;
  gallery: {
    name: string;
    imgPath: string;
  }[];
}

const vehicles = new Map<VehicleType, Vehicle>();
vehicles.set("electric_urban_car", {
  name: "Nogogeni IX Evo",
  imgPath:
    "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/nogogeni_ix_evo.png",
  specification: {
    chasis: "ALUMINIUM HOLLOW 6016",
    steering: "ACKERMAN",
    body: "CARBON FIBER",
    motor: "1000 WATT",
    transmission: "CHAIN AND SPROCKET",
    fuel: "LITHIUM BATTERY",
    brake: "HYDRAULIC DISC",
  },
  gallery: [
    {
      name: "Nogogeni IX EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/hero_image_2.jpg",
    },
    {
      name: "Nogogeni VIII EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_viii_evo.png",
    },
    {
      name: "Nogogeni VII EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_vii_evo.png",
    },
    {
      name: "Nogogeni VI EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_vi_evo.png",
    },
    {
      name: "Nogogeni V EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_v_evo.png",
    },
    {
      name: "Nogogeni IV EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_iv_evo.png",
    },
    {
      name: "Nogogeni III EVO",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_iii_evo.png",
    },
    {
      name: "Nogogeni II",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_ii.jpg",
    },
    {
      name: "Pancasona",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_pancasona.jpg",
    },
    {
      name: "Nagageni I",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/electric_i.png",
    },
  ],
});

vehicles.set("ethanol_urban_car", {
  name: "Nogogeni VII",
  imgPath:
    "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/nogogeni_vii.png",
  specification: {
    chasis: "ALUMINIUM HOLLOW 6016",
    steering: "ACKERMAN",
    body: "CARBON FIBER",
    engine: "125 CC",
    transmission: "CHAIN AND SPROCKET",
    fuel: "LITHIUM BATTERY",
    brake: "HYDRAULIC DISC",
  },
  gallery: [
    {
      name: "Nogogeni VII",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/hero_image_1.jpg",
    },
    {
      name: "Nogogeni VI",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ethanol_vi.jpg",
    },
    {
      name: "Nogogeni V",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ethanol_v.png",
    },
    {
      name: "Nogogeni IV",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ethanol_iv.png",
    },
    {
      name: "Nogogeni III",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ethanol_iii.png",
    },
    {
      name: "Nogogeni II",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ethanol_ii.png",
    },
    {
      name: "Nagageni I",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ethanol_i.jpg",
    },
  ],
});

vehicles.set("gokart", {
  name: "Gokart Electric",
  imgPath:
    "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/gokart.png",
  specification: {
    steering: "ACKERMAN",
    motor: "Mid Drive Brushless DC",
    transmission: "CHAIN AND SPROCKET",
    fuel: "LITHIUM BATTERY",
    brake: "HYDRAULIC DISC",
    battery: "LITHIUM IRON PHOSPHAT 72V/40AH",
    "power output": "3000 W",
    "max speed": "78 KM/H",
  },
  gallery: [
    {
      name: "Gokart Electric",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/gokart_electric.png",
    },
  ],
});

vehicles.set("motorcycle", {
  name: "Ng-5000",
  imgPath:
    "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/home/ng_5000.png",
  specification: {
    chasis: "ALUMINIUM HOLLOW 6016",
    steering: "ACKERMAN",
    body: "CARBON FIBER",
    engine: "125 CC",
    transmission: "CHAIN AND SPROCKET",
    fuel: "LITHIUM BATTERY",
    brake: "HYDRAULIC DISC",
  },
  gallery: [
    {
      name: "NG - 5000",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ng_5000_1.png",
    },
    {
      name: "NG - 5000",
      imgPath:
        "https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/ng_5000_2.jpg",
    },
  ],
});

function VehicleList() {
  const [selectedVehicleType, setSelectedVehicleType] =
    useState<VehicleType>("electric_urban_car");

  const selectedVehicle = useMemo(() => {
    return vehicles.get(selectedVehicleType);
  }, [selectedVehicleType]);

  return (
    <>
      <section className="text-center relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            priority
            src="https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/garage/hero.png"
            alt=""
            className="object-cover object-center"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-64 space-y-4 tablet:max-w-xl desktop:max-w-3xl desktop:space-y-6">
          <div className="mb-16 desktop:mb-24">
            <h1 className="font-extrabold text-3xl mb-4 desktop:text-[64px]">
              Our Vehicle Types
            </h1>
            <p className="text-sm mb-6 tablet:text-base desktop:text-2xl desktop:mb-8">
              Discover the different types of high-performance vehicles we race.
            </p>
            <div className="bg-gradient-to-r from-nogogeni-black/5 via-nogogeni-orange to-nogogeni-black/5 h-0.5 desktop:h-1"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <Button
              className={`${
                selectedVehicleType === "electric_urban_car"
                  ? "bg-nogogeni-white/50"
                  : "bg-nogogeni-black"
              } hover:bg-nogogeni-white/50 border border-nogogeni-white text-sm desktop:text-base`}
              onClick={() => setSelectedVehicleType("electric_urban_car")}
            >
              Electric Urban Car
            </Button>
            <Button
              className={`${
                selectedVehicleType === "ethanol_urban_car"
                  ? "bg-nogogeni-white/50"
                  : "bg-nogogeni-black"
              } hover:bg-nogogeni-white/50 border border-nogogeni-white text-sm desktop:text-base`}
              onClick={() => setSelectedVehicleType("ethanol_urban_car")}
            >
              Ethanol Urban Car
            </Button>
            <Button
              className={`${
                selectedVehicleType === "gokart"
                  ? "bg-nogogeni-white/50"
                  : "bg-nogogeni-black"
              } hover:bg-nogogeni-white/50 border border-nogogeni-white text-sm desktop:text-base`}
              onClick={() => setSelectedVehicleType("gokart")}
            >
              Gokart
            </Button>
            <Button
              className={`${
                selectedVehicleType === "motorcycle"
                  ? "bg-nogogeni-white/50"
                  : "bg-nogogeni-black"
              } hover:bg-nogogeni-white/50 border border-nogogeni-white text-sm desktop:text-base`}
              onClick={() => setSelectedVehicleType("motorcycle")}
            >
              Motorcycle
            </Button>
          </div>
        </div>
      </section>

      {selectedVehicle ? (
        <>
          <section
            id="vehicle-types"
            className="scroll-mt-16 desktop:scroll-mt-24"
          >
            <VehicleItem key={selectedVehicle.name} vehicle={selectedVehicle} />
          </section>

          {selectedVehicle.gallery.length > 0 ? (
            <VehicleGallery gallery={selectedVehicle.gallery} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export { VehicleList };
export type { Vehicle };
