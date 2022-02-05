import {useEffect} from 'react'

function Card(){

    useEffect(()=>{
        console.log("Que bonita es la vida")
        return ()=>{
            console.log("Adios mundo cruel")
        }
    },[])

    return (
        <div>
            <span>Hola  soy el que se morira</span>
        </div>
    )
}


export default Card