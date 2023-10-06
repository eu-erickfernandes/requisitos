import Cabecalho from "./componentes/Cabecalho";
import Botao from "./componentes/Botao";
import Sidebar from "./componentes/Sidebar";

import  './css/base/reset.css'
import './css/base/tipografia.module.css'
import './css/base/cores.module.css'

import app_styles from './App.module.css'
import PaginaTitulo from "./componentes/PaginaTitulo";

function App() {
  return (
    <>
      <Cabecalho />

      <div className={ app_styles.containerApp }>
        <Sidebar />

        <main>
          <PaginaTitulo titulo="Requisitos">
            <Botao>Adicionar</Botao>
          </PaginaTitulo>

          <div>

          </div>
        </main>
      </div>
    </>
  );
}

export default App;