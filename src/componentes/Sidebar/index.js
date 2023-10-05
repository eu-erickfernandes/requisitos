import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.sidebar__navegacao }>
                <ul className={ styles.navegacao__lista }>
                    {/* <li>Usuário</li>
                    <li>Sistema</li>
                    <li>Módulos</li> */}
                    <li className={ styles.modulo }>Requisitos</li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar