import { Fragment, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Fruit } from "./interfaces";
import { FruitCard } from "./components/FruitCard";
import { Header } from "./components/Header";

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    // A API DISPONIBILIZADA ESTÁ COM PROBLEMA NA POLITICA DE CORS
    // fetch('https://www.fruityvice.com/api/fruit/all')
    // .then( blob => console.log(blob))
    // .then( fruitsResponse => console.log(fruitsResponse))

    axios("http://localhost:3000/fruits").then((response) =>
      setFruits(response.data)
    );
  }, []);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="fruitContainer">
        {fruits.map((fruit) => (
          <FruitCard fruit={fruit} key={fruit.id} />
        ))}
      </div>
    </>
  );
}

export default App;
