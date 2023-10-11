import styles from './Tabela.module.css'

const Tabela = ({ children, noHover }) => {
    const className = noHover ? `${ styles.tabela } ${ styles.noHover }` : `${ styles.tabela }`

    return(
        <table className={ className }>
            { children }
        </table>
    )
}

export default Tabela