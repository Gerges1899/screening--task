-- DropForeignKey
ALTER TABLE `values` DROP FOREIGN KEY `values_countryId_fkey`;

-- AddForeignKey
ALTER TABLE `Values` ADD CONSTRAINT `Values_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Countries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
