import { Product } from "../interfaces/interfaces";

// Definimos dos productos como ejemplos
const product1 = {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  };
  
  const product2 = {
    id: "2",
    title: "Coffe Mug - Meme",
    img: "./coffee-mug2.png",
  };
  
  // Lista de productos
  export const products: Product[] = [product1, product2];