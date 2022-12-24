/*
  Warnings:

  - A unique constraint covering the columns `[country]` on the table `Countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[year]` on the table `Values` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Countries_country_key` ON `Countries`(`country`);

-- CreateIndex
CREATE UNIQUE INDEX `Values_year_key` ON `Values`(`year`);
