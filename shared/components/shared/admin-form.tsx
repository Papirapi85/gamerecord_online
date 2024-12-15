'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {TFormRegisterValues, formRegisterSchema} from './modals/auth-modal/forms/schemas';
import {Category, User} from '@prisma/client';
import toast from 'react-hot-toast';
import {signOut} from 'next-auth/react';
import {Container} from './container';
import {Title} from './title';
import {FormInput} from './form';
import {Button, Input} from '../ui';
import {updateCategory, updateCategoryCreate, updateCategoryDelete} from '@/app/actions';


interface Props {
    data: User;
    category: Category[];
}

export const AdminForm: React.FC<Props> = ({data, category}) => {
    const form = useForm({
        defaultValues: {
            role: data.role,
            category: category,
        },
    });
    const [categories, setCategories] = React.useState<Category[]>(category);
    const [categoryAdd, setCategoryAdd] = React.useState('');


    const eventHandler = (id: any, value: any) => {
        setCategories(
            categories.map((item) =>
                item.id === id ? {...item, name: value} : item
            )
        )
    };

    const eventSubmitUpdate = async (id: any, name: any) => {
        try {
            await updateCategory({
                id: id,
                name: name,
            });

            toast.error('Данные обновлены 📝', {
                icon: '✅',
            });
        } catch (error) {
            return toast.error('Ошибка при обновлении данных', {
                icon: '❌',
            });
        }
    }

    const eventSubmitCreate = async () => {
        try {
            await updateCategoryCreate({
                name: categoryAdd,
            });

            toast.error('Данные созданы 📝', {
                icon: '✅',
            });

            setCategoryAdd('')

        } catch (error) {
            return toast.error('Ошибка при создании данных', {
                icon: '❌',
            });
        }
    }

    const eventSubmitDelete = async (id: any) => {
        try {
            await updateCategoryDelete({
                id: id,
            });

            toast.error('Данные удалены📝', {
                icon: '✅',
            });

        } catch (error) {
            return toast.error('Ошибка при удалении данных', {
                icon: '❌',
            });
        }
    }

    return (
        <Container className="my-10">

            <Title text={`#${data.role}`} size="md" className="font-bold"/>
            <Title text={`Category Edit`} size="md" className="font-bold"/>

            {category.map((item, index) => (
                <div key={index} className="flex w-full max-w-sm items-center space-x-2 mb-1">
                    <Input type='text'
                           defaultValue={item.name}
                           onChange={e => eventHandler(item.id, e.target.value)
                    }/>
                    <Button
                            type="submit"
                            disabled={item.name === categories[index].name}
                            onClick={() => eventSubmitUpdate(item.id, categories[index].name)}
                    >Up</Button>
                    <Button
                        type="submit"
                        onClick={() => eventSubmitDelete(item.id)}
                    >Del</Button>
                </div>
            ))}

            <Title text={`Category Add`} size="md" className="font-bold"/>
            <div className="flex w-full max-w-sm items-center space-x-2 mb-1">
                <Input type='text'
                       onChange={e => setCategoryAdd(e.target.value)
                }/>
                <Button
                    type="submit"
                    onClick={eventSubmitCreate}
                >Add</Button>
            </div>
        </Container>
    );
};
