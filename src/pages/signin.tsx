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
import { toast } from "sonner";

type CreateResponse =
  | { success: true }
  | { success: false; errors: string[] }
  | undefined;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<CreateResponse>(undefined);

  //Esto lo hice para simular mejor pero en realidad se puede verificar en el front
  const handleSubmit = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data: CreateResponse) => {
        setResponse(data);
        if (data?.success) {
          toast.success("Login succesful");
        } else {
          toast.error("Login failed");
        }
      });
  };

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
                      placeholder="Password"
                      className="h-12 border-slate-700 text-lg text-white focus:border-slate-200"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col px-10">
              <Button
                className="w-full max-w-sm bg-red-600 hover:bg-red-700"
                variant="default"
                onClick={() => handleSubmit()}
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
          {response?.success === false && (
            <div className="mt-4 w-96 rounded-sm border border-red-600 bg-black p-4 text-sm font-semibold lg:border-black lg:bg-opacity-70">
              <ul className="list-inside list-disc text-red-600">
                {response.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
