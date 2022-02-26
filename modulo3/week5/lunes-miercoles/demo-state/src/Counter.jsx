import {useState} from 'react'
import {increase,decrease} from './redux/actions';//importamos las acciones ¡funcionales!
import {useSelector,useDispatch} from 'react-redux';
const Counter = () => {
  //State local en el componente
  // const [counter,setCount] = useState(0)// mi estado!!!!
  // const handleMinus = () => setCount( prev => prev - 1);
  // const handlePlus =  () => setCount(counter + 1)
  //const demoFunc = (e) => console.log("que esta pasando",e)
  //parte 2 redux
  const counter = useSelector((state)=>{
    console.log("que rayos es el state",state)
    return state.counter
  })
  //useDispatch()
  const dispatch = useDispatch()//Hook
  const handleReduxPlus = () => dispatch( increase() );
  const handleReduxMinus = () => dispatch( decrease() );
  return (
    <div className="App">
      <header className="App-header">
        <h1> {counter} </h1>
        <div>
          {/* se puden usar las funciones o metodos de dos formas en el prop onClick */}
          {/* <button onClick={handleMinus} type="button">-</button> */}
          {/* <button onClick={()=>handlePlus()} type="button">+</button> */}
          {/* <button onClick={(event)=>demoFunc("Mango")} type="button">+</button> */}
        </div>
        <div>
          <button onClick={handleReduxMinus} type="button">-</button>
          <button onClick={handleReduxPlus} type="button">+</button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
