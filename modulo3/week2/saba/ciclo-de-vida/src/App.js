import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import List from './components/List';

function App() {
  const [count,setCount] = useState(0)
  const [isShow,setIsShow] = useState(true)
  const [isLoader,setIsLoader] = useState(true)
  //Primera carga mounting
  //una unica vez
  useEffect(()=>{
    console.log("Me ejecuto por primera vez")
  },[])
  //Por siempre y para siempre
  useEffect(()=>{
    console.log("Me ejecuto?")
    //no es recomendalbe tener un set
    //setCount(12)
  })//tener cuidado al no colocar []

  //Update (Chisme)
  //observando cuando el valor de count cambie este se volvera a activar o ejecutar
  useEffect(()=>{
    console.log("Cuanto vale el contador?",count)
  },[count])
  //Unmounting (El que se muere)
  useEffect(()=>{
  //   clientInformation.connection("Eva")
  //   oneSingal.connection()
    return ()=>{
        // oneSingal.disconnect()
        // clientInformation.disconnect()
        // sendToClienteLoco(data)
    }

  },[])

  useEffect(()=>{
    console.log("perrro")
    setTimeout(()=>{
      setIsLoader(false)
    },3000)
    return ()=>{
      //action
      console.log("Gato")
    }
  },[])

  console.log("perro",count)// para ver cuantas veces de esta haciendo render
  //
  return (
    isLoader ?
    <div>
      <p> Estoy cargando ...</p>
    </div>
    :
    <div className="App">
      <span>Hola</span>
      <button onClick={()=>setCount(count + 1)}>Picale</button>
      <button
        onClick={()=>setIsShow(prevState => !prevState )}
      >Mata</button>
      {/* Conditional Rendering */}
      {/* (condicion) ? verdader : falsa */}
      {/* condicon(Verdadera) "&&" <Card/> */}
      {isShow  &&  <Card/>} {/* el render es mucho mas rapido*/}

      {/* {isShow ? <Card/> : null } demora en ms */}
      <List/>
    </div>
  );
}

export default App;
