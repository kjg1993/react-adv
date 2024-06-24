
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0]



export const ShoppingPage = () => {


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
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 15
          }}

        >
          {
            ( { reset, isMaxCountReached, maxCount, increaseBy, count } ) => (
              <>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white" />
                <ProductButtons className="custom-buttons" />

                <button onClick={ reset }>Reset</button>
                <button onClick={ () => increaseBy(-2) }>-2</button>
                {
                  (!isMaxCountReached && <button onClick={ () => increaseBy(+2) }>+2</button>) 
                }

                <span> { count } - { maxCount} </span>
               
              </>
            )
          }

        </ProductCard>

      </div>

    </div>
  );
};

export default ShoppingPage;
