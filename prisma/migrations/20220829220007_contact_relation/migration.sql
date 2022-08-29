/*
  Warnings:

  - You are about to drop the column `contactId` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movieId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "contactId";

-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movieId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Screening_movieId_key" ON "Screening"("movieId");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
