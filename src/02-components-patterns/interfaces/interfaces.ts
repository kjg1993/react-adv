import { ReactElement } from 'react';

// Interface to define the properties of the ProductCard component
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

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
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title:  ({ title }: { title?: string }) => JSX.Element,
    Image:  ({ img }: { img?: string }) => JSX.Element,
    Buttons:  () => JSX.Element
}
