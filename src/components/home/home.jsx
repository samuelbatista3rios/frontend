import React from 'react'
import Main from '../template/Main'
import {Link} from 'react-router-dom'

export default props =>
<Main icon="home" title="Início" 
subtitle="Projeto ReactJs.">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">O objetivo desse App foi apenas treinar! Nele simulei um sistema de cadastro que busca dado no back-end e retorna na tela, possibilitando a edição do mesmo.
    a versão mobile ficou com alguns problemas de responsividade para exibir a lista, Na proxima atualização sera arrumada! xD</p>
    <hr/>
    <Link to='https://www.linkedin.com/in/samuel-fonseca-0289a6121/'>
           <i className='fa fa-linkedin'>Meu Linkedin</i>
    </Link>
</Main>