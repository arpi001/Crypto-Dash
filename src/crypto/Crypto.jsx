import { useState, useContext, useEffect } from "react";
import {CoinContext} from '../context/CoinContext'

function Crypto() {

    const { setCurrency } = useContext(CoinContext);

  const currencyHandle = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

const { coin, currency } = useContext(CoinContext);
  const [display, setDisplay] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const filteredCoins = coin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplay(filteredCoins);
  };

  useEffect(() => {
    setDisplay(coin);
  }, [coin]);


  return (
    <>
     <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
      {/* Search Form */}
    <div className="flex item-center ">
    <form onSubmit={searchHandler} className="flex flex-col sm:flex-row items-center justify-center mb-12 bg-gray-800 p-2 rounded-lg max-w-lg mx-auto shadow-lg">
        <input
          type="text"
          placeholder="Search Crypto..."
          value={input}
          onChange={inputHandler}
          className="bg-gray-900 text-white border border-gray-700 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-b-lg ml-2 sm:rounded-lg sm:rounded-l-none px-4 py-2 font-semibold hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

    <div className="mr-12 flex item-center justify-center gap-3">
        <h1 className="text-lg font-bold mt-1">Currency Changer-</h1>
    <div className="mr-24">
            <select
              onChange={currencyHandle}
              className="bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select currency"
            >
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
            </select>
          </div>
    </div>
    </div>

      {/* Crypto Data Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {display.slice(0, 40).map((item, id) => (
          <div key={id} className="bg-zinc-200 hover:bg-zinc-300 rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition duration-300 cursor-pointer">
            <img src={item.image} alt={item.name} className="h-12 w-12 mb-4" />
            <h2 className="text-lg font-semibold">{item.name} ({item.symbol.toUpperCase()})</h2>
            <p className="text-gray-500 mb-2">{currency.symbol}{item.current_price}</p>
            <p className={`font-bold ${item.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>
            <p className="text-gray-700 mt-2">{currency.symbol}{item.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Crypto