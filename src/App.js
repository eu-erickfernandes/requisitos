import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cabecalho from "./componentes/Cabecalho";
import Sidebar from "./componentes/Sidebar";

import  './assets/css/base/reset.css'
import './assets/css/base/tipografia.module.css'
import './assets/css/base/cores.module.css'

import app_styles from './App.module.css'
import Requisitos from "./pages/Requisitos";
import RequisitoFormulario from "./pages/RequisitoFormulario";

function App() {
  return (
    <>
      <Cabecalho />

      <div className={ app_styles.containerApp }>
        <BrowserRouter>
            <Sidebar />

            <Routes>
              <Route index element={ <Requisitos/> }></Route>  
              <Route path="/requisito_formulario" element={ <RequisitoFormulario/> }></Route>  
            </Routes>        
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;