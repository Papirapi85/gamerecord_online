'use client';

import React from 'react';
import {cn} from "@/shared/lib/utils";
import {User, Product, ProductItem, Category} from "@prisma/client";


interface Props {
    user: User[];
    product: Product[];
    productItem : ProductItem[];
    category : Category[];
}

export const GameRecord_MAP: React.FC<Props> = ({
                                                    user,
                                                    product,
                                                    productItem,
                                                    category,
                                                }) => {

    return (

        <div className={cn('gap-1 bg-secondary p-1 rounded-2xl')}>
            {/*{*/}
            {/*    product.map((records, index) => (*/}
            {/*    <div key={index} className={cn('gap-1 bg-secondary p-1 rounded-2xl')}>*/}
            {/*        {records.name}*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};

