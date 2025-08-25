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
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import { useOnClickOutside, useScrollLock } from "usehooks-ts";

interface NavbarModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

function NavbarModal({ setIsOpened }: NavbarModalProps) {
  useScrollLock();

  return (
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
          href="/garage"
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
          href="/contact"
          className="hover:bg-[#3F3F3F] cursor-pointer block w-full px-6 py-4"
          onClick={() => setIsOpened(false)}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}

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
      className={`bg-[#1E1E1E] fixed z-50 top-0 left-0 right-0 px-8 ${poppins.className}`}
    >
      <div className="w-full mx-auto max-w-7xl flex justify-between items-center py-4 h-16 tablet:py-5 desktop:h-24">
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
          <h2 className="font-bold text-sm desktop:text-xl">
            Nogogeni ITS Team
          </h2>
        </Link>

        <button
          onClick={() => setIsOpened(!isOpened)}
          type="button"
          className="cursor-pointer tablet:hidden"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </button>

        {/* Mobile Navbar */}
        {isOpened && <NavbarModal setIsOpened={setIsOpened} />}

        {/* Desktop Navbar */}
        <nav className="justify-between items-center gap-8 hidden tablet:flex">
          <div className="relative">
            <Link
              href="/about-us"
              className={`peer hover:text-nogogeni-orange font-medium transition-all duration-300 desktop:text-xl ${
                router.pathname === "/about-us" ? "text-nogogeni-orange" : ""
              }`}
            >
              About Us
            </Link>
            <div className="bg-nogogeni-orange invisible h-0.5 w-0.5 mx-auto peer-hover:visible peer-hover:w-full transition-all duration-300"></div>
          </div>

          <DropdownMenu open={isGarageOpened} onOpenChange={setIsGarageOpened}>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <button
                  className={`peer group cursor-pointer outline-none font-medium flex items-center gap-2 desktop:text-xl ${
                    router.pathname.startsWith("/garage")
                      ? "text-nogogeni-orange"
                      : ""
                  }`}
                >
                  <span className="group-hover:text-nogogeni-orange transition-all duration-300">
                    Garage
                  </span>
                  <ChevronDownIcon
                    className={`group-hover:text-nogogeni-orange transition-all duration-300 ${
                      isGarageOpened ? "-rotate-180" : ""
                    }`}
                  />
                </button>
                <div className="bg-nogogeni-orange invisible h-0.5 w-0.5 mx-auto peer-hover:visible peer-hover:w-full transition-all duration-300"></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-nogogeni-white border-none rounded-tl-none rounded-tr-none p-0 mt-3.5 desktop:mt-7">
              <DropdownMenuItem
                asChild
                className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                  router.pathname === "/garage#vehicle-types"
                    ? "bg-[#FF675D]"
                    : "bg-nogogeni-orange"
                }`}
              >
                <Link href="/garage#vehicle-types">
                  <CarFrontIcon className="text-nogogeni-white" /> Vehicle Types
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className={`cursor-pointer rounded-none font-semibold focus:bg-[#FF675D] focus:text-nogogeni-white px-3 py-1.5 desktop:text-base desktop:px-4 desktop:py-2 ${
                  router.pathname === "/garage#vehicle-gallery"
                    ? "bg-[#FF675D]"
                    : "bg-nogogeni-orange"
                }`}
              >
                <Link href="/garage#vehicle-gallery">
                  <BookImageIcon className="text-nogogeni-white" /> Vehicle
                  Gallery
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <Link
              href="/our-team"
              className={`peer hover:text-nogogeni-orange font-medium transition-all duration-300 desktop:text-xl ${
                router.pathname === "/our-team" ? "text-nogogeni-orange" : ""
              }`}
            >
              Our Team
            </Link>
            <div className="bg-nogogeni-orange invisible h-0.5 w-0.5 mx-auto peer-hover:visible peer-hover:w-full transition-all duration-300"></div>
          </div>

          <DropdownMenu
            open={isActivitiesOpened}
            onOpenChange={setIsActivitiesOpened}
          >
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <button
                  className={`peer group cursor-pointer outline-none font-medium flex items-center gap-2 desktop:text-xl ${
                    router.pathname.startsWith("/activities")
                      ? "text-nogogeni-orange"
                      : ""
                  }`}
                >
                  <span className="group-hover:text-nogogeni-orange transition-all duration-300">
                    Activities
                  </span>
                  <ChevronDownIcon
                    className={`group-hover:text-nogogeni-orange transition-all duration-300 ${
                      isActivitiesOpened ? "-rotate-180" : ""
                    }`}
                  />
                </button>
                <div className="bg-nogogeni-orange invisible h-0.5 w-0.5 mx-auto peer-hover:visible peer-hover:w-full transition-all duration-300"></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-nogogeni-white border-none rounded-tl-none rounded-tr-none p-0 mt-3.5 desktop:mt-7">
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

          <div className="relative">
            <Link
              href="/contact"
              className={`peer hover:text-nogogeni-orange font-medium transition-all duration-300 desktop:text-xl ${
                router.pathname === "/contact" ? "text-nogogeni-orange" : ""
              }`}
            >
              Contact
            </Link>
            <div className="bg-nogogeni-orange invisible h-0.5 w-0.5 mx-auto peer-hover:visible peer-hover:w-full transition-all duration-300"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export { Navbar };
