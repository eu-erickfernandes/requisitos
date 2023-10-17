import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cabecalho from "./componentes/Cabecalho";
import Sidebar from "./componentes/Sidebar";

import  './assets/css/base/reset.css'
import './assets/css/base/tipografia.module.css'
import './assets/css/base/cores.module.css'

import app_styles from './App.module.css'
import Requisitos from "./pages/Requisitos";
import RequisitoFormulario from "./pages/RequisitoFormulario";
import Requisito from "./pages/Requisito";
import Teste from "./pages/Teste";

function App() {
  return (
      <BrowserRouter>
        <Cabecalho />

        <div className={ app_styles.containerApp }>
              <Sidebar />

              <Routes>
                <Route index element={ <Requisitos/> } />  
                <Route path="/teste" element={ <Teste/> } />  
                <Route path="/requisito_formulario" element={ <RequisitoFormulario/> } />  
                <Route path="/requisito/:id" element={ <Requisito/> } />
              </Routes>        
        </div>
      </BrowserRouter>
  );
}

export default App;