import React, {  ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct'; // Importa el hook personalizado useProduct
import styles from '../styles/styles.module.css'; // Importa los estilos CSS
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';



// Creación del contexto con valores iniciales
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


// Interface to define the properties of the ProductCard component
export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: ( args: ProductCardHandlers )=> JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}



// Componente principal que agrupa todos los subcomponentes anteriores
export const ProductCard = ({ children, product, className , style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } ); // Utiliza el shook useProduct para obtener el contador y la función increaseBy

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={ `${ styles.productCard } ${className}` }
                 style={ style }
            >
                {/* Renderiza cualquier children pasado como prop */}
                { children && children( { 
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset, 
                 }) }
            </div>
        </Provider>
    );
};

