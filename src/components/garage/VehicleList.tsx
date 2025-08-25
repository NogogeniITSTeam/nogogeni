import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { VehicleItem } from "./VehicleItem";

type VehicleType = "urban_car" | "gokart" | "motorcycle";
interface Vehicle {
  name: string;
  imgPath: string;
  specification: Record<string, string>;
}

const vehicles = new Map<VehicleType, Vehicle[]>();
vehicles.set("urban_car", [
  {
    name: "Nogogeni IX Evo",
    imgPath: "/home/nogogeni_ix_evo.png",
    specification: {
      chasis: "ALUMINIUM HOLLOW 6016",
      steering: "ACKERMAN",
      body: "CARBON FIBER",
      motor: "1000 WATT",
      transmission: "CHAIN AND SPROCKET",
      fuel: "LITHIUM BATTERY",
      brake: "HYDRAULIC DISC",
    },
  },
  {
    name: "Nogogeni VII",
    imgPath: "/home/nogogeni_vii.png",
    specification: {
      chasis: "ALUMINIUM HOLLOW 6016",
      steering: "ACKERMAN",
      body: "CARBON FIBER",
      engine: "125 CC",
      transmission: "CHAIN AND SPROCKET",
      fuel: "LITHIUM BATTERY",
      brake: "HYDRAULIC DISC",
    },
  },
]);

vehicles.set("gokart", [
  {
    name: "Gokart Electric",
    imgPath: "/home/gokart.png",
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
  },
]);

vehicles.set("motorcycle", [
  {
    name: "Ng-5000",
    imgPath: "/home/ng_5000.png",
    specification: {
      chasis: "ALUMINIUM HOLLOW 6016",
      steering: "ACKERMAN",
      body: "CARBON FIBER",
      engine: "125 CC",
      transmission: "CHAIN AND SPROCKET",
      fuel: "LITHIUM BATTERY",
      brake: "HYDRAULIC DISC",
    },
  },
]);

function VehicleList() {
  const [selectedVehicleType, setSelectedVehicleType] = useState<
    "urban_car" | "gokart" | "motorcycle"
  >("urban_car");

  const selectedVehicle = useMemo(() => {
    return vehicles.get(selectedVehicleType);
  }, [selectedVehicleType]);

  return (
    <>
      <section className="text-center relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            src="/garage/hero.png"
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
                selectedVehicleType === "urban_car"
                  ? "bg-nogogeni-white/50"
                  : "bg-nogogeni-black"
              } hover:bg-nogogeni-white/50 border border-nogogeni-white text-sm desktop:text-base`}
              onClick={() => setSelectedVehicleType("urban_car")}
            >
              Urban Car
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
        <section
          id="vehicle-types"
          className="scroll-mt-16 desktop:scroll-mt-24"
        >
          {selectedVehicle.map((vehicle) => (
            <VehicleItem key={vehicle.name} vehicle={vehicle} />
          ))}
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export { VehicleList };
export type { Vehicle };
