import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//importamos el endpoint de LoginWs  para poder hacer login
// {perro as GatoFunc} 
import {loginWs} from '../../services/auth-ws'
export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setError(null)//coloco este setError para borrar el mensaje cuando el usuario escriba una nueva contraseña o email
    return setForm({ ...form, [name]: value });
  }

  async function handleFormSubmission(event) {
    event.preventDefault();
    try{
      const credentials = {
        email,
        password,
      };

      const {data,status,errorMessage}= await loginWs(credentials)
      if(status){
        console.log("Algo mas va aqui!",data)
      }else{
        setError(errorMessage)
      }
    }catch(error){
        console.log("el error",error)
        setError(error.errorMessage)
    }

  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmission} className="signup__form">
        <label htmlFor="input-username">email</label>
        <input
          id="input-username"
          type="text"
          name="email"
          placeholder="email"
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

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
