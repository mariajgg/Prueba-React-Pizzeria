import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { name, price, ingredients, img } = pizza;

  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregar = () => {
    agregarAlCarrito(pizza);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr />
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Ingredientes
          </h6>
          <p className="card-text">🍕{ingredients.join(", ")}</p>
          <hr />
          <h4>Precio: ${price}</h4>
          <div className="botones">
            <button className="btn btn-outline-dark">👀 Ver</button>
            <button className="btn btn-dark" onClick={handleAgregar}>
              🛒 Añadir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
