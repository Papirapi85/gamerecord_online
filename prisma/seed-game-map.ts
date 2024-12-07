import { prisma } from './prisma-client';

async function up() {
    await prisma.gameMap.createMany({
        data:[
    {
        "id": 26,
        "gamenameId": 4,
        "description": "North Broadway",
        "createdAt": "2024-08-17T09:50:34.484Z",
        "updatedAt": "2024-08-17T09:50:34.484Z"
    },
    {
        "id": 27,
        "gamenameId": 4,
        "description": "Main Street",
        "createdAt": "2024-08-17T09:54:29.425Z",
        "updatedAt": "2024-08-17T09:54:29.425Z"
    },
    {
        "id": 28,
        "gamenameId": 4,
        "description": "Salazar Street",
        "createdAt": "2024-08-17T09:58:26.509Z",
        "updatedAt": "2024-08-17T09:58:26.509Z"
    },
    {
        "id": 1,
        "gamenameId": 1,
        "description": "City Perimeter",
        "createdAt": "2024-08-06T21:10:31.775Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 2,
        "gamenameId": 1,
        "description": "Petersburg",
        "createdAt": "2024-08-06T21:12:12.110Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 3,
        "gamenameId": 1,
        "description": "Hillcrest Boundary",
        "createdAt": "2024-08-06T23:52:56.051Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 4,
        "gamenameId": 1,
        "description": "Ironwood Estates",
        "createdAt": "2024-08-07T12:02:05.774Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 5,
        "gamenameId": 1,
        "description": "Highlands",
        "createdAt": "2024-08-07T17:27:39.197Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 6,
        "gamenameId": 1,
        "description": "Heritage Heights",
        "createdAt": "2024-08-07T19:03:44.557Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 7,
        "gamenameId": 1,
        "description": "Hospital Switchbank",
        "createdAt": "2024-08-07T20:46:53.561Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 8,
        "gamenameId": 1,
        "description": "Bay Bridge",
        "createdAt": "2024-08-09T15:28:17.228Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 9,
        "gamenameId": 1,
        "description": "Little Italy",
        "createdAt": "2024-08-09T15:44:19.891Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 10,
        "gamenameId": 1,
        "description": "Century Square",
        "createdAt": "2024-08-09T15:53:21.195Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 11,
        "gamenameId": 1,
        "description": "Campus Way",
        "createdAt": "2024-08-09T16:04:40.166Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 12,
        "gamenameId": 1,
        "description": "Omega",
        "createdAt": "2024-08-09T16:12:48.174Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 13,
        "gamenameId": 1,
        "description": "Diamond",
        "createdAt": "2024-08-09T16:21:43.786Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 14,
        "gamenameId": 1,
        "description": "Circle Rose",
        "createdAt": "2024-08-09T22:51:49.984Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 15,
        "gamenameId": 1,
        "description": "Dunwich Bay",
        "createdAt": "2024-08-09T23:07:36.607Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 16,
        "gamenameId": 1,
        "description": "Clubhouse",
        "createdAt": "2024-08-10T13:35:58.473Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 17,
        "gamenameId": 1,
        "description": "Boundary",
        "createdAt": "2024-08-10T14:13:23.821Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 18,
        "gamenameId": 1,
        "description": "Camden Tunnel",
        "createdAt": "2024-08-10T14:27:53.645Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 19,
        "gamenameId": 1,
        "description": "Campus Interchange",
        "createdAt": "2024-08-10T14:44:36.644Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 20,
        "gamenameId": 1,
        "description": "Country Club",
        "createdAt": "2024-08-10T14:45:23.256Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 21,
        "gamenameId": 1,
        "description": "East Park",
        "createdAt": "2024-08-10T16:04:17.860Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 22,
        "gamenameId": 1,
        "description": "Gray Point",
        "createdAt": "2024-08-10T16:05:01.704Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 23,
        "gamenameId": 1,
        "description": "Oil Purification",
        "createdAt": "2024-08-10T21:32:52.108Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 24,
        "gamenameId": 1,
        "description": "Omega & Industries",
        "createdAt": "2024-08-10T21:45:04.536Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 25,
        "gamenameId": 1,
        "description": "Ironhorse",
        "createdAt": "2024-08-10T21:58:07.042Z",
        "updatedAt": "2024-08-29T10:55:02.169Z"
    },
    {
        "id": 29,
        "gamenameId": 5,
        "description": "Ironwood Estates",
        "createdAt": "2024-09-03T23:22:15.424Z",
        "updatedAt": "2024-09-03T23:22:15.424Z"
    },
    {
        "id": 30,
        "gamenameId": 2,
        "description": "Dacota Tri-Oval",
        "createdAt": "2024-09-06T01:56:22.935Z",
        "updatedAt": "2024-09-06T01:56:22.935Z"
    },
    {
        "id": 31,
        "gamenameId": 3,
        "description": "Olympic Square",
        "createdAt": "2024-09-06T23:00:00.985Z",
        "updatedAt": "2024-09-06T23:00:00.985Z"
    },
    {
        "id": 32,
        "gamenameId": 7,
        "description": "Freemont UP",
        "createdAt": "2024-09-07T23:04:28.516Z",
        "updatedAt": "2024-09-07T23:04:28.516Z"
    }
],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "GameMap" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
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