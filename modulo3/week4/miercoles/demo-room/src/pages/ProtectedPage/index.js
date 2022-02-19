import { useEffect,useState } from "react";
import {getUserWs} from '../../services/auth-ws';
import {Loading} from '../../components';
import {useNavigate} from 'react-router-dom';
const ProtectedPage = () => {
    //useState van al inicio de la funcion
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()
    //...
    const initData = () => {
       getUserWs().then(response=>{
         if(response.status){
            setIsLoading(false)
         }else{
            navigate("/login")
         }
       })
    }
    //cookies validar de lado del backend 
    //siempre el useEffect va antes del return 
    useEffect(()=>{
      initData()
    },[])
    return (
      isLoading ? 
      
      <Loading/>
      :
      <div>
        <h1>This page is hyper protected!</h1>
        <img src="https://laverdadnoticias.com/__export/1610324199617/sites/laverdad/img/2021/01/10/chayanne_cantante_sobrenombre.jpg_554688468.jpg" />
      </div>
    );
  };
  
  export default ProtectedPage;
  