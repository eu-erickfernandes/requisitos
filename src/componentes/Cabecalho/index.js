import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className={ styles.cabecalho }>
            <h1 className={ styles.cabecalho__titulo }>
                <img alt='Ícone requisito' src='./requisito.svg'/>
                Sistema de Gerenciamento de Requisitos
            </h1>

            <img className={ styles.cabecalho__logo } alt='Logo' />
        </header>    
    )
}

export default Cabecalho