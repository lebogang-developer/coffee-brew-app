-- CreateTable
CREATE TABLE "Brew" (
    "id" SERIAL NOT NULL,
    "coffee" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brew_pkey" PRIMARY KEY ("id")
);
