import { createContext, useState } from "react";

// importing and creating products from shop data json
import PRODUCTS from "../shop-data.json";

//initializing context

export const ProductsContext = createContext({
  //initializing products as empty array
  products: [],
});

// adding provider after context, this will return ProductContext.Provider that is passed children and renders children
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
