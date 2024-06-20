import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'; // Importa una imagen por defecto
import styles from '../styles/styles.module.css'; // Importa los estilos CSS

export interface Props{
    img?: string;
    className?: string;
    style?: React.CSSProperties
    
}

// Componente que muestra la imagen del producto
export const ProductImage = ({ img, className, style }: Props ) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if ( img ) {
        imgToShow = img
    } else if (product.img ) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img className={ `${styles.productImg} ${className}`}  style={ style } src={ imgToShow } alt="Product" />
    );
};
