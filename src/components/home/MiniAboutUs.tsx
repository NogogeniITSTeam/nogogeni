import { Button } from "../ui/button";
import Link from "next/link";

function MiniAboutUs() {
  return (
    <article className="bg-nogogeni-black text-center pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
      <h1 className="font-extrabold text-center text-3xl mb-6 desktop:text-[64px] desktop:mb-12">
        Welcome To
        <br />
        <span className="text-red-500">Nogogeni ITS Team</span>
      </h1>

      <p className="text-justify mx-auto max-w-[512px] text-sm mb-4 tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
        An official student research team from Institut Teknologi Sepuluh
        Nopember (ITS), dedicated to developing energy-efficient vehicles that
        push the limits of technology, creativity, and sustainability.
      </p>

      <p className="text-justify mx-auto max-w-[512px] text-sm mb-8 tablet:max-w-xl tablet:text-base desktop:max-w-4xl desktop:text-2xl">
        Since 2012, we&lsquo;ve grown from a small team of dreamers into
        Indonesia&lsquo;s most decorated energy-efficient vehicle team — with
        groundbreaking innovations, national championships, and international
        recognition to our name.
      </p>

      <Button asChild size="small" className="tablet:hidden">
        <Link href="/about-us">Learn Our History</Link>
      </Button>

      <Button asChild size="medium" className="hidden tablet:inline-flex">
        <Link href="/about-us">Learn Our History</Link>
      </Button>
    </article>
  );
}

export { MiniAboutUs };
