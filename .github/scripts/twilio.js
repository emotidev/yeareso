const { Twilio } = require("twilio");
const { PrismaClient } = require("@prisma/client");

if (req.method !== "POST") {
  res.status(405).json({ message: "Method not allowed" });
  return;
}

const AUTH_TOKEN = req.headers.authorization;

if (AUTH_TOKEN !== process.env.ADMIN_AUTH_TOKEN) {
  res.status(401).json({ message: "Unauthorized" });
  return;
}

const db = new PrismaClient();
const twilio = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

let result = await db.resolution.findMany({
  where: {
    phoneNumber: {
      not: null,
    },
  },
});

for (const user of result) {
  await twilio.messages.create({
    body: "Reminder for your resolution :D",
    from: process.env.TWILIO_PHONE_NUMBER,
    to: user.phoneNumber,
  });
}

res.status(200).json(result);