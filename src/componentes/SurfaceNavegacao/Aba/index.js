import styles from './Aba.module.css'

const Aba = ({ nome, ativa, indice, onClick }) => {
    const className = ativa ? `${styles.aba} ${styles.ativa}` : styles.aba

    const handleClick = () => {
        onClick(indice)
    }

    return (
        <li 
            className={ className }
            onClick={ handleClick }
        >
            { nome }
        </li>
    )
}

export default Aba