import { PrismaClient } from "@prisma/client";

// Use a global variable to preserve the PrismaClient instance across module reloads
// in development (prevents exhausting database connections during HMR).
let prisma;
if (typeof global !== "undefined") {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }
  prisma = global.__prisma;
} else {
  prisma = new PrismaClient();
}

export default prisma;
