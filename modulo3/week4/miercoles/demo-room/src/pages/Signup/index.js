import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Importamos el ws para poderlo utilizar
import { signupWs } from '../../services/auth-ws';
export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword:''
  });
  const { email, password,confirmPassword } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    //credentials == dataForm
    const dataForm = {
      email,
      password,
      confirmPassword
    };
    //SignupWS esuna funcion que regresa una promesa!!!
    //y a esta promesa le podemos plicar un asycn && awite o then catch
    signupWs(dataForm)
    .then(response => {
      //header,data,status
      console.log("response que es?",response)
      navigate("/protected")
    })
    .catch(error=>{
      console.log("los errores",error )
    })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-email">email</label>
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder="Text"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        <label htmlFor="input-password">Confirm Password</label>
        <input
          id="input-password"
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
