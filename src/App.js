import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getQuote = async () => {
    setIsLoading(true);
    const data = await fetch("https://www.breakingbadapi.com/api/quote/random");
    const [newQuote] = await data.json();
    setQuote(newQuote);
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={getQuote}>Get another</button>
      {isLoading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
