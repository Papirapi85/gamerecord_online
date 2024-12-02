'use client';

import {cn} from '@/shared/lib/utils';
import {useCategoryStore} from '@/shared/store/category';
import {Category} from '@prisma/client';
import React from 'react';

interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({items, className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        // <div className={cn('inline-flex gap-1 p-1 rounded-2xl', className)}>
        <div className={cn('gap-1 p-1 rounded-2xl', className)}>
            {items.map(({name, id}, index) => (
                <a
                    className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'shadow-md shadow-gray-200 text-primary',
                    )}
                    href={`/#${name}`}
                    key={index}>
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
