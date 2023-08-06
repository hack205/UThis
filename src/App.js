import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registro } from './components/Registro_Datos';
import { Registro_Domicilio } from './components/Registro_Domicilio';

import {BrowserRouter , Routes , Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Registro" element={<Registro/>}/>
            <Route exact path="/RegistroDomicilio" element={<Registro_Domicilio/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
