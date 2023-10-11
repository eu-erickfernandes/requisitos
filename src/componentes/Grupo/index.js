import styles from './Grupo.module.css'

const Grupo = ({ children }) => {
    return(
        <div className={ styles.grupo }>
            { children }
        </div>
    )
}

export default Grupo