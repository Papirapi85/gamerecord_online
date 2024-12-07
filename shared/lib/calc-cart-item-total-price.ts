import {CartItemDTO} from '../services/dto/cart.dto';

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
    // return (ingredientsPrice + item.productItem.price) * item.quantity;
    return item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
};
