'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {TFormRegisterValues, formRegisterSchema} from './modals/auth-modal/forms/schemas';
import {Category, Product, User} from '@prisma/client';
import toast from 'react-hot-toast';
import {signOut} from 'next-auth/react';
import {Container} from './container';
import {Title} from './title';
import {FormInput} from './form';
import {Button, Input} from '../ui';
import {categoryUpdate, categoryCreate, categoryDelete} from '@/app/actions';
import {redirect} from "next/navigation";


interface Props {
    data: User;
    category: Category[];
    product: Product[];
}

export const AdminProduct: React.FC<Props> = ({data, category, product}) => {

    const [categoryNameState, setCategoryNameState] = React.useState('');
    const [productState, setProductState] = React.useState<Product[]>(product);
    const [productFindState, setProductFindState] = React.useState<Product[]>();
    const [productAddState, setProductAddState] = React.useState("");
    const inputRef = React.useRef(null);


    const productItem = (item : any) => {
        let array = []
        for (let i = 0; i < productState.length; i++) {
            if (productState[i].categoryId === item.id) {
                array.push(productState[i]);
            }
        }
        setProductFindState(array);
        setCategoryNameState(item.name);
    }

    return (
        <Container className="mt-4">

            {/*<Title text={`#${data.role}`} size="md" className="font-bold"/>*/}

            <div className="flex">
                <div className="w-[30%]">
                    <Title text={`Category List`} size="md" className="font-bold"/>
                    {category.map((item) => (
                        <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            <Button onClick={() => productItem(item)}>{item.name}</Button>
                        </div>
                    ))}
                </div>

                <div className="flex-1 w-[35%]">
                    <Title text={`${categoryNameState}`} size="md" className="font-bold"/>
                    <Title text={`Product Edit`} size="xs" />

                    {productFindState !== undefined && productFindState.map((item, index) => (
                        <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            <p>{item.id}</p>
                            <Input type='text'
                                   defaultValue={item.name}
                                   // onChange={e => eventHandler(productFindState[index], e.target.value)}
                            />
                            <Button
                                type="submit"
                                // disabled={categories[index].name === categories2[index].name}
                                // onClick={() => eventSubmitUpdate(categories2[index])}
                            >Up</Button>
                            <Button
                                type="submit"
                                // onClick={() => eventSubmitDelete(item.id)}
                            >Del</Button>
                        </div>
                    ))}
                </div>

                <div className="flex-1 w-[35%]">
                    <Title text={`${categoryNameState}`} size="md" className="font-bold"/>
                    <Title text={`Product Add`} size="xs" />

                    <div className="flex w-full max-w-sm items-center space-x-2 mb-1">
                        <Input type='text'
                               value={productAddState}
                               // onChange={e => {
                               //     setProductAddState(e.target.value)}
                        />
                        <Button
                            type="submit"
                            // onClick={eventSubmitCreate}
                        >Add</Button>
                    </div>
                </div>

            </div>
        </Container>
    );
};
