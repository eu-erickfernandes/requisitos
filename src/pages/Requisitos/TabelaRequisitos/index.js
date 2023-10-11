import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TabelaRequisitos = () => {
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
        <>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Título</th>
                    <th>Status</th>
                    <th>Criação</th>
                    <th>Validação</th>
                    <th>Previsão</th>
                    <th>Homologação</th>
                    <th>Conclusão</th>
                    <th>Desenvolvedor</th>
                </tr>
            </thead>

            <tbody>
                { requisitos.map((requisito) => (
                    <tr key={ requisito.id }>
                        <td>{ requisito.categoria ? requisito.categoria : '-' }</td>

                        <td>
                            <Link to={`/requisito/${requisito.id}`}>
                                { requisito.titulo }
                            </Link>
                        </td>

                        <td>{ requisito.status }</td>
                        <td>{ requisito.criacao }</td>
                        <td>{ requisito.validacao ? requisito.validacao : '-' }</td>
                        <td>{ requisito.previsao ? requisito.previsao : '-' }</td>
                        <td>{ requisito.homologacao ? requisito.homologacao : '-' }</td>
                        <td>{ requisito.conclusao ? requisito.conclusao : '-' }</td>
                        <td>{ requisito.desenvolvedor ? requisito.desenvolvedor : '-' }</td>
                    </tr>
                )) }
            </tbody>
        </>
    )
}

export default TabelaRequisitos