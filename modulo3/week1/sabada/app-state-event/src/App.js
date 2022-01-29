import { useState } from 'react';
import './App.css';
import img1 from './assets/images/Cahaynne.jpeg';
import img2 from './assets/images/tom_sexy2.jpeg'
import img3 from './assets/images/sexy.webp';
//vamos a importar como Dylan nos esta enseñando
import { CardStudent, Perro,FormStudent, ThemeComponent,Button} from './components';
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
  //list key!!!
  const arrayName = [
    "Jelena","Sarah","Santiago", "Eva", "Luis","Nat","David","Cris","Dani","Sergio","Oswaldo"
  ]

  //List array object = [{...},{...},{...}]
  const arraySexy = [
  {
    image:img1,
    header:'Chayanne',
    paragraph:'El mejor cantante y papá de Latino America'
  },
  {
    image:img2,
    header:'Tom H.',
    paragraph:'Loki'
  },
  {
    image:img3,
    header:'Superman',
    paragraph:'El mas sexy de DC'
  }]
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
      <Button/>
      <Button label="danger" type="large" buttonsType='danger' onClick={()=>console.log("Soy peligroso")} />
      <Button label="small" type="small" buttonsType='secondary' onClick={()=>console.log("Soy el Segundo")}/>
      {/* Maps list Key simple */}

      {arrayName.map((name,index,arrOriginal)=>(
        <Perro key={index} name={name} />
      ) )}

      {/* Map object nested */}
      {arraySexy.map((item,index,arrOriginal)=>{
        //...
        console.log("que index soy",index)
        return <CardStudent 
            key={index}
            //1) 
            {...item}
            //2) header={item.name} image={item.img} paragraph={item.paragraph}
          />
      })}
    </div>
  );
}

export default App;
