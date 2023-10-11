import { useEffect, useState } from 'react'
import PaginaTitulo from '../../componentes/PaginaTitulo'
import Surface from '../../componentes/Surface'
import Tabela from '../../componentes/Tabela'
import { useParams } from 'react-router-dom'
import styles from './Requisito.module.css'

const Requisito = () => {
    const parametros = useParams()
    const id = parametros.id 
    
    const getRequisito = async () => {
        const URL = 'http://localhost:8080/requisitos/'

        const dados = await fetch(`${URL}${id}`)

        const json = await dados.json()

        setRequisito(json)
    }

    const [requisito, setRequisito] = useState({})

    useEffect(() => {
        getRequisito()
    }, [])

    return(
        <main>
            <PaginaTitulo titulo={ `Requisito #${id}`}/>
            
            <Tabela noHover>
                <tbody className={ styles.tabelaRequisito }>
                    <tr>
                        <th colSpan='4'>Título</th>
                    </tr>

                    <tr>
                        <td colSpan='4'>{ requisito.titulo }</td>
                    </tr>

                    <tr>
                        <th colSpan='4'>Descrição</th>
                    </tr>

                    <tr>
                        <td colSpan='4' className={ styles.descricao }>{ requisito.descricao }</td>
                    </tr>

                    <tr>
                        <th>Criação</th>
                        <th>Validação</th>
                        <th>Homologação</th>
                        <th>Conclusão</th>
                    </tr>

                    <tr>
                        <td>{ requisito.criacao }</td>
                        <td>{ requisito.validacao ? requisito.validacao : '-' }</td>
                        <td>{ requisito.homologacao ? requisito.homologacao : '-' }</td>
                        <td>{ requisito.conclusao ? requisito.conclusao : '-' }</td>
                    </tr>

                    <tr>
                        <th colSpan='2'>Desenvolvedor</th>
                        <th colSpan='2'>Previsão de conclusão</th>
                    </tr>

                    <tr>
                        <td colSpan='2'>{ requisito.desenvolvedor ? requisito.desenvolvedor : '-' }</td>
                        <td colSpan='2'>{ requisito.previsao ? requisito.previsao : '-' }</td>
                    </tr>
                </tbody>
            </Tabela>
        </main>
    )
}

export default Requisito