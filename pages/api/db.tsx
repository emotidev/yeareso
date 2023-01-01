// Write a NEXT.js API route which takes The phone number from the form and saves it to the database.

import { getSession } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const { phone } = req.body;
  const { user } = getSession(req, res);

  const db = new PrismaClient();

  let result = await db.resolution.upsert({
      where: {
        email: user.email,
      },
      update: {
        phoneNumber: phone,
      },
      create: {
        email: user.email,
        phoneNumber: phone,
      }
    });

  res.status(200).json(result);
}
