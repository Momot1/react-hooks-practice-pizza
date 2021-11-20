import React, {useState, useEffect} from "react";

function PizzaForm({ onFormSubmit, pizza }) {
  const[topping, setTopping] = useState(pizza.topping)
  const[size, setSize] = useState(pizza.size)
  const[isVegetarian, setIsVegetarian] = useState(pizza.vegetarian)

  useEffect(() => {
    setTopping(pizza.topping)
    setSize(pizza.size)
    setIsVegetarian(pizza.vegetarian)
  }, [pizza])

  function handleSubmit(e){
    e.preventDefault()
    const updatedPizza = {
      topping: topping,
      size: size,
      vegetarian: isVegetarian
    }

    onFormSubmit(updatedPizza, pizza.id)
  }


  console.log(pizza)
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={e => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={e => setSize(e.target.value)} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked= {isVegetarian}
              onChange={() => setIsVegetarian(true)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked= {!isVegetarian}
              onChange={() => setIsVegetarian(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
