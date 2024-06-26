const dotenv = require('dotenv');
dotenv.config();

const { PrismaClient } = require('@prisma/client');
const { dot } = require('node:test/reporters');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: {
          title: "Hello World"
        }
      },
      profile: {
        create: {
          bio: "I like turtles"
        }
      }
    }
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  });
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });