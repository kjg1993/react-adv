import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'; // Importa una imagen por defecto
import styles from '../styles/styles.module.css'; // Importa los estilos CSS

// Componente que muestra la imagen del producto
export const ProductImage = ({ img = '' }) => {
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
        <img className={styles.productImg} src={ imgToShow } alt="Product" />
    );
};
