import React, { useState } from 'react'
import { createContext } from 'react'
export const StateContext = createContext() 
const Contexto = ({children}) => {

    const [pageActual, setPageActual] = useState("login")

    const[firstPassword, setFirstPassword] = useState("")
    const[secondPassword, setSecondPassword] = useState("")
    const [notEqual, setNotEqual] = useState (false)


    const submitForm = (e)=>{
      e.preventDefault()
      if(firstPassword == secondPassword){
        setNotEqual(false)
      }else{
        setNotEqual(true)
      }
    }

  return (
    <div>
      <StateContext.Provider value={{pageActual, setPageActual,submitForm, firstPassword, setFirstPassword,secondPassword, setSecondPassword, notEqual, setNotEqual}}>
        {children}
      </StateContext.Provider>
    </div>
  )
}

export default Contexto
