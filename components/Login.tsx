"use client";
import Link from "next/link";
import { useState } from "react";
// import formStyles from "@/styles/formStyles.module.css"

const Login = ({onClose}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(`Login con correo: ${email} y contraseña: ${password}`)
    }

    return (
        <>
        <div >
            <div>
            <h1>Iniciar Sesión</h1>     
            <form> 
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" value={email} onChange={(e)=>{
                    e.preventDefault()
                    setEmail(e.target.value)
                }} ></input>
                <br /><br />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" 
                id="password" 
                value={password} 
                onChange={(e)=>{
                    e.preventDefault()
                    setPassword(e.target.value)
                }} />
                <br /><br />
                <button id="button-login" onClick={handleLogin} >Iniciar Sesión</button>
                <br /><br />
            <p>¿No tienes cuenta? <Link href="pages/Registro">Regístrate</Link></p> 
            <button onClick={onClose}>Cerrar</button>
            </form>
            </div>
        </div>
        </>
    )
}


export default Login
