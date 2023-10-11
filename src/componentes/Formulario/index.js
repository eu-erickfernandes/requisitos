import styles from './Formulario.module.css'

const Formulario = ({ children, onSubmit }) => {
    return(
        <form className={ styles.formulario } onSubmit={ onSubmit }>
            { children }
        </form>
    )
}

export default Formulario