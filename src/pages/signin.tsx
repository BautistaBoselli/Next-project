import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative h-full min-h-screen w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full min-h-screen w-full bg-black lg:bg-opacity-50">
        <nav className="ml-32 px-12 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="logo" className="w-40" />
        </nav>
        <div className="flex h-screen flex-col items-center justify-start">
          <Card className="w-full max-w-sm rounded-sm border-black bg-black lg:bg-opacity-70">
            <CardHeader>
              <CardTitle className="px-4 text-3xl text-white">
                Sign In
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4 px-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="name"
                      placeholder="Email"
                      className="h-12 border-slate-700 text-lg text-white focus:border-slate-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="name"
                      placeholder="Contraseña"
                      className="h-12 border-slate-700 text-lg"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col px-10">
              <Button
                className="w-full max-w-sm bg-red-600 hover:bg-red-700"
                variant="default"
              >
                Sign In
              </Button>
              <p className="mt-4 flex items-center gap-1 text-sm text-slate-600">
                First time using Netflix?
                <span className="font-semibold text-white">
                  {" "}
                  Create an account{" "}
                </span>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
