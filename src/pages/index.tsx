import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import type { DogFact } from "./api/dog-fact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentita Maestro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex grow flex-col items-center justify-center gap-10"> */}
      <DailyDogFact />
      {/* </main> */}
    </>
  );
}

function DailyDogFact() {
  const { data, isError } = useQuery<DogFact>({ queryKey: ["/dog-fact"] });
  if (!data) {
    return (
      <div className="mx-auto mt-10 w-full max-w-md">Loading doggy fact...</div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto mt-10 w-full max-w-md">Otro dia sera...</div>
    );
  }

  return (
    <Card className="mx-auto mt-10 w-full max-w-xl">
      <CardHeader>
        <CardTitle>Doggy fact of the moment!</CardTitle>
        <CardDescription>{data.attributes.body}</CardDescription>
      </CardHeader>
    </Card>
  );
}
