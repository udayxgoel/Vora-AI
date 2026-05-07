"use client";

import { OctagonAlertIcon } from "lucide-react";
import { AuthShell } from "@/modules/views/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignUpView() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setLoading(true);
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setLoading(false);
          router.push("/");
        },
        onError: ({ error }) => {
          setError(error.message);
          setLoading(false);
        },
      },
    );
  };

  const onSocial = async (provider: "google") => {
    setError(null);
    setLoading(true);
    await authClient.signIn.social(
      {
        provider: provider,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setLoading(false);
        },
        onError: ({ error }) => {
          setError(error.message);
          setLoading(false);
        },
      },
    );
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  return (
    <AuthShell
      title="Let's get started!"
      subtitle="Enter your details below to continue"
      footerText="Already have an account?"
      footerHref="/login"
      footerLabel="Sign in"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="gap-1.5">
                <FormLabel className="text-xs font-medium text-[#475467]">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="h-10 rounded-md border-[#b7c5d1] bg-white px-4 text-sm shadow-none focus-visible:border-[#0077b6] focus-visible:ring-[#0077b6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="gap-1.5">
                <FormLabel className="text-xs font-medium text-[#475467]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    className="h-10 rounded-md border-[#b7c5d1] bg-white px-4 text-sm shadow-none focus-visible:border-[#0077b6] focus-visible:ring-[#0077b6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="gap-1.5">
                <FormLabel className="text-xs font-medium text-[#475467]">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="*********"
                    className="h-10 rounded-md border-[#b7c5d1] bg-white px-4 text-sm shadow-none focus-visible:border-[#0077b6] focus-visible:ring-[#0077b6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="gap-1.5">
                <FormLabel className="text-xs font-medium text-[#475467]">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="*********"
                    className="h-10 rounded-md border-[#b7c5d1] bg-white px-4 text-sm shadow-none focus-visible:border-[#0077b6] focus-visible:ring-[#0077b6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          {error && (
            <Alert className="bg-destructive/10 border-none">
              <OctagonAlertIcon className="!text-destructive size-4" />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <Button
            type="submit"
            className="h-10 w-full rounded-md bg-[#0077b6] text-sm font-semibold text-white hover:bg-[#023e8a]"
          >
            Sign up
          </Button>
          <div className="after:border-border relative text-center text-xs after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <div>
            <Button
              disabled={loading}
              onClick={() => onSocial("google")}
              type="button"
              variant="outline"
              className="h-12 w-full rounded-full border border-[#747574] bg-white px-5 text-[17px] font-medium text-[#3c4043] shadow-none hover:bg-white hover:text-[#202124] sm:text-lg cursor-pointer"
            >
              <FcGoogle className="size-7" />
              <span>Sign up with Google</span>
            </Button>
          </div>
        </form>
      </Form>
    </AuthShell>
  );
}
