import { poppins } from "@/lib/fonts";
import {
  BookImageIcon,
  CalendarIcon,
  CarFrontIcon,
  ChevronDownIcon,
  MenuIcon,
  Newspaper,
  TrophyIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

function Navbar() {
  const ref = useRef(null);
  const [isGarageOpened, setIsGarageOpened] = useState(false);
  const [isActivitiesOpened, setIsActivitiesOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();

  useOnClickOutside(
    ref as unknown as RefObject<HTMLElement> | RefObject<HTMLElement>[],
    () => setIsOpened(false)
  );

  return (
    <header
      ref={ref}
      className={`bg-[#1E1E1E] fixed z-20 top-0 left-0 right-0 flex justify-between items-center px-8 py-4 h-16 tablet:py-5 desktop:h-24 ${poppins.className}`}
    >
      <Link
        onClick={() => setIsOpened(false)}
        href="/"
        className="flex justify-between items-center gap-3"
      >
        <div className="relative w-8 h-8">
          <Image
            fill
            src="/nogogeni_logo.png"
            alt="Logo Nogogeni"
            className="object-contain object-center"
          />
        </div>
        <h2 className="font-bold text-sm desktop:text-xl">Nogogeni ITS Team</h2>
      </Link>

      <button
        onClick={() => setIsOpened(!isOpened)}
        type="button"
        className="cursor-pointer tablet:hidden"
      >
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </button>

      {isOpened && (
        <>
          <div
            onClick={() => setIsOpened(false)}
            className="bg-black/75 fixed top-16 left-0 right-0 bottom-0 tablet:hidden"
          ></div>

          <nav className="bg-nogogeni-black fixed top-16 left-0 right-0 tablet:hidden">
            <Link
              href="/about-us"
              className="hover:bg-[#3F3F3F] cursor-pointer block w-full px-6 py-4"
              onClick={() => setIsOpened(false)}
            >
              About Us
            </Link>
            <Link
              href="/garage/vehicle-types"
              className="hover:bg-[#3F3F3F] cursor-pointer block w-full px-6 py-4"
              onClick={() => setIsOpened(false)}
            >
              Garage
            </Link>
            <Link
              href="/our-team"
              className="hover:bg-[#3F3F3F] cursor-pointer block w-full px-6 py-4"
              onClick={() => setIsOpened(false)}
            >
              Our Team
            </Link>
            <Link
              href="/activities/competition"
              className="hover:bg-[#3F3F3F] cursor-pointer block w-full px-6 py-4"
              onClick={() => setIsOpened(false)}
            >
              Activities
            </Link>
            <Link
              href="/contact-us"
              className="hover:bg-[#3F3F3F] cursor-pointer block w-full px-6 py-4"
              onClick={() => setIsOpened(false)}
            >
              Contact Us
            </Link>
          </nav>
        </>
      )}

      <nav className="justify-between items-center gap-8 hidden tablet:flex">
        <Link
          href="/about-us"
          className={`hover:text-nogogeni-orange hover:border-b-nogogeni-orange font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/about-us"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          About Us
        </Link>

        <DropdownMenu open={isGarageOpened} onOpenChange={setIsGarageOpened}>
          <DropdownMenuTrigger asChild>
            <button
              className={`hover:text-nogogeni-orange hover:border-b-nogogeni-orange cursor-pointer outline-none font-medium transition-all duration-300 border-b pb-0.5 flex items-center gap-2 desktop:text-xl ${
                router.pathname.startsWith("/garage")
                  ? "text-nogogeni-orange border-b-nogogeni-orange"
                  : "border-b-transparent"
              }`}
            >
              Garage{" "}
              <ChevronDownIcon
                className={`transition-all duration-300 ${
                  isGarageOpened ? "-rotate-180" : ""
                }`}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-nogogeni-white border-none rounded-tl-none rounded-tr-none p-0 mt-4 desktop:mt-8">
            <DropdownMenuItem
              asChild
              className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                router.pathname === "/garage/vehicle-types"
                  ? "bg-[#FF675D]"
                  : "bg-nogogeni-orange"
              }`}
            >
              <Link href="/garage/vehicle-types">
                <CarFrontIcon className="text-nogogeni-white" /> Vehicle Types
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                router.pathname === "/garage/vehicle-gallery"
                  ? "bg-[#FF675D]"
                  : "bg-nogogeni-orange"
              }`}
            >
              <Link href="/garage/vehicle-gallery">
                <BookImageIcon className="text-nogogeni-white" /> Vehicle
                Gallery
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/our-team"
          className={`hover:text-nogogeni-orange hover:border-b-nogogeni-orange font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
            router.pathname === "/our-team"
              ? "text-nogogeni-orange border-b-nogogeni-orange"
              : "border-b-transparent"
          }`}
        >
          Our Team
        </Link>

        <DropdownMenu
          open={isActivitiesOpened}
          onOpenChange={setIsActivitiesOpened}
        >
          <DropdownMenuTrigger asChild>
            <button
              className={`hover:text-nogogeni-orange hover:border-b-nogogeni-orange cursor-pointer outline-none font-medium transition-all duration-300 border-b pb-0.5 flex items-center gap-2 desktop:text-xl ${
                router.pathname.startsWith("/activities")
                  ? "text-nogogeni-orange border-b-nogogeni-orange"
                  : "border-b-transparent"
              }`}
            >
              Activities{" "}
              <ChevronDownIcon
                className={`transition-all duration-300 ${
                  isActivitiesOpened ? "-rotate-180" : ""
                }`}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-nogogeni-white border-none rounded-tl-none rounded-tr-none p-0 mt-4 desktop:mt-8">
            <DropdownMenuItem
              asChild
              className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                router.pathname === "/activities/competition"
                  ? "bg-[#FF675D]"
                  : "bg-nogogeni-orange"
              }`}
            >
              <Link href="/activities/competition">
                <TrophyIcon className="text-nogogeni-white" /> Competition
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                router.pathname === "/activities/internal-and-external"
                  ? "bg-[#FF675D]"
                  : "bg-nogogeni-orange"
              }`}
            >
              <Link href="/activities/internal-and-external">
                <CalendarIcon className="text-nogogeni-white" /> Internal &
                External
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                router.pathname === "/activities/newsroom"
                  ? "bg-[#FF675D]"
                  : "bg-nogogeni-orange"
              }`}
            >
              <Link href="/activities/newsroom">
                <Newspaper className="text-nogogeni-white" /> Newsroom
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/contact"
          className={`hover:text-nogogeni-orange hover:border-b-nogogeni-orange font-medium transition-all duration-300 border-b pb-0.5 desktop:text-xl ${
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
