import { PrismaClient, Prisma } from "@prisma/client";

import { RoleName } from "../types/rolesTypes";
import { TripStatus } from "../types/tripStatus";

const prisma = new PrismaClient();

const hashedP = "$2b$10$glYOMtehNGf7iiKqxQruIO1MJEZAqo2NU.NgI3T2wr.hRaZOjZ96.";

const roleData: Prisma.RoleCreateInput[] = [
  {
    name: RoleName.LAND_MANAGER,
    description: "Land Manager Role",
  },
  {
    name: RoleName.SYSTEM_ADMIN,
    description: "System Admin Role",
  },
  {
    name: RoleName.STS_MANAGER,
    description: "STS Manager Role",
  },
  {
    name: RoleName.UNASSIGNED,
    description: "Unassigned Role",
  },
];

const userData: Prisma.UserCreateInput[] = [
  {
    username: "Shawon Majid",
    email: "shawon.majid@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.SYSTEM_ADMIN,
      },
    },
  },
  {
    username: "Mehrajul Islam",
    email: "codermehraj@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.LAND_MANAGER,
      },
    },
  },
  {
    username: "Mehrajul Islam 2",
    email: "codermehraj2@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.LAND_MANAGER,
      },
    },
  },

  {
    username: "Nafi Ullah",
    email: "shafinnafiullah@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.STS_MANAGER,
      },
    },
  },
  {
    username: "Nafi Ullah 2",
    email: "shafinnafiullah2@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.STS_MANAGER,
      },
    },
  },

  {
    username: "kuddus",
    email: "kuddus@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.UNASSIGNED,
      },
    },
  },
  {
    username: "kuddus 2",
    email: "kuddus2@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.UNASSIGNED,
      },
    },
  },
  {
    username: "kuddus 3",
    email: "kuddus3@gmail.com",
    hashedPassword: hashedP,
    role: {
      connect: {
        name: RoleName.UNASSIGNED,
      },
    },
  },
];

const vehicleData: Prisma.VehicleCreateInput[] = [
  {
    id: "vid1",
    vehicleNumber: "13-8272",
    vehicleType: "DUMP_TRUCK",
    capacity: 4,
    loadedFuelCostPerKm: 10,
    unloadedFuelCostPerKm: 5,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
  {
    id: "vid2",
    vehicleNumber: "13-8273",
    vehicleType: "OPEN_TRUCK",
    capacity: 2,
    loadedFuelCostPerKm: 14,
    unloadedFuelCostPerKm: 6,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
  {
    id: "vid3",
    vehicleNumber: "13-8274",
    vehicleType: "OPEN_TRUCK",
    capacity: 1,
    loadedFuelCostPerKm: 6,
    unloadedFuelCostPerKm: 1,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
  {
    vehicleNumber: "13-8275",
    vehicleType: "OPEN_TRUCK",
    capacity: 2,
    loadedFuelCostPerKm: 20,
    unloadedFuelCostPerKm: 8,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
  {
    vehicleNumber: "13-8276",
    vehicleType: "COMPACTOR",
    capacity: 5,
    loadedFuelCostPerKm: 25,
    unloadedFuelCostPerKm: 2,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
  {
    vehicleNumber: "13-8277",
    vehicleType: "CONTAINER",
    capacity: 6,
    loadedFuelCostPerKm: 30,
    unloadedFuelCostPerKm: 10,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
  {
    vehicleNumber: "13-8278",
    vehicleType: "DUMP_TRUCK",
    capacity: 3,
    loadedFuelCostPerKm: 12,
    unloadedFuelCostPerKm: 3,
    landFill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
  },
];

const stsData: Prisma.STSCreateInput[] = [
  {
    id: "sts1",
    name: "Mohakhali STS",
    wardNumber: "13",
    capacity: 1000,
    currentTotalWaste: 900,
    latitude: 23.777742178642388,
    longitude: 90.40575221162331
  },
  {
    id: "sts2",
    name: "Gulshan STS",
    wardNumber: "2",
    capacity: 2000,
    currentTotalWaste: 1200,
    latitude: 23.792464932754005,
    longitude: 90.40782465254337
  },

  {
    id: "sts3",
    name: "Bonani STS",
    wardNumber: "4",
    capacity: 1500,
    currentTotalWaste: 200,
    latitude: 23.793630794902622,
    longitude: 90.40660514416635
  },
  {
    id: "sts4",
    name: "Badda STS",
    wardNumber: "4",
    capacity: 1500,
    currentTotalWaste: 900,
    latitude: 23.78042151306244,
    longitude: 90.42669427037866
  },
  {
    id: "sts5",
    name: "Jatrabari STS",
    wardNumber: "4",
    capacity: 1500,
    currentTotalWaste: 200,
    latitude: 23.710484797357275,
    longitude: 90.43479693063576
  },
  {
    id: "sts6",
    name: "Motijheel",
    wardNumber: "4",
    capacity: 1500,
    currentTotalWaste: 1400,
    latitude: 23.72800766871942,
    longitude: 90.41902325467944
  },
];

const landfillData: Prisma.LandfillCreateInput[] = [
  {
    id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
    name: "Amin Bazar",
    capacity: 10000,
    latitude: 23.76431111,
    longitude: 90.3651622,
  },
];

const stsVehicleEntryData: Prisma.STSVehicleEntryCreateInput[] = [
  {
    id: "sv1",
    sts: {
      connect: {
        id: "sts1",
      },
    },
    vehicle: {
      connect: {
        id: "vid1",
      },
    },
    weightOfWaste: 100,
    entryTime: new Date(),
    exitTime: new Date(),
  },
];

const tripData: Prisma.TripCreateInput[] = [
  {
    id: "trip1",
    sts: {
      connect: {
        id: "sts1",
      },
    },
    landfill: {
      connect: {
        id: "c4028362-6c17-4cf0-9b0e-ae20acfa2fbd",
      },
    },
    vehicle: {
      connect: {
        id: "vid1",
      },
    },
    weightOfWaste: 100,
    distance: 100,
    estimatedDuration: 100,
    estimatedFuelCost: 102323,
    tripStatus: TripStatus.PENDING,
  },
];

async function main() {
  console.log("Seeding roles...");
  for (const role of roleData) {
    const newRole = await prisma.role.create({
      data: role,
    });
    console.log(newRole);
  }

  console.log("Seeding users...");
  for (const user of userData) {
    const newUser = await prisma.user.create({
      data: user,
    });
    console.log(newUser);
  }
  console.log("Seeding landfills...");
  for (const landfill of landfillData) {
    const newLandfill = await prisma.landfill.create({
      data: landfill,
    });
    console.log(newLandfill);
  }

  console.log("Seeding STS...");
  for (const sts of stsData) {
    const newSts = await prisma.sTS.create({
      data: sts,
    });
    console.log(newSts);
  }

  console.log("Seeding vehicles...");
  for (const vehicle of vehicleData) {
    const newVehicle = await prisma.vehicle.create({
      data: vehicle,
    });
    console.log(newVehicle);
  }

  console.log("Seeding STS Vehicle Entries...");
  for (const stsVehicleEntry of stsVehicleEntryData) {
    const newStsVehicleEntry = await prisma.sTSVehicleEntry.create({
      data: stsVehicleEntry,
    });
    console.log(newStsVehicleEntry);
  }

  console.log("Seeding trips...");

  for (const trip of tripData) {
    const newTrip = await prisma.trip.create({
      data: trip,
    });
    console.log(newTrip);
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
