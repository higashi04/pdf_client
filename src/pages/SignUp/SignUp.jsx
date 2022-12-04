import React from "react";
import { useState } from "react";
import "./SignUp.css";
import ErrorBox from "../../components/ErrorBox/ErrorBox";

const passwordMsg = [];
const lowerCaseLetterRegex = /[a-z]/g;
const upperCaseLetterRegex = /[A-Z]/g;
const numbersPassword = /[0-9]/g;

const SignUp = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [congregacion, setCongregacion] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignUp = async() =>{
    try {
      const data = {
          username: username,
          password: password,
          email: email,
          firstName: firstName,
          lastName: lastName,
          congregacion: congregacion
      }
      while(passwordMsg.length > 0) {
        passwordMsg.pop();
      }
      if(username === null) {
       passwordMsg.push("Agregar nombre usuario");
      }
      if(password.match(lowerCaseLetterRegex) && !password.match(upperCaseLetterRegex)) {
       passwordMsg.push("Agregar al menos una mayúscula.");
      }
      if(!password.match(numbersPassword)) {
        passwordMsg.push("Su contraseña debe de tener al menos un número.")
      }
      if (password.length < 8) {
        passwordMsg.push("Su contraseña debe de ser al menos ocho carácteres.")
      }
      if(password !== confirmPassword) {
        passwordMsg.push("Las contraseñas no coinciden")
      }
      if(passwordMsg.length > 0) { 
        setPasswordError(true)
        throw new Error("password validation invalid") 
      }
      await fetch("http://localhost:8080/usuario/registrarse", {
        method: "POST",
        headers: {'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
      })
    } catch (error) {
      
      console.error(error)
    }
  }
  return (
    <>
      <div className="container my-5 signUp-bg">
        <div className="row mb-3">
          <h1 className="signUp-header">Crear Cuenta</h1>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Usuario"
                name="username"
                id="username"
                type="text"
                onInput={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <label htmlFor="username" className="form-label">
                Usuario
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
              <div className="form-floating">
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  type="password"
                  onInput={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
              </div>
          </div>
        </div>
        <div className="row mb-3">
        <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Contraseña"
                type="password"
                onInput={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              <label htmlFor="password" className="form-label">
                Confirmar Contraseña
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Nombre"
                name="firstName"
                id="firstName"
                type="text"
                onInput={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Apellidos"
                name="lastName"
                id="lastName"
                type="text"
                onInput={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <label htmlFor="username" className="form-label">
                Apellidos
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Correo Eléctronico"
                name="email"
                id="email"
                type="text"
                onInput={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor="email" className="form-label">
                Correo Eléctronico
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Congregación"
                name="congregacion"
                id="congregacion"
                type="text"
                onInput={(event) => {
                  setCongregacion(event.target.value);
                }}
              />
              <label htmlFor="congregacion" className="form-label">
                Congregación
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <button className="btn btn-primary" onClick={() => handleSignUp()}>Submit</button>
        </div>
        <div id="errorMessage" className="row mb-3">
          <ul>
                {passwordError &&
                  passwordMsg.map(item => <ErrorBox listItem={item} />) 
                }
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default SignUp;
