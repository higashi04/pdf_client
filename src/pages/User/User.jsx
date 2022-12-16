import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./User.css";
const User = () => {
  const [userData, setUserData] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else {
      setUserData(user);
    }
  }, [user, navigate]);

  return (
    <>
      <div className="userBox mt-5">
        <div className="row">
          <h1>Bienvenido, {userData.firstName}</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="my-3 userDataRow">
              Congregación: {userData.congregacion}
            </div>
          </div>
          <div className="col-6">
            <div className="my-3 userDataRow text-wrap">
              Correo: {userData.email}
            </div>
          </div>
        </div>
      </div>
      <div className="userBox my-5">
        <div className="row my-3">
        <div className="col-6">
          <div className="row my-3">
            <Link to={"/altaHermanos"} className="btn btn-primary">Registrar Hermanos</Link>
          </div>
          <div className="row my-3">
            <Link to={'/signup'} className="btn btn-outline-secondary">Registrar Usuarios</Link>
          </div>
          <div className="row my-3">
            <Link to={"/consultarHermanos"} className="btn btn-outline-primary" > Consultar Hermanos registrados </Link>
          </div>
        </div>
        <div className="col-6">
          <div className="row my-3">
            <Link to={"/acomodadores"} className="btn btn-outline-primary mx-3">Programa Acomodadores</Link>
          </div>
          <div className="row my-3">
            <Link className="btn btn-outline-secondary mx-3">Programa Vida y Ministerio </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default User;
