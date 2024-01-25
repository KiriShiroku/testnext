"use client";
import {useState} from "react"
const Counter = () =>{
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(true)

    return (
        <div> 
            <p>Haz hecho click {counter}</p>
            <button onClick= {() => {setCounter(counter+1)}}>Da click aqui</button>
            <button onClick= {()=>{setCounter(0)}}>Resetear</button>
            <br></br>


            <button onClick={()=>{
                setShowMessage(!showMessage)
            }}>{!showMessage ? "Mostrar Mensaje" : "Ocultar mensaje"}</button>

            {
                showMessage && <p>Hola mundo!!</p>
            }
        </div>
    )
}

export default Counter;
