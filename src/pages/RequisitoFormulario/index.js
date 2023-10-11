import { useState } from 'react'
import Botao from '../../componentes/Botao'
import PaginaTitulo from '../../componentes/PaginaTitulo'
import Surface from '../../componentes/Surface'
import Input from '../../componentes/Input'
import Formulario from '../../componentes/Formulario'

const RequisitoFormulario = () => {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    const handleTitulo = (evento) => {
        const valor = evento.target.value 
        setTitulo(valor)
    }

    const handleDescricao = (evento) => {
        const valor = evento.target.value 
        setDescricao(valor)
    }

    const cadastraRequisito = async () => {
        const URL = 'http://localhost:8080/requisitos'

        const dados = {
            titulo: titulo,
            descricao: descricao,
            criacao: new Date().toLocaleDateString(),
            status: 'Backlog'
        }

        try{

            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                
                body: JSON.stringify(dados)
            })

            const resultado = await response.json()

            console.log(resultado)
        } catch(erro){
            console.log(erro)
        }
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        cadastraRequisito()
    }

    return(
        <main>
            <PaginaTitulo titulo="Adicionar Requisito" />

            <Surface>
                <Formulario onSubmit={ handleSubmit }>
                    <Input 
                        label="Título" 
                        type="text" 
                        name="titulo" 
                        onChange={ handleTitulo } 
                        required 
                    />

                    <Input 
                        label="Descrição" 
                        type="textarea" 
                        name="descricao" 
                        onChange={ handleDescricao } 
                        required 
                    />

                    <Botao>Salvar</Botao>
                </Formulario>
            </Surface>
        </main>
    )
}

export default RequisitoFormulario