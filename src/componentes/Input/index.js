import styles from './Input.module.css'

const Input = ({ label, type, name, required, value, onChange, readonly }) => {

    return(
        <div className={ styles.grupo }>
            <label htmlFor={ `campo-${name}` }>{ label }</label>
            
            {type != 'textarea' && <input 
                id={ `campo-${name}` } 
                className={ styles.input } 
                type={ type } 
                name={ name }
                value={ value }
                onChange={ onChange }
                readOnly={ readonly }
                required={ required } 
            />}

            {type == 'textarea' && <textarea
                id={ `campo-${name}` } 
                className={ styles.textarea } 
                name={ name }
                value={ value }
                onChange={ onChange }
                readOnly={ readonly }
                required={ required } 
            ></textarea>}
        </div>
    )
}

export default Input