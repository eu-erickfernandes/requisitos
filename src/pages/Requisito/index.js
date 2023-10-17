import { useEffect, useState } from 'react'
import PaginaTitulo from '../../componentes/PaginaTitulo'
import Tabela from '../../componentes/Tabela'
import { useParams } from 'react-router-dom'
import styles from './Requisito.module.css'
import SurfaceNavegacao from '../../componentes/SurfaceNavegacao'

const Requisito = () => {
    const parametros = useParams()
    const id = parametros.id 

    const [requisito, setRequisito] = useState({})
    
    const getRequisito = async () => {
        const URL = 'http://localhost:8080/requisitos/'

        const dados = await fetch(`${URL}${id}`)

        const json = await dados.json()

        setRequisito(json)
    }

    // useEffect(() => {
    //     getRequisito()
    // })

    return(
        <main>
            <PaginaTitulo titulo={ `Requisito #${id}`}/>

            <Tabela noHover>
                        <tbody className={ styles.tabelaRequisito }>
                            <tr>
                                <th>Título</th>
                                <th>Categoria</th>
                                <th>Status</th>
                            </tr>

                            <tr>
                                <td>{ requisito.titulo }</td>
                                <td>{ requisito.categoria ? requisito.categoria : '-' }</td>
                                <td>{ requisito.status ? requisito.status : '-' }</td>
                            </tr>

                            <tr>
                                <th colSpan='4'>Descrição</th>
                            </tr>

                            <tr>
                                <td colSpan='4' className={ styles.descricao }>{ requisito.descricao }</td>
                            </tr>

                            <tr>
                                <th>Criação</th>
                                <th>Homologação</th>
                                <th>Conclusão</th>
                            </tr>

                            <tr>
                                <td>{ requisito.criacao }</td>
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

            <SurfaceNavegacao listaAbas={['Dados', 'Anexos', 'Comentários']}>
                <div index='0'>
                    
                </div>

                <div index='1'>Anexos</div>

                <div index='2'>Comentários</div>
            </SurfaceNavegacao>
        </main>
    )
}

export default Requisito