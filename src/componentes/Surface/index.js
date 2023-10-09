import styles from './Surface.module.css'

const Surface = ({ children }) => {
    return(
        <div className={ styles.surface }>
            { children }
        </div>
    )
}

export default Surface