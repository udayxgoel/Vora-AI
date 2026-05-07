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

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export function SignInView() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setLoading(true);
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
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
    },
  });

  return (
    <AuthShell
      title="Welcome back!"
      subtitle="Enter your details below to continue"
      footerText="Don't have an account yet?"
      footerHref="/register"
      footerLabel="Sign up"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-medium text-[#475467]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    className="h-11 rounded-md border-[#b7c5d1] bg-white px-4 text-sm shadow-none focus-visible:border-[#0077b6] focus-visible:ring-[#0077b6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-medium text-[#475467]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="*********"
                      className="h-11 rounded-md border-[#b7c5d1] bg-white px-4 text-sm shadow-none focus-visible:border-[#0077b6] focus-visible:ring-[#0077b6]/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error && (
            <Alert className="bg-destructive/10 border-none">
              <OctagonAlertIcon className="!text-destructive size-4" />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <Button
            type="submit"
            className="h-11 w-full rounded-md bg-[#0077b6] text-sm font-semibold text-white hover:bg-[#023e8a]"
          >
            Sign in
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
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
              <span>Sign in with Google</span>
            </Button>
          </div>
        </form>
      </Form>
    </AuthShell>
  );
}
