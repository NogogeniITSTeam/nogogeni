import Link from "next/link";
import { Instagram } from "../icons/Instagram";
import { Tiktok } from "../icons/Tiktok";
import { Youtube } from "../icons/Youtube";
import { LinkedIn } from "../icons/LinkedIn";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function SocialMedia({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(`flex justify-center items-center gap-4`, className)}
      {...props}
    >
      <li>
        <Link
          href="https://www.instagram.com/nogogeni_its"
          target="_blank"
          rel="noopener"
        >
          <Instagram className="fill-nogogeni-white w-10 h-10" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.tiktok.com/@nogogeni.its"
          target="_blank"
          rel="noopener"
        >
          <Tiktok className="fill-nogogeni-white w-10 h-10" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.youtube.com/@nogogeniitsteam-c6i/videos"
          target="_blank"
          rel="noopener"
        >
          <Youtube className="fill-nogogeni-white w-10 h-10" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/nogogeni-its-tim/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn className="fill-nogogeni-white w-10 h-10" />
        </Link>
      </li>
    </ul>
  );
}

export { SocialMedia };
