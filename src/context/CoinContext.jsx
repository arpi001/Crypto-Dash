import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [coin, setCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "USD",
    symbol: "$",
  });

  const fetchCoin = async () => {
    const options = {
      method: "GET",
      headers: { 
        accept: "application/json", 
        "x-cg-demo-api-key": "CG-cvz4oUgAFGyD5jdmnRFG6foX"
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      setCoin(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, [currency]);

  const contextValue = {
    coin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children} 
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
