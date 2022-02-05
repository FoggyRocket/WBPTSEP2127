import { useEffect, useState } from "react";
import { useLocation, useNavigate,useParams } from "react-router-dom";
/*
useLocation

key="345feg123"
name:'profile'
hash://
search: ?perro=Nova&perro2=Kikis//
state:null //<---  es donde llega informacion de una vista a otra
*/
/*
useNavigate nos va ayudar a navegar desde el lugar que querramos 
 */
/*
  useParams nos ayuda para obtener los parametros de las url(LIGA)
*/
/*
  props.history= useNavigate
   props.location= useLocation
    props.match =  useParams 
*/
function Profile(props) {
  const [isLogged, setIslogged] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("en el profile", location);

  useEffect(() => {
    if (!isLogged) { // actua como un redirect 
      navigate("/login");
    }
  }, []);
  return <h1>Este es Profile</h1>;
}

export default Profile;
