'use client';

import { Api } from '@/shared/services/api-client';
import { IGameRecords } from '@/shared/services/game-records';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import {Loader} from "lucide-react";


interface Props {
    className?: string;
}

export const GameRecords: React.FC<Props> = ({ className }) => {

    const [GameRecords, setGameRecords] = React.useState<IGameRecords []>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        async function fetchGameRecords() {
            const data = await Api.gameRecords.getAll();
            setGameRecords(data);
        }
        fetchGameRecords().then(r => setLoading(true));
    }, []);

    return (
        <div>
            {loading ?
                <div className={cn('gap-1 bg-secondary p-1 rounded-2xl')}>
                    {GameRecords.map((records) => (
                        <div key={records.id}>
                            {records.timestate}
                        </div>
                    ))}
                </div>
                :
                <div className={cn('justify-items-center')} ><Loader /></div>
            }
        </div>

    );
};
