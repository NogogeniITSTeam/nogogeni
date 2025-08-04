import { cn } from "@/lib/utils";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

function ContactUs({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <h3 className="font-bold text-xl desktop:text-[28px]">Contact Us</h3>

      <ul className="flex flex-col gap-4">
        <li className="flex gap-3">
          <MapPinIcon className="shrink-0 w-6 h-6" />{" "}
          <Link
            href="https://share.google/rebh1OOYMcejYTzKb"
            target="_blank"
            rel="noopener"
            className="text-xs desktop:text-base"
          >
            Department of Industrial Mechanical Engineering, Institut Teknologi
            Sepuluh Nopember, Sukolilo, Surabaya, Jawa Timur, Indonesia - 60111.
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <PhoneIcon className="shrink-0 w-6 h-6" />{" "}
          <Link
            href="https://wa.me/6281335000886"
            target="_blank"
            rel="noopener"
            className="text-xs desktop:text-base"
          >
            +62 81335000886 - Firman
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <MailIcon className="shrink-0 w-6 h-6" />{" "}
          <Link
            href="mailto:nogogeni.partnership@gmail.com"
            target="_blank"
            rel="noopener"
            className="text-xs desktop:text-base"
          >
            nogogeni.partnership@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { ContactUs };
