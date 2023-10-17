import { useState } from 'react'
import styles from './SurfaceNavegacao.module.css'
import Aba from './Aba'
import Container from './Container'

const SurfaceNavegacao = ({ listaAbas, children }) => {    
    const abasInit = listaAbas.map((aba, index) => {
        return{
            nome: aba,
            ativa: index === 0
        }
    })

    const [abas, setAbas] = useState(abasInit)

    const containersInit = children.map((container) => {
        return {
            index: container.props.index,
            children: container.props.children,
            visivel: container.props.index === '0'
        }
    })

    const [containers, setContainers] = useState(containersInit)

    const ativaAba = (indice) => {
        setAbas(abas.map((aba, index) => {
            aba.ativa = index === indice
            return aba
        }))
    }

    const ativaContainer = (indice) => {
        setContainers(containers.map((container, index) => {
            container.visivel = index === indice
            return container
        }))
    }

    const handleClick = (indice) => {
        ativaAba(indice)
        ativaContainer(indice)
    }

    return(
        <div className={ styles.surfaceNavegacao }>
            <nav>
                <ul className={ styles.navegacaoLista }>
                    {abas.map((aba, index) => (
                        <Aba 
                            key={ index }
                            nome={ aba.nome }
                            ativa={ aba.ativa }
                            onClick={ handleClick }
                            indice={ index }
                        />
                    ))}
                </ul>
            </nav>
            
            { containers.map((container, index) => (
                <Container key={ index } visivel={ container.visivel } index={ container.index }>
                    { container.children }
                </Container>
            )) }
        </div>
    )
}

export default SurfaceNavegacao