import { useEffect, useState } from 'react'
import Botao from '../../componentes/Botao'
import PaginaTitulo from '../../componentes/PaginaTitulo'
import Surface from '../../componentes/Surface'
import { Link } from 'react-router-dom'

const Requisitos = () => {
    const URL = 'http://localhost:8080/requisitos'
    
    const [requisitos, setRequisitos] = useState([])

    const getRequisitos = async () => {
        const dados = await fetch(URL)
        const json = await dados.json()

        setRequisitos(json)
    }

    useEffect(() => {
        getRequisitos()
    }, [])

    return(
        <main>
            <PaginaTitulo titulo="Requisitos">
                <Link to="/requisito_formulario">
                    <Botao>Adicionar</Botao>
                </Link>
            </PaginaTitulo>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                    </tr>
                </thead>

                <tbody>
                    { requisitos.map((requisito) => (
                        <tr key={ requisito.id }>
                            <td>{ requisito.titulo }</td>
                        </tr>
                    )) }
                </tbody>
            </table>


            <h2>(Estática)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Título</th>
                        <th>Status</th>
                        <th>Criação</th>
                        <th>Validação</th>
                        <th>Previsão</th>
                        <th>Homologação</th>
                        <th>Desenvolvedor</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Importante</td>
                        <td>Correção no formulário de convênios </td>
                        <td>Desenvolvimento</td>
                        <td>30/03/1999</td>
                        <td>02/04/1999</td>
                        <td>10/04/1999</td>
                        <td>-</td>
                        <td>Alisson Nascimento</td>
                    </tr>

                    <tr>
                        <td>Importante</td>
                        <td>Correção no formulário de convênios </td>
                        <td>Desenvolvimento</td>
                        <td>30/03/1999</td>
                        <td>02/04/1999</td>
                        <td>10/04/1999</td>
                        <td>✔</td>
                        <td>Alisson Nascimento</td>
                    </tr>
                    <tr>
                        <td>Importante</td>
                        <td>Correção no formulário de convênios </td>
                        <td>Desenvolvimento</td>
                        <td>30/03/1999</td>
                        <td>02/04/1999</td>
                        <td>10/04/1999</td>
                        <td>-</td>
                        <td>Alisson Nascimento</td>
                    </tr>

                    <tr>
                        <td>Importante</td>
                        <td>Correção no formulário de convênios </td>
                        <td>Desenvolvimento</td>
                        <td>30/03/1999</td>
                        <td>02/04/1999</td>
                        <td>10/04/1999</td>
                        <td>✔</td>
                        <td>Alisson Nascimento</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default Requisitos