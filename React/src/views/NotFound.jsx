import React from "react";
import Character from "../assets/pizza.png";

const NotFound = () => {
  return (
    <>
      <div className="container-fluid bg-beige">
        <div className="container pizza-character">
          <img src={Character} style={{ width: 400 }} alt="" />
          <h2>Ooops! Pizza no encontrada</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
