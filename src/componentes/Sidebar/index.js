import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.sidebar__navegacao }>
                <details className={ styles.navegacao__dropdown }>
                    <summary>Usuário</summary>

                    <nav>
                        <ul>
                            <li>Perfil</li>
                            <li>Sair</li>
                        </ul>
                    </nav>
                </details>

                <details className={ styles.navegacao__dropdown }>
                    <summary>Sistema</summary>

                    <nav>
                        <ul>
                            <li className={ styles.ativo }>Convênios</li>
                            <li>PPA</li>
                            <li>Operações de Crédito</li>
                        </ul>
                    </nav>
                </details>

                <ul className={ styles.navegacao__lista }>
                    <li className={ styles.secao }>Módulos</li>
                    <li className={ `${styles.modulo} ${styles.ativo}` }>Requisitos</li> 
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar