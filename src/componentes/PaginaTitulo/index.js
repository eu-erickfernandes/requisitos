import styles from './PaginaTitulo.module.css'

const PaginaTitulo = ({ titulo, children }) => {
    return (
        <div className={ styles.containerTitulo }>
            <h2 className={ styles.paginaTitulo }>{ titulo }</h2>
            
            { children }
        </div>
    )
}

export default PaginaTitulo