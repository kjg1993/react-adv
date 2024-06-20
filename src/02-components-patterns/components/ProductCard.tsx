import React, {  createContext } from 'react';
import { useProduct } from '../hooks/useProduct'; // Importa el hook personalizado useProduct
import styles from '../styles/styles.module.css'; // Importa los estilos CSS
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';



// Creación del contexto con valores iniciales
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



// Componente principal que agrupa todos los subcomponentes anteriores
export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct(); // Utiliza el hook useProduct para obtener el contador y la función increaseBy

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {/* Renderiza cualquier children pasado como prop */}
                {children}
            </div>
        </Provider>
    );
};

// //Añadir subcomponentes al componente ProductCard
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

//export default ProductCard; // Exporta el componente ProductCard como el valor por defecto del módulo
