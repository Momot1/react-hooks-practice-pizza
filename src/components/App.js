import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaArray ,setPizzaArray] = useState([])
  const [selectedPizza, setSelectedPizza] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(resp => resp.json())
      .then(pizzas => setPizzaArray(pizzas))
  }, [])

  function updateSelectedPizza(pizza){
    setSelectedPizza(pizza)
  }

  function updatePizzas(newPizza, id){
    console.log(newPizza)
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPizza)
    })
      .then(resp => resp.json())
      .then(newPizza => {
        const updatedPizza = pizzaArray.map(pizza => {
          if(pizza.id === newPizza.id){
            return newPizza
          } else{
            return pizza
          }
        })

        setPizzaArray(updatedPizza)
      })
  }

  return (
    <>
      <Header />
      <PizzaForm onFormSubmit={updatePizzas} pizza={selectedPizza}/>
      <PizzaList onPizzaClick = {updateSelectedPizza} pizzaArray={pizzaArray}/>
    </>
  );
}

export default App;
