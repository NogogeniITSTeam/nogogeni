import z from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { ComponentProps, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { LoaderCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.email(),
});

function Subscription({ className, ...props }: ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribe = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const email = form.getValues("email");

    try {
      const res = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: email.split("@")[0],
          phone: "",
          message: "",
          subscribed_at: new Date().toISOString(),
        }),
      });

      if (res.status !== 200) {
        throw new Error(`failed to send email to google sheet`);
      }

      toast.success("Thank you for subscribing!", { richColors: true });
      form.setValue("email", "");
      setIsDialogOpened(false);
    } catch {
      toast.error("Failed to subscribe, please try again later", {
        richColors: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  function onSubmit() {
    setIsDialogOpened(true);
  }

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <h3 className="font-bold text-xl desktop:text-[28px]">Stay Up to Date</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex justify-between items-center gap-2"
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
                    className="text-sm placeholder:text-nogogeni-white/90 ring-nogogeni-white focus-visible:ring-transparent focus-visible:border-nogogeni-white/50 rounded-md"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading || form.watch("email") === ""}
            type="submit"
            variant="secondary"
            size="small"
            className="py-2 rounded-md"
          >
            Subscribe
          </Button>

          {isDialogOpened ? (
            <AlertDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
              <AlertDialogContent className="text-nogogeni-black w-96">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Please check your email again
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isLoading} className="py-2 px-6">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    disabled={isLoading}
                    onClick={subscribe}
                    className="py-2 px-6"
                  >
                    {isLoading ? (
                      <>
                        <LoaderCircleIcon className="animate-spin" />
                        Loading
                      </>
                    ) : (
                      "Subscribe"
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
    </div>
  );
}

export { Subscription };
