import { poppins } from "@/lib/fonts";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <header
      className={`bg-[#1E1E1E] fixed z-20 top-0 left-0 right-0 flex justify-between items-center px-8 py-4 h-16 tablet:py-5 desktop:h-24 ${poppins.className}`}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="relative w-8 h-8">
          <Image
            fill
            src="/nogogeni_logo.png"
            alt="Logo Nogogeni"
            className="object-contain object-center"
          />
        </div>

        <h2 className="font-bold text-sm desktop:text-xl">Nogogeni ITS Team</h2>
      </div>

      <button type="button" className="cursor-pointer tablet:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </button>

      <nav className="justify-between items-center gap-8 hidden tablet:flex">
        <Link
          href="/about-us"
          className={`font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/about-us"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          About Us
        </Link>
        <button
          className={`cursor-pointer font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/garage"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          Garage
        </button>
        <Link
          href="/our-team"
          className={`font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/our-team"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          Our Team
        </Link>
        <button
          className={`cursor-pointer font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/activities"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          Activities
        </button>
        <Link
          href="/contact"
          className={`font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/contact"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export { Navbar };
