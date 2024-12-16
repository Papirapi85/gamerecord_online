'use client';

import {cn} from '@/shared/lib/utils';
import {useCategoryStore} from '@/shared/store/category';
import {Category} from '@prisma/client';
import React from 'react';
import {SheetDriverLeft} from "@/components/sheet-driver-left";
import {DropmenuTopLeft} from "@/components/dropmenu-top-left";
import {SheetDriverRight} from "@/components/sheet-driver-right";


interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({items, className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn('inline-flex gap-1 p-1 rounded-2xl h-12', className)}>
            {/*{items.map(({name, id}, index) => (*/}
            {/*    <a*/}
            {/*        className={cn(*/}
            {/*            'flex items-center font-bold h-11 rounded-2xl px-5 ',*/}
            {/*            categoryActiveId === id && 'bg-secondary shadow-md shadow-gray-200 text-primary',*/}
            {/*        )}*/}
            {/*        href={`/#${name}`}*/}
            {/*        key={index}>*/}
            {/*        <button>{name}</button>*/}
            {/*    </a>*/}
            {/*))}*/}
            {/*<div className={cn('cursor-pointer absolute left-1 mt-2', className)}>*/}
            {/*    <SheetDriverLeft/>*/}
            {/*</div>*/}
            {/*<div className={cn('cursor-pointer absolute mt-2 left-1 ', className)}>*/}
            {/*    <DropmenuTopLeft/>*/}
            {/*</div>*/}
            {/*<div className={cn('cursor-pointer absolute mt-2 left-1 ', className)}>*/}
            {/*    <DropmenuTopLeft/>*/}
            {/*</div>*/}
            {/*<div className={cn('cursor-pointer absolute right-1 mt-2', className)}>*/}
            {/*    <SheetDriverRight/>*/}
            {/*</div>*/}

        </div>
    );
};
