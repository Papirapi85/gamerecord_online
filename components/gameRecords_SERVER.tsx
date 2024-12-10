import { Container, ProductForm } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import {GameRecord_CLIENT} from "@/components/gameRecords_CLIENT";

export default async function GameRecords_SERVER() {

    const game_records = await prisma.gameRecords.findMany({
        include: {
            user: true,
            product: true,
            productItem: true,
            category: true,
        },
    });


    if (!game_records) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <GameRecord_CLIENT game_records={game_records} />
        </Container>
    );
}
