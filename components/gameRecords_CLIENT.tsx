'use client';

import React from 'react';
import {cn} from "@/shared/lib/utils";


interface Props {
    game_records: any[];
}

export const GameRecord_CLIENT: React.FC<Props> = ({ game_records }) => {

    return (
        <div className={cn('gap-1 bg-secondary p-1 rounded-2xl')}>
            {
                game_records.map((records, index) => (
                <div key={index} className={cn('gap-1 bg-secondary p-1 rounded-2xl')}>
                    {records.category.name}{' | '}
                    {records.user.fullName}{' | '}
                    {records.timestate}{' | '}
                    {records.productItem.description}{' | '}
                    {records.product.name}{' '}
                </div>
            ))}
        </div>
        // <GameRecord_MAP
        //     user={game_records.user}
        //     product={game_records.product}
        //     productItem={game_records.product}
        //     category={game_records.category}
        // />
    );
};

