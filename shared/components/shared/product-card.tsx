import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        {/*<div className="flex justify-center p-1 bg-secondary rounded-lg h-[95%]">*/}
          <div className="justify-items-center content-center p-1 bg-secondary rounded-lg h-[100%]">
              <Title text={name} size="xs" className="font-bold line-clamp-1 ml-2"/>
              <img className="w-[90%] h-[88%]" src={imageUrl} alt={name}/>


            {/*<div>*/}

            {/*</div>*/}

          </div>

          {/*<p className="text-sm text-gray-400">*/}
          {/*  {ingredients.map((ingredient) => ingredient.name).join(', ')}*/}
          {/*</p>*/}

          {/*<div className="flex justify-between items-center mt-4">*/}
          {/*  <span className="text-[20px]">*/}
          {/*    от <b>{price} ₽</b>*/}
          {/*  </span>*/}

          {/*  <Button variant="secondary" className="text-base font-bold">*/}
          {/*    <Plus size={20} className="mr-1" />*/}
          {/*    Добавить*/}
          {/*  </Button>*/}
          {/*</div>*/}
      </Link>
    </div>
);
};
