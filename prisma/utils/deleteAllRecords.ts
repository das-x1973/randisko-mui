import  prisma from "../client"


async function deleteAllRecords() {
  try {
    // Start a transaction to delete all records from multiple models
    await prisma.$transaction([
      prisma.account.deleteMany(),
      prisma.session.deleteMany(),
      prisma.user.deleteMany(),
      prisma.verificationToken.deleteMany(),
    ]);

    console.log('All records have been deleted from the database.');
  } catch (error) {
    console.error('Error occurred while deleting records:', error);
  } finally {
    // Disconnect when finished
    await prisma.$disconnect();
  }
}

// Call the function to delete all records
deleteAllRecords();

// cd prisma/utils && npx ts-node --compiler-options '{"module":"commonjs"}' deleteAllRecords.ts

