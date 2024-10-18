import React from 'react'
import { StateContext } from "../context/Contexto"
import { useContext } from "react"
import "./Cadastro.css"
import {Link} from "react-router-dom"
import Button from "../components/Button"
const Cadastro = () => {

    const {pageActual, setPageActual, submitForm, firstPassword, setFirstPassword,secondPassword, setSecondPassword, notEqual} = useContext(StateContext)

  return (
    <form className='cadastro-form' onSubmit={(e)=>submitForm(e)}>
      <div className="cadastro-content container">
      <label>
            <span>Nome</span>
            <input type="text"  />
        </label>
      <label>
            <span>Email</span>
            <input type="email" required  />
        </label>
      <label>
            <span>Senha</span>
            <input type="password"   onChange={(e)=>setFirstPassword(e.target.value)}/>
        </label>
      <label>
            <span>Confirmar senha</span>
            <input type="password" onChange={(e)=>setSecondPassword(e.target.value)}  />
            {notEqual == true && <p className='not-equal'>As senhas não são compativeis</p>}
        </label>
        <Button texto="Cadastrar"/>
        <p >Já possui uma conta? <Link to="/" onClick={(e)=>setPageActual("login")}>Faça login</Link></p>
      </div>
   
    </form>
  )
}

export default Cadastro
