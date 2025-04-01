import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const correoValor = (e) => {
    setCorreo(e.target.value);
  };

  const passwordValor = (e) => {
    setPassword(e.target.value);
  };

  const confirmValor = (e) => {
    setConfirm(e.target.value);
  };

  const validarInput = (e) => {
    e.preventDefault();
    if (!correo.trim() || !password.trim() || !confirm.trim()) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (!validacionPassword()) {
      return;
    }

    if (!cantidadDeCaracteres()) {
      return;
    }

    if (!validarCorreo(correo)) {
      return;
    }

    // Alerta de que todo salio bien

    setCorreo("");
    setPassword("");
    setConfirm("");

    Swal.fire({
      title: "Registro éxitoso",
      icon: "success",
      draggable: true,
    });
  };

  const validacionPassword = () => {
    if (password !== confirm) {
      toast.warning("Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  const cantidadDeCaracteres = () => {
    if (password.length < 6) {
      toast.warning("No puede tener menos de 6 caracteres");
      return false;
    }
    return true;
  };

  const validarCorreo = (correo) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      toast.error("El correo electrónico no es valido.");
      return false;
    }
    return true;
  };
  return (
    <>
      <div className="container formulario-registro">
        <div className="card p-3 shadow" style={{ width: "18em" }}>
          <h2>Registro</h2>
          <form onSubmit={validarInput}>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Correo"
              name="correo"
              onChange={correoValor}
              value={correo}
            />
            <input
              className="form-control mt-2"
              type="password"
              placeholder="contraseña"
              name="password"
              onChange={passwordValor}
              value={password}
            />
            <input
              className="form-control mt-2"
              type="password"
              name="confirmar"
              placeholder="confirmar contraseña"
              onChange={confirmValor}
              value={confirm}
            />
            <button className="btn btn-success mt-2" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
