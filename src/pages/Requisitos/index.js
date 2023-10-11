import Botao from '../../componentes/Botao'
import PaginaTitulo from '../../componentes/PaginaTitulo'
import { Link } from 'react-router-dom'
import Tabela from '../../componentes/Tabela'
import TabelaRequisitos from './TabelaRequisitos'

const Requisitos = () => {

    return(
        <main>
            <PaginaTitulo titulo="Requisitos">
                <Link to="/requisito_formulario">
                    <Botao>Adicionar</Botao>
                </Link>
            </PaginaTitulo>

            <Tabela>
                <TabelaRequisitos />
            </Tabela>
        </main>
    )
}

export default Requisitos