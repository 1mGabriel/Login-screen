import {Link, Outlet} from "react-router-dom"
import './App.css'
import { StateContext } from "./context/Contexto"
import { useContext, useState } from "react"
import Desktop from "./Routes/Desktop"
function App() {

  const {pageActual, setPageActual} = useContext(StateContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  return (
    <>
  {windowWidth < 1279 ? 
  <> 
      {/* Mobile */}
      <header className='header'>
    {pageActual == "login" ? (
            <div className="header-content container">
            <h1 className='gradient'>Bem vindos  de volta!</h1>
          <p>Para continuar conectado com a gente, por favor faça login com sua conta </p>
            </div>
    )  : (
      <div className="header-content container cadastro">
<Link>
<svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e)=>setPageActual("login")}>
<path d="M39.5833 28H10.4166" stroke="#4136D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 44.3333L10.4166 28L25 11.6666" stroke="#4136D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>

      <h1 className='gradient'>Cadastrar</h1>
      </div>
    ) }

    </header>
    <div className="outlet">
      <Outlet/>
    </div>
  </>
  :
  <Desktop/>
  }

    

    </>
  )
}

export default App
