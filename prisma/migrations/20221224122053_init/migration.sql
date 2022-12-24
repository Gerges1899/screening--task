/*
  Warnings:

  - You are about to drop the column `value` on the `countries` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `countries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `countries` DROP COLUMN `value`,
    DROP COLUMN `year`;

-- CreateTable
CREATE TABLE `values` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `countryId` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `number` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `values` ADD CONSTRAINT `values_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Countries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
