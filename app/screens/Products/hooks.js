import { useState } from "react";
import shop from "../../api/shop";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async (productId) => {
    try {
      const response = await shop.get(`/products/${productId}?`, {
        params: {
          publisherId: "TEST",
          locale: "en_US",
        },
      });
      setResults(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return [getProducts, results, isLoading];
};
