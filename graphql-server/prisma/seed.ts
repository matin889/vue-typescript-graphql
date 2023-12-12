// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: "Sandra",
      messages: {
        create: [
          {
            body: "A Note for Sandra",
          },
          {
            body: "Another note for Sandra",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Torsten",
      messages: {
        create: [
          {
            body: "A Note for Torsten",
          },
          {
            body: "Another note for Torsten",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Stina",
      messages: {
        create: [
          {
            body: "A Note for Stina",
          },
          {
            body: "Another note for Stina",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...");
});
