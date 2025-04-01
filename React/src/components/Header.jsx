import HeaderImage from "../assets/Header.jpg";

const Header = () => {
  const imagenFondo = {
    position: "relative",
    backgroundImage: `url(${HeaderImage})`,
    height: "400px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <header style={imagenFondo}>
      <div style={overlayStyle}></div>

      <div className="container-fluid">
        <div className="texto">
          <h1>¡Pizzería Mamma Mia</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar</p>
          <hr />
        </div>
      </div>
    </header>
  );
};

export default Header;
