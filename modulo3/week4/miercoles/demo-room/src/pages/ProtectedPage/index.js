import {useCookies} from 'react-cookie'

const ProtectedPage = () => {
    //utilizamos useCookies
    const [cookies,setCookies] = useCookies();
    //validar si hay cookies
    //validar si la cookie es valida (aun tiene tiempo de vida)
    console.log("como las obtemos en react??",cookies)
    return (
      <div>
        <h1>This page is hyper protected!</h1>
        <img src="https://laverdadnoticias.com/__export/1610324199617/sites/laverdad/img/2021/01/10/chayanne_cantante_sobrenombre.jpg_554688468.jpg" />
      </div>
    );
  };
  
  export default ProtectedPage;
  