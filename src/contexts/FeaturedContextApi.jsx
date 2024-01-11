import { createContext, useEffect, useState } from "react";

export const FeaturedContextApi = createContext();

// eslint-disable-next-line react/prop-types
const FeaturedContextProvider = ({ children }) => {

  const [featuredApi, setFeaturedApi] = useState([]);
  const [productsApi, setProductsApi] = useState([]);

  useEffect(() => {

    fetch("https://api.pujakaitem.com/api/products")
      .then((res) => res.json())
      .then((data) => setFeaturedApi(data));

      fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductsApi(data.products))

  }, []);

  return (
    <FeaturedContextApi.Provider value={{ featuredApi, productsApi }}>
      {children}
    </FeaturedContextApi.Provider>
  );
};

export default FeaturedContextProvider;
