import { useEffect,useState } from "react";
import axios from 'axios';
function  List(){
    const list2= [{
        name:"mango"
    }]
    const [list,setList] = useState([])
    const getCharacter = async () =>{
        try{
            const { data } = await axios.get("https://rickandmortyapi.com/api/character");
            setList(data.results)
            console.log("data",data)
        }catch(e){
            console.log("el error",e)
        }
    }
    //cuando el [] estan vacion solo se va a ejecutar una sola vez!!!
    useEffect(()=>{
        // codigo de stackoverflow
        // async function perro(){
        //      await perro2.get()
        // }
        // perro()

        getCharacter()
    },[])
    return(
        <div>
            <span>Esta es una lista!</span>
            {
                //list.length === 0(null,undefined) || list.lenght == 0  || false
                !list.length ? <p>Estoy cargando la lista</p> :
                list.map((perro,index)=>(<p key={index}>{perro.name}</p> ))
            }
            {/* {
                lis2.map((perro,item)=>{
                    return <p>{perro.name}</p>
                })
            } */}
        </div>
    )
}


export default List;