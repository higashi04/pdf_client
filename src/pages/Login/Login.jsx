import React from 'react'
import { useState, useEffect } from 'react';
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import { login, reset } from '../../redux/auth/authSlice';

const errorMsg = []

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isError, isSuccess, message} = useSelector((state) => state.auth)
    useEffect(
      () => {
        if(isError) {
          console.error(message)
          navigate('/signup')
          return;
        }
        if(isSuccess || user) {
          navigate('/user')
        }
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch]
    );

    const handleToggleClick = () => {
      setToggle((previousToggle) => !previousToggle);
    }
    
    const handleLogin = async(e) => {
      try {
        e.preventDefault();
        while(errorMsg.length > 0) {errorMsg.pop()}
        const data = {
          username: username,
          password: password
        }
        if(username === null) {
          errorMsg.push({key: 1, msg: "Favor de llenar el campo Usuario."})
        }
        if(password === null) {
          errorMsg.push({key: 2, msg: "Favor de proporcionar la contraseña."})
        }
        if(errorMsg.length > 0) {
          setError(true)
          return
        }
        dispatch(login(data))

      } catch(error) {
        console.error(error)
      }
    }

  return (
    <>
      <div className="container">
        <form onSubmit={handleLogin}>
        <div className="row my-5">
            <div className="col">
              <div className="form-floating">
                <input className='form-control' placeholder='Usuario' name='username' id='username' type="text" onInput={(event) => {setUsername(event.target.value)}} />
                <label htmlFor="username" className="form-label">Usuario</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input className='form-control' name='password' id='password' placeholder='Contraseña' type={toggle ? "text" : "password"} onInput={(event) => {setPassword(event.target.value)}} />
                <label htmlFor="password" className="form-label">Constraseña</label>
                <span> Ver Contraseña
                {toggle ? (
                <FaEyeSlash
                  className="eyeToggler mx-2"
                  onClick={handleToggleClick}
                />
              ) : (
                <FaEye className="eyeToggler mx-2" onClick={handleToggleClick} />
              )}
                </span>
              </div>
            </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <button className='btn btn-primary'> <FaSignInAlt className="me-3" /> Iniciar Sesión</button>
          </div>
          <div className="col">
            <Link to={'/signup'} className='btn btn-outline-dark' > ¿No tienes cuenta? </Link>
          </div>
        </div>
        </form>
        <ul>
          {error && errorMsg.map(item => <ErrorBox key={item.key} listItem={item.msg} />)}
        </ul>
      </div>
    </>
  )
}

export default Login
