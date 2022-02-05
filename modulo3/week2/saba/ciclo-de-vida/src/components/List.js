import { useEffect,useState } from "react";
import axios from 'axios';
function  List(){
    let list = {};
    let lis2 = [
        {name:"Mango"},
        {name:"Jax"},
        {name:"Kevin"},
        {name:"Melvin"},
        {name:"Jodie"},
        {name:"Kikis"}
    ];

    return(
        <div>
            {
                lis2.map((perro,index)=>(<p key={index}>{perro.name}</p> ))
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