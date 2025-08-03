import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { MouseEvent, useState } from "react";
import {
  LoaderCircleIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Instagram } from "./icons/Instagram";
import { Tiktok } from "./icons/Tiktok";
import { Youtube } from "./icons/Youtube";
import { LinkedIn } from "./icons/LinkedIn";

const formSchema = z.object({
  email: z.email(),
});

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribe = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsDialogOpened(false);
      form.setValue("email", "");
      toast.success("Thank you for subscribing!", { richColors: true });
    }, 1000);
  };

  function onSubmit() {
    setIsDialogOpened(true);
  }

  return (
    <footer className="bg-linear-to-r from-nogogeni-red to-nogogeni-orange px-8 py-6">
      <div className="relative w-32 h-16">
        <Image
          fill
          src="/nogogeni_logo_full.png"
          alt="Logo Nogogeni"
          className="object-contain object-center"
        />
      </div>

      <h3 className="text-nogogeni-white font-bold text-xl mb-4">
        Stay Up to Date
      </h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex justify-between items-center gap-2 mb-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    required
                    placeholder="example@gmail.com"
                    className="text-sm text-nogogeni-white placeholder:text-nogogeni-white/90 ring-nogogeni-white focus-visible:ring-transparent focus-visible:border-nogogeni-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading || form.watch("email") === ""}
            type="submit"
            size="sm"
            className="bg-nogogeni-white hover:bg-nogogeni-white/90 text-nogogeni-black cursor-pointer rounded-full h-9 px-4"
          >
            Subscribe
          </Button>

          {isDialogOpened ? (
            <AlertDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Please check your email again
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    disabled={isLoading}
                    className="cursor-pointer"
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    disabled={isLoading}
                    onClick={subscribe}
                    className="cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <LoaderCircleIcon className="animate-spin" />
                        Loading
                      </>
                    ) : (
                      "Submit"
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <></>
          )}
        </form>
      </Form>

      <h3 className="text-nogogeni-white font-bold text-xl mb-4">Contact Us</h3>

      <ul className="flex flex-col gap-4 mb-6">
        <li className="flex gap-3">
          <MapPinIcon className="shrink-0 w-6 h-6 text-nogogeni-white" />{" "}
          <Link
            href="https://share.google/rebh1OOYMcejYTzKb"
            target="_blank"
            rel="noopener"
            className="text-nogogeni-white text-xs"
          >
            Department of Industrial Mechanical Engineering, Institut Teknologi
            Sepuluh Nopember, Sukolilo, Surabaya, Jawa Timur, Indonesia - 60111.
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <PhoneIcon className="shrink-0 w-6 h-6 text-nogogeni-white" />{" "}
          <Link
            href="https://wa.me/6281335000886"
            target="_blank"
            rel="noopener"
            className="text-nogogeni-white text-xs"
          >
            +62 81335000886 - Firman
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <MailIcon className="shrink-0 w-6 h-6 text-nogogeni-white" />{" "}
          <Link
            href="mailto:nogogeni.partnership@gmail.com"
            target="_blank"
            rel="noopener"
            className="text-nogogeni-white text-xs"
          >
            nogogeni.partnership@gmail.com
          </Link>
        </li>
      </ul>

      <ul className="flex justify-center items-center gap-4">
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
    </footer>
  );
}

export { Footer };
