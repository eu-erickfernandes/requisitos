import { Link } from 'react-router-dom'

import styles from './Sidebar.module.css'

import { ReactComponent as IconeUsuario } from '../../assets/icones/account.svg'
import { ReactComponent as IconePerfil } from '../../assets/icones/perfil.svg'
import { ReactComponent as IconeLogout } from '../../assets/icones/logout.svg'
import { ReactComponent as IconeSistema } from '../../assets/icones/computer.svg'
import { ReactComponent as IconeRequisito } from '../../assets/icones/requisito.svg'

const Sidebar = () => {
    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.sidebar__navegacao }>
                <details className={ styles.navegacao__dropdown }>
                    <summary>
                        <div className={ styles.dropdown__titulo }>
                            <IconeUsuario className={ styles.icone } />
                            Usuário
                        </div>
                    </summary>

                    <nav>
                        <ul>
                            <li>
                                <IconePerfil className={ styles.icone } />
                                Perfil
                            </li>

                            <li>
                                <IconeLogout className={ styles.icone } />
                                Sair
                            </li>
                        </ul>
                    </nav>
                </details>

                <details className={ styles.navegacao__dropdown }>
                    <summary>
                        <div className={ styles.dropdown__titulo }>
                            <IconeSistema className={ styles.icone } />
                            Sistema
                        </div>
                    </summary>

                    <nav>
                        <ul>
                            <li className={ styles.ativo }>Sistema 01</li>
                            <li>Sistema 02</li>
                            <li>Sistema 03</li>
                        </ul>
                    </nav>
                </details>

                <ul className={ styles.navegacao__lista }>
                    <li className={ styles.secao }>Módulos</li>


                        <Link to="/">
                    <li className={ `${styles.modulo} ${styles.ativo}` }>
                            <IconeRequisito className={ styles.icone } />
                            Requisitos
                    </li> 
                        </Link>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar