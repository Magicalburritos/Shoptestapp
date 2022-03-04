import { useState } from "react";
import shop from "../../api/shop";

export default () => {
  const [results, setResults] = useState([]);

  const SearchApi = async (term) => {
    try {
      const response = await shop.get("/products?", {
        params: {
          publisherId: "TEST",
          locale: "en_US",
          term: term,
          perPage: 15,
        },
      });
      setResults(response);
    } catch (error) {
      console.log(error);
    }
  };
  return [SearchApi, results];
};
