import { prisma } from './prisma-client';

async function up() {
    await prisma.gameRecords.createMany({
        data:[
            {
                "id": 59,
                "name": "NFS UNDERGROUND 2 NO NITRO",
                "description": "Freemont UP",
                "timestate": "00:00:26.410",
                "linkvideo": "https://www.youtube.com/watch?v=ynDt9HfZL2A",
                "img": "be9888f1-a5e9-4922-8d4f-0728b334771b.jpg",
                "userId": 1,
                "createdAt": "2024-09-07T23:10:31.972Z",
                "updatedAt": "2024-09-10T04:03:40.469Z"
            },
            {
                "id": 35,
                "name": "NFS CARBON",
                "description": "North Broadway",
                "timestate": "00:00:58.320",
                "linkvideo": "",
                "img": "59c4664a-cce2-451d-9255-8ad8e2b1ed6a.jpg",
                "userId": 2,
                "createdAt": "2024-08-17T09:51:05.584Z",
                "updatedAt": "2024-08-17T09:51:05.584Z"
            },
            {
                "id": 57,
                "name": "NFS UNDERGROUND",
                "description": "Olympic Square",
                "timestate": "00:00:42.920",
                "linkvideo": "https://youtu.be/watch?v=kuzq1cR0YNw",
                "img": "348e094d-abde-4bd3-8cbb-238c8366f9f5.jpg",
                "userId": 1,
                "createdAt": "2024-09-06T23:09:04.169Z",
                "updatedAt": "2024-09-10T04:05:33.351Z"
            },
            {
                "id": 8,
                "name": "NFS Most Wanted 2005",
                "description": "Highlands",
                "timestate": "00:00:38.200",
                "linkvideo": "https://www.youtube.com/watch?v=sxsNc1hERP8",
                "img": "2ad76193-2116-43cf-82cf-b97c5670fe68.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T14:47:07.322Z",
                "updatedAt": "2024-09-01T19:29:54.552Z"
            },
            {
                "id": 55,
                "name": "NFS SHIFT",
                "description": "Dacota Tri-Oval",
                "timestate": "00:00:36.600",
                "linkvideo": "https://www.youtube.com/watch?v=nE2ENkNf8so&t",
                "img": "d00cf9b5-7984-4c6f-b9f6-e5e7644800ba.jpg",
                "userId": 1,
                "createdAt": "2024-09-06T01:58:34.640Z",
                "updatedAt": "2024-09-10T04:07:06.711Z"
            },
            {
                "id": 53,
                "name": "NFS Most Wanted 2005",
                "description": "Ironwood Estates",
                "timestate": "00:00:37.800",
                "linkvideo": "https://www.youtube.com/watch?v=FNe-8pZV3Ak",
                "img": "fdae62cb-0354-4d4a-a92b-5bd9e556773d.jpg",
                "userId": 1,
                "createdAt": "2024-09-05T22:47:12.380Z",
                "updatedAt": "2024-09-10T04:08:26.725Z"
            },
            {
                "id": 36,
                "name": "NFS CARBON",
                "description": "Main Street",
                "timestate": "00:00:47.190",
                "linkvideo": "",
                "img": "b866b0d4-354e-4fe2-a0aa-10755cbaea1f.jpg",
                "userId": 2,
                "createdAt": "2024-08-17T09:55:07.162Z",
                "updatedAt": "2024-08-17T09:55:07.162Z"
            },
            {
                "id": 37,
                "name": "NFS CARBON",
                "description": "Salazar Street",
                "timestate": "00:00:44.490",
                "linkvideo": "",
                "img": "be1ed5a2-751c-4a62-bcf8-186800000094.jpg",
                "userId": 2,
                "createdAt": "2024-08-17T09:58:44.567Z",
                "updatedAt": "2024-08-17T09:58:44.567Z"
            },
            {
                "id": 38,
                "name": "NFS Most Wanted 2005",
                "description": "Ironwood Estates",
                "timestate": "00:00:37.840",
                "linkvideo": "https://www.youtube.com/watch?v=gBQqrQSCbhc",
                "img": "35737971-e5ed-480a-9e00-2da052a8b473.jpg",
                "userId": 2,
                "createdAt": "2024-08-22T17:22:52.851Z",
                "updatedAt": "2024-09-02T18:43:31.506Z"
            },
            {
                "id": 3,
                "name": "NFS Most Wanted 2005",
                "description": "Hillcrest Boundary",
                "timestate": "00:01:38.800",
                "linkvideo": "",
                "img": "cfe1e45d-7a7f-4762-b996-f0b9c8be5269.jpg",
                "userId": 1,
                "createdAt": "2024-08-06T23:53:19.911Z",
                "updatedAt": "2024-09-05T00:25:53.590Z"
            },
            {
                "id": 7,
                "name": "NFS Most Wanted 2005",
                "description": "Hospital Switchbank",
                "timestate": "00:01:15.620",
                "linkvideo": "",
                "img": "6525b0e1-71a6-418c-99ab-c31e73210fd5.jpg",
                "userId": 1,
                "createdAt": "2024-08-07T20:47:30.720Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 11,
                "name": "NFS Most Wanted 2005",
                "description": "Bay Bridge",
                "timestate": "00:01:10.910",
                "linkvideo": "",
                "img": "510ecba9-51a0-4f61-9d23-30d42b0da38f.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T15:29:23.980Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 12,
                "name": "NFS Most Wanted 2005",
                "description": "Little Italy",
                "timestate": "00:01:00.350",
                "linkvideo": "",
                "img": "683c75c9-fb36-4deb-8a0a-eb24e0335c5b.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T15:44:53.657Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 13,
                "name": "NFS Most Wanted 2005",
                "description": "Century Square",
                "timestate": "00:00:45.020",
                "linkvideo": "",
                "img": "de4c4f76-cf6c-44c0-84c8-3322d0e70752.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T15:53:48.494Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 14,
                "name": "NFS Most Wanted 2005",
                "description": "Campus Way",
                "timestate": "00:01:10.160",
                "linkvideo": "",
                "img": "61f8d167-54ef-4116-8cfe-baa461aec8c5.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T16:06:16.336Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 15,
                "name": "NFS Most Wanted 2005",
                "description": "Omega",
                "timestate": "00:01:06.950",
                "linkvideo": "",
                "img": "cfec2a7c-40ee-4b7d-b590-67ad5b875f0a.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T16:13:29.027Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 6,
                "name": "NFS Most Wanted 2005",
                "description": "Heritage Heights",
                "timestate": "00:01:12.280",
                "linkvideo": "",
                "img": "471ed517-51a8-4bdb-99ba-605e4f47721c.jpg",
                "userId": 1,
                "createdAt": "2024-08-07T19:04:39.871Z",
                "updatedAt": "2024-09-05T02:55:13.707Z"
            },
            {
                "id": 16,
                "name": "NFS Most Wanted 2005",
                "description": "Diamond",
                "timestate": "00:01:37.180",
                "linkvideo": "",
                "img": "8f2e2a7d-4aac-42cf-b774-f05c76d48075.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T16:22:08.946Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 19,
                "name": "NFS Most Wanted 2005",
                "description": "Hospital Switchbank",
                "timestate": "00:01:15.530",
                "linkvideo": "",
                "img": "b188d5b7-0ba5-4646-8621-f46204d17f69.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T20:53:11.379Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 20,
                "name": "NFS Most Wanted 2005",
                "description": "Heritage Heights",
                "timestate": "00:01:11.990",
                "linkvideo": "",
                "img": "52e0e33d-1896-4d05-9ca7-0b24e58b5138.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T22:37:51.800Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 21,
                "name": "NFS Most Wanted 2005",
                "description": "Circle Rose",
                "timestate": "00:01:16.280",
                "linkvideo": "",
                "img": "fa308945-6894-467b-9494-e992c4e1ea41.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T22:52:36.036Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 22,
                "name": "NFS Most Wanted 2005",
                "description": "Dunwich Bay",
                "timestate": "00:01:16.230",
                "linkvideo": "",
                "img": "d1edb4ad-ed36-4373-a6bf-39be59531916.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T23:08:34.876Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 23,
                "name": "NFS Most Wanted 2005",
                "description": "Clubhouse",
                "timestate": "00:01:43.700",
                "linkvideo": "",
                "img": "67b5deeb-9d5b-47af-b149-7e2780fa55b3.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T13:36:24.518Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 24,
                "name": "NFS Most Wanted 2005",
                "description": "Boundary",
                "timestate": "00:01:07.430",
                "linkvideo": "",
                "img": "6cdfc0fc-cf99-436f-b5ae-dfecd4b535c0.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T14:13:52.592Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 25,
                "name": "NFS Most Wanted 2005",
                "description": "Camden Tunnel",
                "timestate": "00:01:14.360",
                "linkvideo": "",
                "img": "22e091d2-5f51-4984-b8b9-6cfbf33974a9.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T14:28:18.623Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 26,
                "name": "NFS Most Wanted 2005",
                "description": "Campus Interchange",
                "timestate": "00:02:05.180",
                "linkvideo": "",
                "img": "1f64be3a-4603-4d20-9afa-3f425e0e2fcf.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T14:45:04.026Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 27,
                "name": "NFS Most Wanted 2005",
                "description": "Country Club",
                "timestate": "00:02:06.060",
                "linkvideo": "",
                "img": "33deb31c-7250-4135-a7f6-99a02c8ebe30.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T14:45:56.128Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 28,
                "name": "NFS Most Wanted 2005",
                "description": "East Park",
                "timestate": "00:01:28.430",
                "linkvideo": "",
                "img": "eab55406-4780-488d-b5f2-42e9bcc7d469.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T16:04:46.787Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 29,
                "name": "NFS Most Wanted 2005",
                "description": "Gray Point",
                "timestate": "00:01:18.690",
                "linkvideo": "",
                "img": "01ae3a77-6ca0-4ce8-97d8-ae8bd6509273.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T16:05:30.674Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 30,
                "name": "NFS Most Wanted 2005",
                "description": "Oil Purification",
                "timestate": "00:01:26.900",
                "linkvideo": "",
                "img": "2258f6e8-47c3-4509-9e6e-1a175cf4477d.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T21:33:28.819Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 31,
                "name": "NFS Most Wanted 2005",
                "description": "Omega & Industries",
                "timestate": "00:01:38.280",
                "linkvideo": "",
                "img": "4117ca34-fb2c-4c8f-8548-7ec8dce7f3c9.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T21:45:24.750Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 32,
                "name": "NFS Most Wanted 2005",
                "description": "Ironhorse",
                "timestate": "00:01:30.120",
                "linkvideo": "",
                "img": "af4a78e3-4e9f-4464-be66-01024b98a415.jpg",
                "userId": 2,
                "createdAt": "2024-08-10T21:58:36.319Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 17,
                "name": "NFS Most Wanted 2005",
                "description": "Hillcrest Boundary",
                "timestate": "00:01:35.540",
                "linkvideo": "",
                "img": "ee8c34c8-c24a-4398-b623-0f5082aebbdb.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T19:55:27.445Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 9,
                "name": "NFS Most Wanted 2005",
                "description": "Ironwood Estates",
                "timestate": "00:00:38.090",
                "linkvideo": "",
                "img": "dd0e8276-2644-404e-a03d-c5ea41ba8587.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T14:57:32.754Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 18,
                "name": "NFS Most Wanted 2005",
                "description": "City Perimeter",
                "timestate": "00:01:25.360",
                "linkvideo": "",
                "img": "74645647-09e9-4d92-b019-0b25250c987c.jpg",
                "userId": 2,
                "createdAt": "2024-08-09T20:34:54.512Z",
                "updatedAt": "2024-08-29T10:52:26.746Z"
            },
            {
                "id": 42,
                "name": "NFS Most Wanted 2005",
                "description": "Petersburg",
                "timestate": "00:00:51.930",
                "linkvideo": "",
                "img": "b273df10-1bb2-4f28-8157-216a8130b8cb.jpg",
                "userId": 2,
                "createdAt": "2024-09-01T03:01:52.672Z",
                "updatedAt": "2024-09-01T03:01:52.672Z"
            },
            {
                "id": 48,
                "name": "NFS Most Wanted 2005",
                "description": "Petersburg",
                "timestate": "00:00:50.960",
                "linkvideo": "https://www.youtube.com/watch?v=jJGvJqXD070",
                "img": "7786fd65-a079-41f1-981d-201b3f19f564.jpg",
                "userId": 1,
                "createdAt": "2024-09-05T02:24:31.634Z",
                "updatedAt": "2024-09-10T04:04:26.442Z"
            },
            {
                "id": 43,
                "name": "NFS Most Wanted 2005",
                "description": "City Perimeter",
                "timestate": "00:01:23.910",
                "linkvideo": "",
                "img": "7d282fed-8f3f-4471-b65a-71b1e9f4e545.jpg",
                "userId": 2,
                "createdAt": "2024-09-01T19:45:47.268Z",
                "updatedAt": "2024-09-01T19:45:47.268Z"
            },
            {
                "id": 54,
                "name": "NFS Most Wanted 2005 5 laps",
                "description": "Ironwood Estates",
                "timestate": "00:03:20.730",
                "linkvideo": "https://youtu.be/watch?v=kuzq1cR0YNw",
                "img": "453a089a-2af5-4ed2-a628-973a978daed7.jpg",
                "userId": 1,
                "createdAt": "2024-09-06T01:10:18.287Z",
                "updatedAt": "2024-09-10T04:05:39.226Z"
            },
            {
                "id": 56,
                "name": "NFS UNDERGROUND",
                "description": "Olympic Square",
                "timestate": "00:00:42.810",
                "linkvideo": "https://youtu.be/watch?v=kuzq1cR0YNw",
                "img": "7b46253f-d4cd-45bb-806a-325137894147.jpg",
                "userId": 1,
                "createdAt": "2024-09-06T23:08:42.620Z",
                "updatedAt": "2024-09-10T04:05:45.383Z"
            },
            {
                "id": 58,
                "name": "NFS UNDERGROUND",
                "description": "Olympic Square",
                "timestate": "00:00:42.970",
                "linkvideo": "https://youtu.be/watch?v=kuzq1cR0YNw",
                "img": "8f234d14-66d2-4f37-9baa-4651c034201f.jpg",
                "userId": 1,
                "createdAt": "2024-09-06T23:09:20.566Z",
                "updatedAt": "2024-09-10T04:05:47.490Z"
            },
            {
                "id": 40,
                "name": "NFS Most Wanted 2005",
                "description": "Petersburg",
                "timestate": "00:00:53.222",
                "linkvideo": "",
                "img": "1da23da6-830e-4838-9158-363207a72f81.jpg",
                "userId": 1,
                "createdAt": "2024-08-30T07:25:44.554Z",
                "updatedAt": "2024-08-30T07:27:13.291Z"
            },
            {
                "id": 4,
                "name": "NFS Most Wanted 2005",
                "description": "Ironwood Estates",
                "timestate": "00:00:37.810",
                "linkvideo": "https://www.youtube.com/watch?v=FNe-8pZV3Ak",
                "img": "98ea1dbe-ad8a-4416-ab23-9d4b3300ba9d.jpg",
                "userId": 1,
                "createdAt": "2024-08-07T12:02:34.039Z",
                "updatedAt": "2024-09-10T04:08:31.841Z"
            },
            {
                "id": 41,
                "name": "NFS Most Wanted 2005",
                "description": "Ironwood Estates",
                "timestate": "00:00:37.780",
                "linkvideo": "https://www.youtube.com/watch?v=FNe-8pZV3Ak",
                "img": "d5422ff7-642e-497e-931b-98c287639926.jpg",
                "userId": 1,
                "createdAt": "2024-08-31T17:46:58.998Z",
                "updatedAt": "2024-09-10T04:08:39.766Z"
            },
            {
                "id": 33,
                "name": "NFS Most Wanted 2005",
                "description": "Petersburg",
                "timestate": "00:00:52.080",
                "linkvideo": "https://www.youtube.com/watch?v=M0T_4ybS8aE",
                "img": "ec243d12-9c04-4d36-b201-58f04728d0a1.jpg",
                "userId": 1,
                "createdAt": "2024-08-11T22:04:34.870Z",
                "updatedAt": "2024-09-10T04:15:18.812Z"
            },
            {
                "id": 5,
                "name": "NFS Most Wanted 2005",
                "description": "Highlands",
                "timestate": "00:00:38.160",
                "linkvideo": "https://www.youtube.com/watch?v=NUXJFrNYZLw",
                "img": "09d8c14b-50aa-403e-82a4-d78ea9fb3bc8.jpg",
                "userId": 1,
                "createdAt": "2024-08-07T17:28:14.917Z",
                "updatedAt": "2024-09-18T22:37:22.997Z"
            }
        ],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "GameRecords" RESTART IDENTITY CASCADE`;
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