import { useState } from 'react';
import './App.css';
import img1 from './assets/images/Cahaynne.jpeg'
//vamos a importar como Dylan nos esta enseñando
import { CardStudent, Perro,FormStudent, ThemeComponent} from './components';
//manera tradicional
// import  CardStudent  from './components/CardStudent';
// import  Perro  from './components/Perro/Perro';

function App() {
  //por practica los hooks o state van a declararse hasta arriba de nuestra funcion
  const [ name, setName ] = useState("Kikis")
  // Count
  const [ count, setCount ] = useState(0)
  //Inputs
  //--basic
  const [basicInput,setBasicInput] = useState('')
  //--advance
  const [data,setData] = useState({});
  const [dataForm,setDataForm] = useState({});
  const studentSexy ={
    image:img1,
    header:'Chayanne',
    paragraph:'El mejor cantante y papá de Latino America'
  }

  const handleChange = (e) =>{
    //1)
    // let newData = data;
    // const {name,value} = e.target //<-- sacando las llaves que necesito del e.target
    // //al newData vas a crear una nueva llave con el nombre del input y de las a asignar su valor
    // newData[name] = value;
    // //ahora guardalo en el state de data
    // setData(newData)
    //2)
    const {name,value} = e.target
            //{name:"dylan",discription:"perro"}
    setData(prevState => { return {...prevState,[name]:value }  })
                              //{discription:"perro",name:"Santiago"}
    //3)
    //setData(prevState => { return {...prevState, [e.target.name]:e.targe.value  }  })

  }

  const handleChange2 = (e)=>{
    const {name,value} = e.target
    setDataForm(prevState => { return {...prevState,[name]:value }  })
  }

  const sendData = (event)=>{
    event.preventDefault()
    console.log("que es el dataForm",dataForm)
  }

  return (
    <div className="App">
        <CardStudent 
          //1) 
          {...studentSexy}
          //2)  image={studentSexy.image} header={studentSexy.header} paragraph={studentSexy.paragraph}
          //Cualquiera es correcta!
        />
        <div>
          <Perro name={name}/>
          <button
            onClick={
              ()=>{
                console.log("picando Mango")
                setName('Mango')
              }
            }
          >
            Mango
          </button>

          <button
            onClick={()=>setName('Kevin')}
          >Kevin</button>
        </div>
        {/* Count  */}
        <div>
          <p>{count}</p>
                                {/* prevState = 0 */}
          <button onClick={()=>setCount( prevState => prevState + 1 ) }>+</button>
          <button  onClick={()=> setCount(prevState => prevState - 1 )}>-</button>
        </div>
      {/* form */}
      <div>
        <input onChange={handleChange}
          name="header"
        />
        <input name="paragraph" onChange={handleChange}/>
        <button 
          onClick={(e)=>console.log("sendData",data)}
        >Send Data</button>
      </div>
      <FormStudent onChange={handleChange2} sendData={sendData}/>


      <ThemeComponent perro="Nova"/>

    </div>
  );
}

export default App;
