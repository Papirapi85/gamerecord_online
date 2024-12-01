'use client';
import React from 'react';
import { useCategories } from '@/shared/hooks';



interface Props {
    className?: string;
}

export const LeftBlockLinkCategory: React.FC<Props> = ({ className }) => {

    const { categories } = useCategories();

    return (
        <div className={className}>
            <div className={className}>
                <div>
                    {categories.map(category =>
                        <div
                            onClick={() => console.log(category.name)}
                            key={category.id}
                        >
                            {category.name}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
