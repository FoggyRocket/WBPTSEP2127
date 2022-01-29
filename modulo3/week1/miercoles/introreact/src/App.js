//import logo from './logo.svg'; //importar un imagen en formato .svg
import './App.css'; //importar styles donde pertenecen 
import StudentCard from './components/StudentCard'

const CardProfile =  (props)=>(
  <div>
    <span>Nombre: Dylan</span>
    <span>Telefono: 1234567890</span>
  </div>
)

const Perro=(props)=>{
  //...
  //const suma = 4+4
  //...
  return (
    <div>
      <p>Nova</p>
    </div>
  )
}
function MyComponent(props) {
  return (
    <main>
      <h1>Hello Ironhacker!</h1>
      <h3>Welcome To World of React</h3>
    </main>
  )
}
const title = <h1>Hola Dylan este es tu perfil</h1>
// un arrowFunction tiene un return implicito que ya no tenemos que escribir la palabra return
// si colocamos {} tenemos que coloar return 
function App() {
  //code

  const student = {
    firstName:"Kain",
    lastName:"Salvador",
    food:"Tacos del Gato volador"
  }

  const student2 = {
    firstName:"Dani",
    lastName:"Dabah",
    food:"Sushi"
  }

  const suma = (param1, param2) =>{
    return  param1 + param2
  }
  const color = "red"
  //code...
  return (
    <div className="App">
      {title}
      <h3>Hola {student.firstName} {student.lastName}</h3>
      <p>su comida fav: {student.food.toUpperCase()} {"{}"} {suma(3,2)}</p>
      <CardProfile/>
      <Perro/>
      <MyComponent/>
      <StudentCard
        //1)
        {...student2}
        //2) name={student2.firstName} lastName={student2.lastName} food={student2.food}
        //3) student2={student2}
        color={color}
      />
        <StudentCard
        {...student}
        color="Dark"
        />
         <StudentCard
          firstName={"David"}
          lastName="Castillo"
          color="blue"
          food="Arepa de queso"
        />
    </div>
  );
}

export default App;
