import React, {  ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct'; // Importa el hook personalizado useProduct
import styles from '../styles/styles.module.css'; // Importa los estilos CSS
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';



// Creación del contexto con valores iniciales
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


// Interface to define the properties of the ProductCard component
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}



// Componente principal que agrupa todos los subcomponentes anteriores
export const ProductCard = ({ children, product, className , style, onChange, value}: Props) => {
    const { counter, increaseBy } = useProduct( { onChange, product, value } ); // Utiliza el shook useProduct para obtener el contador y la función increaseBy

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${ styles.productCard } ${className}` }
                 style={ style }
            >
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
