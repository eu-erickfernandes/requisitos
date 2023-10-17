import PaginaTitulo from "../../componentes/PaginaTitulo"
import SurfaceNavegacao from "../../componentes/SurfaceNavegacao"

const Teste = () => {
    return (
        <main>
            <PaginaTitulo titulo='Teste'/>

            <SurfaceNavegacao listaAbas={['Dados', 'Anexos', 'Comentários']}>
                <div index='0'>
                    <p>Dados</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores quia eaque dolorum voluptatum quisquam quam in sequi magni sit autem ducimus reprehenderit sint tempore id vitae, at recusandae nihil.</p>
                </div>

                <div index='1'>
                    <p>Anexos</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores quia eaque dolorum voluptatum quisquam quam in sequi magni sit autem ducimus reprehenderit sint tempore id vitae, at recusandae nihil.</p>
                </div>

                <div index='2'>
                    <p>Comentários</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores quia eaque dolorum voluptatum quisquam quam in sequi magni sit autem ducimus reprehenderit sint tempore id vitae, at recusandae nihil.</p>
                </div>
            </SurfaceNavegacao>
        </main>
    )
}

export default Teste