import { type NextApiRequest, type NextApiResponse } from "next";

type DogData = {
  data: DogFact[];
};

export type DogFact = {
  id: string;
  type: string;
  attributes: {
    body: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1");
    if (!response.ok) {
      throw new Error("Error al obtener dog fact, otro dia será...");
    }
    const data: DogData = await response.json();
    res.status(200).json(data.data[0]);
  } catch (error) {
    res.status(500).json(null);
  }
}
