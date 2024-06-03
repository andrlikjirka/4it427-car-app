import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedBrands() {
  await prisma.$executeRaw`INSERT INTO Brand (id, name, createdAt, updatedAt) VALUES ('clwyrejz40000a6d8fgl1tcm7', 'Škoda', '1717406359456', '1717406352882');`;
  await prisma.$executeRaw`INSERT INTO Brand (id, name, createdAt, updatedAt) VALUES ('clwyrergs0001a6d8h9dwvflz', 'Toyota', '1717406369164', '1717406360028');`;
  await prisma.$executeRaw`INSERT INTO Brand (id, name, createdAt, updatedAt) VALUES ('clwyrergs0002a6d8309evdso', 'Ford', '1717406369164', '1717406364211');`;
}

async function seedModels() {
  await prisma.$executeRaw`INSERT INTO CarModel (id, name, brandId, createdAt, updatedAt) VALUES ('clwyrfwlq0003a6d8p06e0g3v', 'Octavia', 'clwyrejz40000a6d8fgl1tcm7', '1717406422479', '1717406411363');`;
  await prisma.$executeRaw`INSERT INTO CarModel (id, name, brandId, createdAt, updatedAt) VALUES ('clwyrg55k0004a6d8n4kdaa2z', 'Fabia', 'clwyrejz40000a6d8fgl1tcm7', '1717406433561', '1717406423830')`;
  await prisma.$executeRaw`INSERT INTO CarModel (id, name, brandId, createdAt, updatedAt) VALUES ('clwyrgca20005a6d8hisenl36', 'LandCruiser', 'clwyrergs0001a6d8h9dwvflz', '1717406442794', '1717406434914');`;
  await prisma.$executeRaw`INSERT INTO CarModel (id, name, brandId, createdAt, updatedAt) VALUES ('clwyrgino0006a6d8pd9yyoc3', 'RAV4', 'clwyrergs0001a6d8h9dwvflz', '1717406451060', '1717406443406');`;
  await prisma.$executeRaw`INSERT INTO CarModel (id, name, brandId, createdAt, updatedAt) VALUES ('clwyrgy260007a6d80fqxnxmq', 'Fiesta', 'clwyrergs0002a6d8309evdso', '1717406471022', '1717406453479');`;
  await prisma.$executeRaw`INSERT INTO CarModel (id, name, brandId, createdAt, updatedAt) VALUES ('clwyrh8qt0008a6d8h3t0mpva', 'Mustang', 'clwyrergs0002a6d8309evdso', '1717406484870', '1717406472436');`;
}

async function seedCars() {
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('4368d4c9-82a5-40b6-b21d-a673829145a4', 'Zachovalá oktávka co odveze celou rodinu a spoustu zavazadel', 'Plzeň', 300000, 'modrá', 2022, 'clwyrfwlq0003a6d8p06e0g3v', 'clwyrejz40000a6d8fgl1tcm7', '1717406578256', '1717406820925', 'diesel', 100000, 110);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('b08b38b0-ed47-4d8d-9809-54895d3b0118', 'Nic moc fábka, ale z bodu A do bodu B tě odveze', 'Klatovy', 80000, 'stříbrná', 2010, 'clwyrg55k0004a6d8n4kdaa2z', 'clwyrejz40000a6d8fgl1tcm7', '1717406737852', '1717406663904', 'benzín', 220000, 65);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('badc9985-3569-45c3-ab0c-fb802b865147', 'Nadupaná kára se kterou budeš všude včas', 'Praha', 700000, 'žlutá', 2022, 'clwyrh8qt0008a6d8h3t0mpva', 'clwyrergs0002a6d8309evdso', '1717406805628', '1717406817880', 'benzín', 45000, 320);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('eb492018-8eab-443a-b2b5-d0ac42bcc963', 'Super odolné auto do každého terénu', 'Praha', 390000, 'bílá', 2018, 'clwyrgca20005a6d8hisenl36', 'clwyrergs0001a6d8h9dwvflz', '1717406871880', '1717406823503', 'diesel', 150000, 220);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('d1d505d6-2c8b-435f-9c3e-f06f6991ea80', 'Skvělé auto pro rodinu', 'Plzeň', 590000, 'černá', 2020, 'clwyrgino0006a6d8pd9yyoc3', 'clwyrergs0001a6d8h9dwvflz', '1717406923598', '1717406874569', 'hybrid', 80000, 180);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('f06e981d-a390-4d67-87dd-a74a5814a5b3', 'Simply clever rodinné auto', 'Praha', 500000, 'červená', 2020, 'clwyrfwlq0003a6d8p06e0g3v', 'clwyrejz40000a6d8fgl1tcm7', '1717424348331', '1717424348331', 'diesel', 80000, 146);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('d396ef58-a178-4cd7-9699-2d062fe9aa6e', 'Normální obyčejné auto', 'Brno', 110000, 'červená', 2010, 'clwyrgy260007a6d80fqxnxmq', 'clwyrergs0002a6d8309evdso', '1717425806696', '1717425806696', 'diesel', 200000, 60);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('f8d1590a-e84f-47d1-ba58-5a46b661d5da', 'Normální obyčejné auto', 'Brno', 110000, 'červená', 2010, 'clwyrgy260007a6d80fqxnxmq', 'clwyrergs0002a6d8309evdso', '1717425808438', '1717425808438', 'diesel', 200000, 60);`;
  await prisma.$executeRaw`INSERT INTO Car (id, description, location, price, color, year, modelId, brandId, createdAt, updatedAt, fuel, mileage, power) VALUES ('2caefe62-d4b1-4545-bdfc-cf6609261ac5', 'Velmi dobré a všestranné auto', 'Klatovy', 490000, 'bílá', 2020, 'clwyrgino0006a6d8pd9yyoc3', 'clwyrergs0001a6d8h9dwvflz', '1717432566852', '1717432566852', 'benzín', 80000, 140);`;
}

async function main() {
  await seedBrands();
  await seedModels();
  await seedCars();
}

await main();
