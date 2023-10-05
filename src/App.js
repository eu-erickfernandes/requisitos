import Cabecalho from "./componentes/Cabecalho";
import Botao from "./componentes/Botao";
import Sidebar from "./componentes/Sidebar";

import  './css/base/reset.css'
import tipografia_styles from './css/base/tipografia.module.css'

import app_styles from './App.module.css'

function App() {
  return (
    <>
      <Cabecalho />

      <div className={ app_styles.containerApp }>
        <Sidebar />

        <main>
          <div>

            <h2 >Requisitos</h2>

            <Botao>Adicionar</Botao>
          </div>

          <div>

          </div>
        </main>
      </div>
    </>
  );
}

export default App;