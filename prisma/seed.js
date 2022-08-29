const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      contact: {
        create: {
          phone: "124343434",
          email: "some@gmail.com",
        },
      },
    },
    include: {
      contact: true,
    },
  });

  // console.log("Customer created", createdCustomer);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Jurrasic Park",
      runtimeMins: 103,
      screening: {
        create: {
          startsAt: "2022-09-29T21:07:10.424Z",
          screen: {
            create: {
              number: 3,
            },
          },
        },
      },
      ticket: {
        create: {
          
        }
      }
    },
    include: {
      screening: true,
      ticket: true
    },
  });

  // console.log("createdMovie and time", createdMovie);

  // const createdScreen = await prisma.screen.create({
  //   data: {
  //     number: 11,
  //   },
  // });

  // const createdMovie = await prisma.movie.create({
  //   data: {
  //     title: "Spiderman",
  //     runtimeMins: 140,
  //   },
  // });

  // const createdScreening = await prisma.screening.create({
  //   data: {
  //     startsAt: new Date("August 27, 2022 18:00:00"),
  //     screenId: createdScreen.id,
  //     movieId: createdMovie.id,
  //   },
  // });

  // const createdTicket = await prisma.ticket.create({
  //   data: {
  //     customerId: createdCustomer.id,
  //     screeningId: createdScreening.id,
  //   },
  // });
  // console.log("createdticket", createdTicket);

  // const createdScreen = await prisma.screen.create({
  //   data: {
  //     number: 5,
  //   },
  // });
  // console.log("createdscreen", createdScreen);

  // Add your code here
  //   const createdContact = await prisma.contact.create({
  //     data: {
  //       email: "alice@wnoer.com",
  //       phone: "123456789",
  //       customerId: createdCustomer.id
  //     },
  //   });

  //   console.log("createdContact", createdContact);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
