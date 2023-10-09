import Botao from '../../componentes/Botao'
import PaginaTitulo from '../../componentes/PaginaTitulo'
import Surface from '../../componentes/Surface'

const RequisitoFormulario = () => {
    return(
        <main>
            <PaginaTitulo titulo="Adicionar Requisito" />

            <form>
                <label>Título</label>
                <input type='text' name='titulo'/>

                <Botao>Salvar</Botao>
            </form>
        </main>
    )
}

export default RequisitoFormulario