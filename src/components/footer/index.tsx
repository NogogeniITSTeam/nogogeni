import Image from "next/image";
import { poppins } from "@/lib/fonts";
import { Subscription } from "./Subscription";
import { SocialMedia } from "./SocialMedia";
import { ContactUs } from "./ContactUs";

function Footer() {
  return (
    <footer
      className={`bg-linear-to-r from-nogogeni-red to-nogogeni-orange px-8 py-6 tablet:px-16 tablet:py-12 desktop:px-32 desktop:py-16 ${poppins.className}`}
    >
      <div className="w-full tablet:mx-auto tablet:max-w-3xl desktop:max-w-5xl">
        {/* Mobile Footer */}
        <div className="relative w-32 h-16 mb-4 tablet:hidden">
          <Image
            fill
            src="/nogogeni_logo_full.png"
            alt="Logo Nogogeni"
            className="object-contain object-center"
          />
        </div>
        <Subscription className="mb-6 tablet:hidden" />
        <ContactUs className="mb-6 tablet:hidden" />
        <SocialMedia className="tablet:hidden" />

        {/* Tablet and Desktop Footer */}
        <div className="relative w-48 h-20 -translate-x-3 hidden tablet:block desktop:w-64 desktop:h-32 desktop:-translate-x-4">
          <Image
            fill
            src="/nogogeni_logo_full.png"
            alt="Logo Nogogeni"
            className="object-contain object-center"
          />
        </div>
        <div className="hidden mt-4 gap-8 tablet:flex tablet:justify-between">
          <ContactUs className="max-w-96 desktop:max-w-[512px]" />
          <div className="space-y-4">
            <Subscription />
            <SocialMedia className="justify-start" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
