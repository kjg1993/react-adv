import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductButtonsProps } from '../components/ProductButtons'



// Interface to define the properties of the ProductCard component
// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[];
//     className?: string;
// }

// Interface to define the properties of a product
export interface Product {
    id: string;
    title: string;
    img?: string;
}


// Interface to define the properties of the product context
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

// Correct the typo in the interface definition
// export interface ProductCardHOCProps {
//     ({ children, product }: ProductCardProps): JSX.Element,
//     Title:  ( Props: { title?: string, className?:string }) => JSX.Element,
//     Image:  (Props: { img?: string, className?:string }) => JSX.Element,
//     Buttons:  ( Props: { className?: string} ) => JSX.Element
// }

//Nueva forma de hacerlo 
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title:    ( Props: ProductTitleProps)    => JSX.Element,
    Image:    (Props: ProductImageProps )    => JSX.Element,
    Buttons:  ( Props: ProductButtonsProps ) => JSX.Element
}
