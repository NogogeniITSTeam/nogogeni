import { VehicleList } from "@/components/garage/VehicleList";
import Head from "next/head";

export default function Garage() {
  return (
    <>
      <Head>
        <title>Nogogeni - Garage</title>
        <meta
          name="description"
          content="A collection of our designs, prototypes, and race cars on track throughout the years."
        />

        <meta property="og:title" content="Nogogeni - Garage" />
        <meta
          property="og:description"
          content="A collection of our designs, prototypes, and race cars on track throughout the years."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta property="og:url" content="https://www.nogogeniits.com/garage" />

        <meta property="twitter:title" content="Nogogeni - Garage" />
        <meta
          property="twitter:description"
          content="A collection of our designs, prototypes, and race cars on track throughout the years."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.ico" />
        <meta
          property="twitter:url"
          content="https://www.nogogeniits.com/garage"
        />
        <meta property="twitter:domain" content="nogogeniits.com" />
      </Head>

      <VehicleList />
    </>
  );
}
