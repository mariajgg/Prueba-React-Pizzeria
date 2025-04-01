import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizzaInfo, setPizzasInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const infoPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizzasInfo(data);
      } catch (error) {
        console.error("Error al cargar las pizzas", error); // ✅ Corrección de "console.lerror"
      }
    };
    infoPizza();
  }, []);
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-5">
            <img
              className="rounded shadow"
              src={pizzaInfo.img}
              width={500}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-success">{pizzaInfo.name}</h2>
            <p>{pizzaInfo.desc}</p>
            <ul>
              {pizzaInfo.ingredients?.map((ingredient, index) => (
                <li key={index}>
                  <strong className="">{ingredient}</strong>
                </li>
              ))}
            </ul>
            <h2 className="text-success">${pizzaInfo.price}</h2>
            <button className="btn btn-success">
              <i className="fa-solid fa-cart-shopping"></i> Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
