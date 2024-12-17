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
}

export const AdminProduct: React.FC<Props> = ({data, category, product}) => {

    const [categoryNameState, setCategoryNameState] = React.useState('');
    const [productState, setProductState] = React.useState<Product[]>(product);
    const [productStateFind, setProductFindState] = React.useState<Product[]>([]);
    const [productStateFind2, setProductFindState2] = React.useState<Product[]>([]);
    const [createState, setCreateState] = React.useState("");
    const categoryIdRef = React.useRef(null);

    useEffect(() => {
        let array: Product[] = []
        if(categoryIdRef.current !== null) {
            for (let i = 0; i < product.length; i++) {
                if (product[i].categoryId === categoryIdRef.current) {
                    array.push(product[i]);
                }
            }
            setProductFindState(array);
            setProductFindState2(array);
        }
    }, [product]);

    const productItem = (item : any) => {
        let array = []
        for (let i = 0; i < productState.length; i++) {
            if (productState[i].categoryId === item.id) {
                array.push(productState[i]);
            }
        }
        categoryIdRef.current = item.id;
        console.log(categoryIdRef.current);
        setProductFindState(array);
        setProductFindState2(array);
        setCategoryNameState(item.name);
    }


    const eventHandler = (data: any, value: any) => {
        setProductFindState2(
            productStateFind.map((item) =>
                item.id === data.id ? {...item, name: value} : item
            )
        )
    };

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

                    {categoryIdRef.current !== null && productStateFind.map((item, index) => (
                        <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            <p>{item.id}</p>
                            <Input type='text'
                                   defaultValue={item.name}
                                   onChange={e => eventHandler(productStateFind[index], e.target.value)}
                            />
                            <Button
                                type="submit"
                                disabled={productStateFind[index].name === productStateFind2[index].name}
                                onClick={() => eventSubmitUpdate(productStateFind2[index])}
                            >Up</Button>
                            <Button
                                type="submit"
                                onClick={() => eventSubmitDelete(item)}
                            >Del</Button>
                        </div>
                    ))}
                </div>

                <div className="flex-1 w-[35%]">
                    <Title text={`${categoryNameState}`} size="md" className="font-bold"/>
                    <Title text={`Product Add`} size="xs" />
                    {categoryIdRef.current !== null &&
                        <div className="flex w-full max-w-sm items-center space-x-2 mb-1">
                            <Input type='text'
                                   value={createState}
                                   onChange={e => {
                                       setCreateState(e.target.value)
                                   }}
                            />
                            <Button
                                type="submit"
                                onClick={eventSubmitCreate}
                            >Add</Button>
                        </div>
                    }
                </div>
            </div>
        </Container>
    );
};
