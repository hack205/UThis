import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registro = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');

  const handleNext = (event) => {
    event.preventDefault();

    navigate('/RegistroDomicilio', {
      state: {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correo,
        celular,
      },
    });
  };

  return (
    <div>
      <div className="signupFrm">
        <div className="wrapper">
          <form action="" className="form" onSubmit={handleNext}>
            <h1 className="title">Registro</h1>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="" className="label">
                Nombre
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={apellidoPaterno}
                onChange={(e) => setApellidoPaterno(e.target.value)}
              />
              <label htmlFor="" className="label">
                Apellido Paterno
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={apellidoMaterno}
                onChange={(e) => setApellidoMaterno(e.target.value)}
              />
              <label htmlFor="" className="label">
                Apellido Materno
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <label htmlFor="" className="label">
                Correo
              </label>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
              <label htmlFor="" className="label">
                Celular
              </label>
            </div>

            <input type="submit" className="submitBtn" value="Siguiente" />
          </form>
        </div>
      </div>
    </div>
  );
};
