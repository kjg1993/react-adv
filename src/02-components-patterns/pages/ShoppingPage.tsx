
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";



export const ShoppingPage = () => {
  
  const { shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Mapeamos la lista de productos y los mostramos en tarjetas */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange} // Pasamos la función de cambio de cantidad
            value= { shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      {/* Aquí mostramos productos fijos en el carrito como ejemplo */}
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={ key }
              product={product }
              className="bg-dark text-white"
              style={{ width: "120px" }}
              onChange={ onProductCountChange }
              value={ product.count }
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons"
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          ))
        }
      </div>

      {/* Mostramos el estado actual del carrito en formato JSON */}
      {/* <div className="">
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div> */}
    </div>
  );
};

export default ShoppingPage;
