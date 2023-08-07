import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registro_Datos_Personales = () => {
  const navigate = useNavigate();
  const [fecha_nacimiento, setFecha_Nacimiento] = useState("");
  const [RFC, setRFC] = useState("");
  const [ingreso_mensual, setIngreso_Mensual] = useState("");
  const [gasto_mensual, setGasto_Mensual] = useState("");
  const [numDependientes, setNumDependientes] = useState("");
  const [isRFCValid, setIsRFCValid] = useState(false);

  const handleNext = (event) => {
    event.preventDefault();

    if (isRFCValid) {
      navigate("/RegistroDomicilio", {
        state: {
          fecha_nacimiento,
          RFC,
          ingreso_mensual,
          gasto_mensual,
        },
      });
    } else {
      console.log("RFC no válido");
    }
  };

  return (
    <div>
      <div className="signupFrm">
        <div className="wrapper">
          <form action="" className="form" onSubmit={handleNext}>
            <h1 className="title">Datos Personales</h1>

            <div className="inputContainer">
              <input
                type="date"
                className="input"
                placeholder="a"
                required
                value={fecha_nacimiento}
                onChange={(e) => setFecha_Nacimiento(e.target.value)}
              />
              <label htmlFor="" className="label">
                Fecha de nacimiento
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                required
                value={RFC}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setRFC(newValue);
                  setIsRFCValid(newValue.length === 10);
                }}
              />

              <label htmlFor="" className="label">
                RFC
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="number"
                className="input"
                placeholder="$"
                min="0"
                value={ingreso_mensual}
                onChange={(e) => setIngreso_Mensual(e.target.value)}
                required
              />
              <label htmlFor="" className="label">
                Ingreso mensual $
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="number"
                className="input"
                placeholder="$"
                min="0"
                value={gasto_mensual}
                onChange={(e) => setGasto_Mensual(e.target.value)}
                required
              />
              <label htmlFor="" className="label">
                Monto de gastos mensuales $
              </label>
            </div>
            <p className="TextDependens">
            Número de dependientes económicos
            </p>
            <div className="inputContainer">
              <select
                className="input"
                value={numDependientes}
                onChange={(e) => setNumDependientes(e.target.value)}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "más de 10"].map(
                  (option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                )}
              </select>
              
            </div>

            <input type="submit" className="submitBtn" value="Finalizar" />
          </form>
        </div>
      </div>
    </div>
  );
};
