import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registro_Domicilio = () => {
  const navigate = useNavigate();
  const [calle, setCalle] = useState("");
  
  const [token, setToken] = useState(""); 
  const [noInterior, setNoInterior] = useState(""); 
  const [noExterior, setNoExterior] = useState(""); 
  const [cp, setCP] = useState(""); 
  const [estado, setEstado] = useState(""); 
  const [ciudad, setCiudad] = useState(""); 
  const [colonias, setColonias] = useState([]);

  const handleCPChange = async (event) => {
    const cpValue = event.target.value;

    try {
      const dataToSend = {
        cp: cpValue,
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTEyMTUyODMsInN1YiI6NTUsImlzcyI6Imh0dHBzOi8vc2l0aW93ZWJkZXNhcnJvbGxvLmNlbnRyYWx1cy5jbG91ZGFwcC5henVyZS5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNjkxMjE1MjIzLCJuYmYiOjE2OTEyMTUyMjMsImp0aSI6IldUa2hsNXJOamVkeHVIN3gifQ.S6O1KMh-Ma-4sf3nN5AbQ5qy4NnjFfXEiqVo6Iuf9Is",
      };
      const response = await fetch(
        `https://sitiowebdesarrollo.centralus.cloudapp.azure.com/api/codigo_postal/${cpValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTEzMDQzMjUsInN1YiI6NTUsImlzcyI6Imh0dHBzOi8vc2l0aW93ZWJkZXNhcnJvbGxvLmNlbnRyYWx1cy5jbG91ZGFwcC5henVyZS5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNjkxMzA0MjY2LCJuYmYiOjE2OTEzMDQyNjYsImp0aSI6IjI1cnV0TlNMdlBxVUdjeXYifQ.i2_WhJGroVIEqHHT2TCHt5N5DjFwO1QgxKwzylbMPs4"}`,
          },
        }
      );

      const data = await response.json();

      
      setEstado(data.estado);
      setCiudad(data.ciudad);
      setColonias(data.colonias);
      setColonias(data.colonias || []);
    } catch (error) {
      console.error("Error al obtener datos del CP:", error);
    }

    setCP(cpValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/RegistroPersonales', {
        
      });
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Domicilio</h1>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={calle}
              onChange={(e) => setCalle(e.target.value)}
            />
            <label htmlFor="" className="label">
              Calle
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={noInterior}
              onChange={(e) => setNoInterior(e.target.value)}
            />
            <label htmlFor="" className="label">
              No. Interior
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={noExterior}
              onChange={(e) => setNoExterior(e.target.value)}
            />
            <label htmlFor="" className="label">
              No. Exterior
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={cp}
              onChange={handleCPChange}
            />
            <label htmlFor="" className="label">
              CP
            </label>
          </div>
          <p></p>
            {colonias.length > 0 && (
              <div className="inputselectColonia">
                <label htmlFor="selectColonia">Selecciona tu colonia:</label>
                <select
                  id="selectColonia"
                  value={colonias[0]}
                  onChange={(e) => setColonias([e.target.value, ...colonias])}
                >
                  {colonias.map((colonia) => (
                    <option key={colonia.id} value={colonia.id}>
                      {colonia.colonia}
                    </option>
                  ))}
                </select>
              </div>
            )}
          
          {estado && (
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={estado}
                onChange={handleCPChange}
              />
              <label htmlFor="" className="label">
                Estado
              </label>
            </div>
          )}
          {ciudad && (
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={ciudad}
                onChange={handleCPChange}
              />
              <label htmlFor="" className="label">
                Ciudad
              </label>
            </div>
          )}

          <input type="submit" className="submitBtn" value="Siguiente" />
        </form>
      </div>
    </div>
  );
};
