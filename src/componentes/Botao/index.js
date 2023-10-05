import styles from './Botao.module.css'

const Cabecalho = ({ children }) => {
    return (
        <button className={ styles.botao }>{ children }</button>   
    )
}

export default Cabecalho