import { Api } from '@/shared/services/api-client';
import { Category } from '@prisma/client';
import React from 'react';

export const useCategories = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await Api.categories.getAll();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      } finally {

      }
    }

    fetchCategories();
  }, []);

  return {
    categories,
  };
};
