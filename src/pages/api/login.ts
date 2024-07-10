import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be text",
    })
    .email({ message: "Invalid email" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const login = loginSchema.safeParse(req.body);
  if (!login.success) {
    res.status(400).json({
      success: false,
      errors: login.error.errors.map((error) => error.message),
    });
    return;
  }

  res.status(200).json({ success: true });
}
