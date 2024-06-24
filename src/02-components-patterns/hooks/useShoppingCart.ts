import { useState } from 'react'
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

        console.log( { count})
        setShoppingCart(oldShoppingCart => {
            //const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            // // Check if the new count is greater than 0
            // if (Math.max(productInCart.count + count, 0) > 0) {
            //     productInCart.count += count; // Increment by the count value

            //     return {
            //         ...oldShoppingCart,
            //         [product.id]: productInCart
            //     };
            // }

            // // Remove the product if the count is 0
            // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            // return rest;



            // Si la cantidad es 0, eliminamos el producto del carrito
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log('To Delete:', toDelete); // Aquí mostramos el producto a eliminar
                return rest; // Retornamos el carrito sin el producto eliminado
            }

            // Si la cantidad no es 0, actualizamos la cantidad del producto en el carrito
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            };

        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }


}



