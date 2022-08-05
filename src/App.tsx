import { Fragment, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Fruit } from "./interfaces";
import { FruitCard } from "./components/fruitCard";

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([
    // {
    //   genus: "Musa",
    //   name: "Banana",
    //   id: 2,
    //   family: "Musaceae",
    //   order: "Zingiberales",
    //   nutritions: {
    //     carbohydrates: 22,
    //     protein: 0,
    //     fat: 0.2,
    //     calories: 96,
    //     sugar: 17.2,
    //   },
    // },
    // {
    //   genus: "Musa",
    //   name: "bolo de murango",
    //   id: 3,
    //   family: "Musaceae",
    //   order: "Zingiberales",
    //   nutritions: {
    //     carbohydrates: 22,
    //     protein: 0,
    //     fat: 0.2,
    //     calories: 96,
    //     sugar: 17.2,
    //   },
    // },
  ]);

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
    <div className="container">
      {fruits.map((fruit) => (
        <FruitCard fruit={fruit} key={fruit.id} />
      ))}
    </div>
  );
}

export default App;
