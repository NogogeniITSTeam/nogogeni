import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownCircleIcon, LoaderCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.email(),
  phone: z.string().regex(/^62/).min(10).max(15),
  message: z.string(),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          subscribed_at: new Date().toISOString(),
        }),
      });

      if (res.status !== 200) {
        throw new Error(`failed to send subscription data to google sheet`);
      }

      toast.success("Thank you for connecting with us!", { richColors: true });
      form.reset({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong, please try again later", {
        richColors: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="text-center relative bg-nogogeni-black mt-16 desktop:mt-24">
        <div className="relative h-[calc(100vh-64px)] desktop:h-[calc(100vh-96px)]">
          <Image
            fill
            src="/about-us/history_13.jpg"
            alt="Nogogeni Team"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nogogeni-black to-transparent" />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm space-y-4 desktop:max-w-3xl desktop:space-y-6">
          <h1 className="uppercase flex flex-col">
            <span className="font-bold desktop:text-2xl">
              Your Support Matters
            </span>{" "}
            <span className="font-extrabold text-3xl desktop:text-[64px]">
              Be Part of Our Journey
            </span>
          </h1>

          <Link
            href="/contact#form"
            className="flex justify-center items-center"
          >
            <ChevronDownCircleIcon className="tablet:size-8 desktop:size-12" />
          </Link>
        </div>
      </section>

      <div
        id="form"
        className="py-16 px-8 tablet:px-16 tablet:py-24 desktop:px-32 desktop:py-32"
      >
        <Card className="bg-nogogeni-black border-nogogeni-white w-full m-auto max-w-md desktop:max-w-lg">
          <CardHeader>
            <CardTitle className="text-nogogeni-white flex flex-col">
              <span className="font-medium text-sm desktop:text-2xl">
                Let&apos;s Connect with
              </span>
              <span className="font-semibold text-lg desktop:text-4xl">
                Nogogeni ITS Team
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                autoComplete="off"
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="desktop:space-y-2">
                      <FormLabel className="text-nogogeni-white desktop:text-lg">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          required
                          placeholder="John"
                          className="text-nogogeni-white bg-nogogeni-white/25 placeholder:text-nogogeni-white/90 border-nogogeni-white/50 focus-visible:ring-transparent focus-visible:border-nogogeni-white text-sm rounded-md desktop:text-lg desktop:py-5 desktop:px-4"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="desktop:space-y-2">
                      <FormLabel className="text-nogogeni-white desktop:text-lg">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          required
                          placeholder="example@gmail.com"
                          className="text-nogogeni-white bg-nogogeni-white/25 placeholder:text-nogogeni-white/90 border-nogogeni-white/50 focus-visible:ring-transparent focus-visible:border-nogogeni-white text-sm rounded-md desktop:text-lg desktop:py-5 desktop:px-4"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="desktop:space-y-2">
                      <FormLabel className="text-nogogeni-white desktop:text-lg">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          required
                          type="tel"
                          placeholder="6281234567890"
                          className="text-nogogeni-white bg-nogogeni-white/25 placeholder:text-nogogeni-white/90 border-nogogeni-white/50 focus-visible:ring-transparent focus-visible:border-nogogeni-white text-sm rounded-md desktop:text-lg desktop:py-5 desktop:px-4"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="desktop:space-y-2">
                      <FormLabel className="text-nogogeni-white desktop:text-lg">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          required
                          rows={5}
                          placeholder="Type your message here..."
                          className="text-nogogeni-white bg-nogogeni-white/25 placeholder:text-nogogeni-white/90 border-nogogeni-white/50 focus-visible:ring-transparent focus-visible:border-nogogeni-white text-sm rounded-md resize-none desktop:text-lg desktop:py-2 desktop:px-4"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  disabled={
                    isLoading ||
                    form.watch("name") === "" ||
                    form.watch("email") === "" ||
                    form.watch("phone") === "" ||
                    form.watch("message") === ""
                  }
                  type="submit"
                  className="w-full rounded-md text-sm desktop:text-base"
                >
                  {isLoading ? (
                    <>
                      <LoaderCircleIcon className="animate-spin" />
                      Loading
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
