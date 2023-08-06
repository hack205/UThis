import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Crea un objeto con las credenciales del usuario
      const credentials = {
        email: username,
        password: password,
      };

      // Realiza la llamada a la API para el inicio de sesión
      const response = await fetch(
        "https://sitiowebdesarrollo.centralus.cloudapp.azure.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      // Verifica si la respuesta es exitosa (código 200) y maneja la respuesta
      if (response.ok) {
        const data = await response.json();
        // Si la respuesta es 200, redirige al componente Home
        navigate("/home");
        // Aquí puedes guardar la respuesta en el estado si deseas mostrarla en el componente Home
        console.log("Respuesta del servidor:", data);
      } else {
        console.log("Inicio de sesión fallido. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Error al conectarse a la API:", error);
    }
  };

  return (
    <div>
      <div class="signupFrm">
        <div class="wrapper">
          <form action="" class="form" onSubmit={handleLogin}>
            <h1 class="title">Iniciar sesión</h1>

            <div class="inputContainer">
              <input
                type="text"
                class="input"
                placeholder="a"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label for="" class="label">
                Email
              </label>
            </div>

            <div class="inputContainer">
              <input
                type="password"
                class="input"
                placeholder="a"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="" class="label">
                Password
              </label>
            </div>
            <p>
              ¿No tiene ninguna cuenta?...{' '}
              <button
                type="button"
                className="btn-create-account"
                onClick={() => navigate('/registro')} // Redirige al componente de registro al hacer clic
              >
                Crear una
              </button>
            </p>
            <input type="submit" class="submitBtn" value="Iniciar sesión" />
          </form>
        </div>
      </div>
    </div>
  );
};
