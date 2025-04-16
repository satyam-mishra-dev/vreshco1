"use client";

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GradientBackground from "@/components/ui/background";
import { Form } from "@/components/ui/form";
import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof formSchema>;

const Login = ({ isSignIn = true }: { isSignIn?: boolean }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    // Add your authentication logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 ">
      <GradientBackground />

      <div className="card-border lg:min-w-[566px] z-10 gradient-border">
        <div className="flex flex-col gap-6 card py-14 px-10 backdrop-blur-md bg-black/60 rounded-2xl shadow-xl">
          <div className="flex flex-row gap-2 justify-center">
            <h2 className="text-primary-100 text-white text-2xl font-semibold">Log In</h2>
          </div>

          <h3 className="text-white text-center">
            Missed us? We've got fresh kicks waiting for you !!
          </h3>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 mt-4 form"
            >
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  label="Name"
                  placeholder="Your Name"
                  type="text"
                />
              )}

              <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Your email address"
                type="email"
              />

              <FormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <h4 className="text-sm text-blue-300 text-right">
                <Link href="/passRecovrery">Forgot password</Link>
              </h4>
              <h3 className="text-white text-center">
                or continue with 
              </h3>
              <div className="flex justify-between items-center gap-4 w-full">
                <Button className="flex-1 gradient-border bg-black text-white h-10 flex items-center justify-center gap-2">
                  <Image
                    src="/google-icon-logo-svgrepo-com.svg"
                    width={20}
                    height={20}
                    alt="google"
                  />
                  Google
                </Button>
                <Button className="flex-1 gradient-border bg-black text-white h-10 flex items-center justify-center gap-2">
                  <Image
                    src="/google-icon-logo-svgrepo-com.svg"
                    width={20}
                    height={20}
                    alt="google"
                  />
                  Facebook
                </Button>
              </div>

              <Button className="btn w-full bg-purple-600" type="submit">
                {isSignIn ? "Sign In" : "Create an Account"}
              </Button>
            </form>
          </Form>
              
          <p className="text-center text-white">
            {isSignIn ? "No account yet?" : "Have an account already?"}
            <Link
              href={!isSignIn ? "/sign-in" : "/sign-up"}
              className="font-bold text-user-primary ml-1"
            >
              {!isSignIn ? "Sign In" : "Sign Up"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
