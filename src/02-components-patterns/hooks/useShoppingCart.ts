import  { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {


    // Estado para el carrito de compras
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    // Función para manejar cambios en la cantidad de productos
    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            // Check if the new count is greater than 0
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count; // Increment by the count value

                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                };
            }

            // Remove the product if the count is 0
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }


}



