import { useContext } from "react"
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'; // Importa los estilos CSS


export interface Props {
    title?: string, 
    className?: string,
    style?: React.CSSProperties
}


// Componente que muestra el título del producto
export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    return (
        <span className={ `${styles.productDescription} ${className}`}
              style={ style }
        >
            {title ? title : product.title}
        </span>
    );
};
