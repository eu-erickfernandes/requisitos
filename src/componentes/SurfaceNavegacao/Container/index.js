import styles from  './Container.module.css'

const Container = ({index, children, visivel}) => {
    const className = visivel ? `${styles.container} ${styles.visivel}` : styles.container

    return(
        <div className={ className }>
            { children }
        </div>
    )
}

export default Container