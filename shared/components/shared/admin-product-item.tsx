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

}

export const AdminProductItem: React.FC<Props> = ({data, category}) => {


    // const [categories, setCategories] = React.useState<Category[]>(category);
    // const [product, setProduct] = React.useState<Product[]>(product);
    //
    //
    // useEffect(() => {
    //     setCategories(category);
    //     setProduct(product);
    // }, [category, product]);

    // // CREATE PRODUCT
    // const eventSubmitCreate = async () => {
    //     try {
    //         if(categoryAdd === '') {return toast.error('Ошибка при создании данных, пустое поле', {icon: '❌',});}
    //
    //         await categoryCreate({name: categoryAdd,});
    //
    //         toast.error('Данные созданы 📝', {icon: '✅',});
    //
    //     } catch (error) {return toast.error('Ошибка при создании данных', {icon: '❌',});}redirect(`/admin/category`)
    // }
    // // DELETE PRODUCT
    // const eventSubmitDelete = async (id: any) => {
    //     try {
    //         await categoryDelete({id: id,});
    //
    //         toast.error('Данные удалены📝', {icon: '✅',});
    //
    //     } catch (error) {return toast.error('Ошибка при удалении данных', {icon: '❌',});}
    //     redirect(`/admin/product`)
    // }
    // // UPDATE PRODUCT
    // const eventSubmitUpdate = async (categories2Index: any) => {
    //     try {
    //         if(categories2Index.name === '') {return toast.error('Ошибка при создании данных, пустое поле', {icon: '❌',});}
    //
    //         await categoryUpdate({id: categories2Index.id, name: categories2Index.name,});
    //
    //         toast.error('Данные обновлены 📝', {icon: '✅',});
    //
    //     } catch (error) {return toast.error('Ошибка при обновлении данных', {icon: '❌',});}
    //
    //     redirect(`/admin/product`)
    // }

    const productItem = () => {

    }

    return (
        <Container className="my-10">

            <Title text={`#${data.role}`} size="md" className="font-bold"/>
            <Title text={`Category List`} size="md" className="font-bold"/>

            {/*{category.map((item) => (*/}
            {/*    <div key={item.id} className="flex w-full max-w-sm items-center space-x-2 mb-1">*/}
            {/*        <Button onClick={()=> productItem(item.id)}>{item.name}</Button>*/}
            {/*    </div>*/}
            {/*))}*/}

            {/*<Title text={`Category Add`} size="md" className="font-bold"/>*/}
            {/*<div className="flex w-full max-w-sm items-center space-x-2 mb-1">*/}
            {/*    <Input type='text'*/}
            {/*           value={categoryAdd}*/}
            {/*           onChange={e => {*/}
            {/*               setCategoryAdd(e.target.value)*/}
            {/*           }*/}
            {/*    }/>*/}
            {/*    <Button*/}
            {/*        type="submit"*/}
            {/*        onClick={eventSubmitCreate}*/}
            {/*    >Add</Button>*/}
            {/*</div>*/}
        </Container>
    );
};
