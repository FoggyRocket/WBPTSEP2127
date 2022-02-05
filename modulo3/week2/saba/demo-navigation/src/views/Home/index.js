
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate(); // nos va ayudar a navegar en donde querramos dentro imagen div con una funcion;

useEffect(()=>{
    // setTimeout(()=>{
    //     navigate('/login')
    // },5000)
},[])

const names = ["Jelena","Santiago","Eva","Nat","Sarah","Luis","David","Kain","Daniel","Sergio","Oswaldo"]
  return (
    <div>
      <h1>Este es home</h1>
      <button
        onClick={() => navigate("/profile", { state: { perro: "Nova" } })}
      >
        Vamos a profile
      </button>

      <div onClick={()=>navigate("/user/Dylan" ) }>
          Perro
      </div>

      <div>
        <ul>
          {names.map((name,index)=> <li key={index} onClick={()=>navigate(`/user/${name}`)} >{name}</li>    )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
