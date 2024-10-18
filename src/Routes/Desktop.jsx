import React, { useContext } from 'react'
import Button from '../components/Button'
import "./Desktop.css"
import { StateContext } from '../context/Contexto'
const Desktop = () => {

const {submitForm, firstPassword, setFirstPassword,secondPassword, setSecondPassword, notEqual} = useContext(StateContext)




  return (
    <div className='main-container'>
      <div className="login-desktop">
        <div className="login-desktop-content ">
            <h1>Bem vindo de volta!</h1>
            <p>Para continuar conectado com a gente, por favor faça login com sua conta </p>
            <form onSubmit={(e)=>submitForm(e)}>
            <h2>Login</h2>
        <label>
          <span>Email</span>
          <input type="text" />
        </label>
        <label>
          <span>Senha</span>
          <input type="password" />
          <p>Esqueci minha senha</p>
        </label>
        <Button texto="Login" />
            </form>
        </div>
        <div className="sing-in-content">
            <h1>Criar Conta</h1>
            <form onSubmit={(e)=>submitForm(e)}>
            <div >
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
            <input type="password" onChange={(e)=>setFirstPassword(e.target.value)} />
        </label>
      <label>
            <span>Confirmar senha</span>
            <input type="password"   onChange={(e)=>setSecondPassword(e.target.value)} />
            {notEqual == true && <p className='not-equal'>As senhas não são compativeis</p>}
        </label>
        <Button id="criar" texto="Cadastrar"/>
      </div>
      <div className="links">
          <ul>
            <li>
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_16_70)">
                  <path
                    d="M46 22C46 9.84981 35.7025 0 23 0C10.2975 0 0 9.84981 0 22C0 32.9808 8.41081 42.0824 19.4062 43.7327V28.3594H13.5664V22H19.4062V17.1531C19.4062 11.6394 22.8401 8.59375 28.0938 8.59375C30.6101 8.59375 33.2422 9.02344 33.2422 9.02344V14.4375H30.342C27.4848 14.4375 26.5938 16.1334 26.5938 17.8733V22H32.9727L31.9529 28.3594H26.5938V43.7327C37.5892 42.0824 46 32.9809 46 22Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M31.9529 28.3594L32.9727 22H26.5938V17.8733C26.5938 16.1332 27.4848 14.4375 30.342 14.4375H33.2422V9.02344C33.2422 9.02344 30.6101 8.59375 28.0936 8.59375C22.8401 8.59375 19.4062 11.6394 19.4062 17.1531V22H13.5664V28.3594H19.4062V43.7327C20.5951 43.9109 21.7966 44.0003 23 44C24.2034 44.0003 25.4049 43.9109 26.5938 43.7327V28.3594H31.9529Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_70">
                    <rect width="46" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.611 20.083H42V20H24V28H35.303C33.654 32.657 29.223 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24C4 35.045 12.955 44 24 44C35.045 44 44 35.045 44 24C44 22.659 43.862 21.35 43.611 20.083Z"
                  fill="#FFC107"
                />
                <path
                  d="M6.30591 14.691L12.8769 19.51C14.6549 15.108 18.9609 12 23.9999 12C27.0589 12 29.8419 13.154 31.9609 15.039L37.6179 9.382C34.0459 6.053 29.2679 4 23.9999 4C16.3179 4 9.65591 8.337 6.30591 14.691Z"
                  fill="#FF3D00"
                />
                <path
                  d="M24.0001 44C29.1661 44 33.8601 42.023 37.4091 38.808L31.2191 33.57C29.144 35.149 26.6076 36.0028 24.0001 36C18.7981 36 14.3811 32.683 12.7171 28.054L6.19507 33.079C9.50507 39.556 16.2271 44 24.0001 44Z"
                  fill="#4CAF50"
                />
                <path
                  d="M43.611 20.083H42V20H24V28H35.303C34.5142 30.2164 33.0934 32.1532 31.216 33.571L31.219 33.569L37.409 38.807C36.971 39.205 44 34 44 24C44 22.659 43.862 21.35 43.611 20.083Z"
                  fill="#1976D2"
                />
              </svg>
            </li>
            <li>
              <svg
                width="48"
                height="44"
                viewBox="0 0 48 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7144 23.3354C36.7796 29.7979 42.8996 31.9487 42.9671 31.9762C42.9154 32.1275 41.9895 35.0411 39.7432 38.05C37.8015 40.6515 35.7859 43.2433 32.6115 43.2977C29.4922 43.3499 28.4891 41.6016 24.9225 41.6016C21.357 41.6016 20.2429 43.2433 17.2897 43.3499C14.2252 43.4565 11.8916 40.5363 9.93375 37.9448C5.93325 32.6428 2.87587 22.9624 6.981 16.4281C9.02025 13.1831 12.6652 11.1285 16.6211 11.0756C19.6301 11.023 22.4704 12.9311 24.3097 12.9311C26.148 12.9311 29.5995 10.6362 33.228 10.9731C34.7471 11.0312 39.0109 11.5355 41.7487 15.2095C41.5286 15.335 36.6615 17.9323 36.7144 23.3354ZM30.852 7.46584C32.4787 5.66081 33.5737 3.14731 33.2752 0.647217C30.93 0.733498 28.0942 2.07962 26.4124 3.88397C24.9049 5.48137 23.5849 8.03887 23.9407 10.4895C26.5549 10.6751 29.2249 9.2719 30.852 7.46584Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        </div>
            </form>
        </div>
      </div>
      </div>

        
  )
}

export default Desktop
