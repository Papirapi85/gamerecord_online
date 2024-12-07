import { prisma } from './prisma-client';

async function up() {
    await prisma.gameName.createMany({
        data:[
            {
                "id": 1,
                "name": "NFS Most Wanted 2005",
                "createdAt": "2024-08-06T21:08:16.720Z",
                "updatedAt": "2024-08-06T21:08:16.720Z"
            },
            {
                "id": 2,
                "name": "NFS SHIFT",
                "createdAt": "2024-08-13T22:50:36.375Z",
                "updatedAt": "2024-08-13T22:50:36.375Z"
            },
            {
                "id": 3,
                "name": "NFS UNDERGROUND",
                "createdAt": "2024-08-13T22:55:14.165Z",
                "updatedAt": "2024-08-13T22:55:14.165Z"
            },
            {
                "id": 4,
                "name": "NFS CARBON",
                "createdAt": "2024-08-17T07:08:54.891Z",
                "updatedAt": "2024-08-17T07:08:54.891Z"
            },
            {
                "id": 5,
                "name": "NFS Most Wanted 2005 5 laps",
                "createdAt": "2024-09-03T23:21:58.452Z",
                "updatedAt": "2024-09-03T23:21:58.452Z"
            },
            {
                "id": 8,
                "name": "NFS UNDERCOVER",
                "createdAt": "2024-09-06T23:14:51.124Z",
                "updatedAt": "2024-09-06T23:14:51.124Z"
            },
            {
                "id": 9,
                "name": "NFS PROSTREET",
                "createdAt": "2024-09-06T23:15:48.673Z",
                "updatedAt": "2024-09-06T23:15:48.673Z"
            },
            {
                "id": 10,
                "name": "NFS SHIFT 2",
                "createdAt": "2024-09-06T23:16:04.983Z",
                "updatedAt": "2024-09-06T23:16:04.983Z"
            },
            {
                "id": 11,
                "name": "NFS THE RUN",
                "createdAt": "2024-09-06T23:16:38.084Z",
                "updatedAt": "2024-09-06T23:16:38.084Z"
            },
            {
                "id": 12,
                "name": "NFS WORLD",
                "createdAt": "2024-09-06T23:16:48.749Z",
                "updatedAt": "2024-09-06T23:16:48.749Z"
            },
            {
                "id": 13,
                "name": "NFS HOT PURSUIT",
                "createdAt": "2024-09-06T23:17:48.571Z",
                "updatedAt": "2024-09-06T23:17:48.571Z"
            },
            {
                "id": 14,
                "name": "NFS RIVALS",
                "createdAt": "2024-09-06T23:18:50.596Z",
                "updatedAt": "2024-09-06T23:18:50.596Z"
            },
            {
                "id": 15,
                "name": "NFS Most Wanted 2012",
                "createdAt": "2024-09-06T23:19:41.412Z",
                "updatedAt": "2024-09-06T23:19:41.412Z"
            },
            {
                "id": 7,
                "name": "NFS UNDERGROUND 2 NO NITRO",
                "createdAt": "2024-09-06T23:14:01.027Z",
                "updatedAt": "2024-09-06T23:14:01.027Z"
            },
            {
                "id": 16,
                "name": "NFS Hot Pursuit Remastered",
                "createdAt": "2024-10-23T19:24:50.800Z",
                "updatedAt": "2024-10-23T19:24:50.800Z"
            }
        ],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "GameName" RESTART IDENTITY CASCADE`;
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