// prisma/utils/testConnect.ts


const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log('Connection successful, found users:', users);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


//   ts-node prisma/utils/testConnect.ts
