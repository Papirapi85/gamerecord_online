'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {TFormRegisterValues, formRegisterSchema} from './modals/auth-modal/forms/schemas';
import {Category, Product, ProductItem, User} from '@prisma/client';
import toast from 'react-hot-toast';
import {signOut} from 'next-auth/react';
import {Container} from './container';
import {Title} from './title';
import {FormInput} from './form';
import {Button, Input} from '../ui';
import {
    categoryUpdate,
    categoryCreate,
    categoryDelete,
    productCreate,
    productUpdate,
    productDelete
} from '@/app/actions';
import {redirect} from "next/navigation";


interface Props {
    data: User;
    category: Category[];
    product: Product[];
    productItem: ProductItem[];
}

export const AdminProductItem: React.FC<Props> = ({data, category, product, productItem}) => {

    const [categoryNameState, setCategoryNameState] = React.useState('');

    const [productState, setProductState] = React.useState<Product[]>(product);
    const [productFindState, setProductFindState] = React.useState<Product[]>([]);

    const [productItemState, setProductItemState] = React.useState<ProductItem[]>(productItem);
    const [productItemFindState, setProductItemFindState] = React.useState<ProductItem[]>([]);
    const [productItemFindState2, setProductItemFindState2] = React.useState<ProductItem[]>([]);

    const [createState, setCreateState] = React.useState("");

    const categoryIdRef = React.useRef(null);
    const productIdRef = React.useRef(null);

    useEffect(() => {
        let array: Product[] = []
        if(categoryIdRef.current !== null) {
            for (let i = 0; i < product.length; i++) {
                if (product[i].categoryId === categoryIdRef.current) {
                    array.push(product[i]);
                }
            }
            setProductFindState(array);
            setCreateState('')
        }
    }, [product]);


    useEffect(() => {
        // setProductItemFindState(productItem);
        // let array: Product[] = []
        // if(categoryIdRef.current !== null) {
        //     for (let i = 0; i < product.length; i++) {
        //         if (product[i].categoryId === categoryIdRef.current) {
        //             array.push(product[i]);
        //         }
        //     }
        //     setProductFindState(array);
        //     setCreateState('')
        // }
    }, [productItem]);

    const productFind = (item : any) => {
        let array = []
        for (let i = 0; i < productState.length; i++) {
            if (productState[i].categoryId === item.id) {
                array.push(productState[i]);
            }
        }
        categoryIdRef.current = item.id;
        setProductFindState(array);
        setCategoryNameState(item.name);
    }

    const productItemFind = (item : any) => {
        let array = []
        for (let i = 0; i < productItemState.length; i++) {
            if (productItemState[i].productId === item.id) {
                array.push(productItemState[i]);
            }
        }

        productIdRef.current = item.id;
        setProductItemFindState(array);
        setProductItemFindState2(array);
    }

    const eventSubmitCreate = async () => {
        try {
            if(createState === '') {
                return toast.error('Error create data, filed empty', {
                    icon: '❌',
                });
            }
            await productCreate({
                name: createState,
                categoryId: categoryIdRef.current,
            });
            toast.error('Data create 📝', {
                icon: '✅',
            });
        } catch (error) {
            return toast.error('Error create data', {
                icon: '❌',
            });
        }
        redirect(`/admin/product`)
    }

    const eventSubmitDelete = async (item: any) => {
        try {
            await productDelete({
                id: item.id,
            });
            toast.error('Данные удалены📝', {
                icon: '✅',
            });
        } catch (error) {
            return toast.error('Ошибка при удалении данных', {
                icon: '❌',
            });
        }
        redirect(`/admin/product`)
    }

    const eventSubmitUpdate = async (data: any) => {
        try {
            if(data.name === '') {
                return toast.error('Ошибка при создании данных, пустое поле', {
                    icon: '❌',
                });
            }
            await productUpdate({
                id: data.id,
                name: data.name,
            });
            toast.error('Данные обновлены 📝', {
                icon: '✅',
            });
        } catch (error) {
            return toast.error('Ошибка при обновлении данных', {
                icon: '❌',
            });
        }
        redirect(`/admin/product`)
    }

    return (
        <Container className="mt-4">

            {/*<Title text={`#${data.role}`} size="md" className="font-bold"/>*/}

            {/*CATEGORY*/}
            <div className="flex">
                <div className="w-[25%]">
                    <Title text={`Category List`} size="md" className="font-bold"/>
                    {category.map((item) => (
                        <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            <Button onClick={() => productFind(item)}>{item.name}</Button>
                        </div>
                    ))}
                </div>

                {/*PRODUCT_LIST*/}
                <div className="flex-1 w-[25%]">
                    <Title text={`${categoryNameState}`} size="md" className="font-bold"/>
                    <Title text={`Product List`} size="xs"/>
                    {categoryIdRef.current !== null && productFindState.map((item, index) => (
                        <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            {/*<p>{item.id}</p>*/}
                            <Button
                                onClick={e => productItemFind(productFindState[index])}
                            >{item.name}</Button>
                        </div>
                    ))}
                </div>

                {/*PRODUCT_ITEM_EDIT*/}
                <div className="flex-1 w-[25%]">
                    <Title text={`${categoryNameState}`} size="md" className="font-bold"/>
                    <Title text={`Product Item Edit`} size="xs"/>
                    {productIdRef.current !== null && productItemFindState.map((item, index) => (
                        <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            {/*<p>{item.id}</p>*/}
                            <Button
                                // onClick={e => eventHandler(productFindState[index], e.target.value)}
                            >{item.name}</Button>
                            {/*<Button*/}
                            {/*    type="submit"*/}
                            {/*    disabled={productFindState[index].name === productFindState2[index].name}*/}
                            {/*    onClick={() => eventSubmitUpdate(productFindState2[index])}*/}
                            {/*>Up</Button>*/}
                            {/*<Button*/}
                            {/*    type="submit"*/}
                            {/*    onClick={() => eventSubmitDelete(item)}*/}
                            {/*>Del</Button>*/}
                        </div>
                    ))}
                </div>

                {/*PRODUCT_ITEM_CREATE*/}
                <div className="flex-1 w-[25%]">
                    <Title text={`${categoryNameState}`} size="md" className="font-bold"/>
                    <Title text={`Product Item Add`} size="xs"/>
                </div>
            </div>
        </Container>
    );
};
