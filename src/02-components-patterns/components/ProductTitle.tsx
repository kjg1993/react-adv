import { useContext } from "react"
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'; // Importa los estilos CSS



// Componente que muestra el título del producto
export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext);
    return (
        <span className={styles.productDescription}>
            {title ? title : product.title}
        </span>
    );
};
