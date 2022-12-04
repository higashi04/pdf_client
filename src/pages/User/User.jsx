import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
      <div className="userBox my-5">
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
          <button className="btn btn-primary" onClick={() => navigate("/altaHermanos")} >Editar Hermanos</button>
        </div>
        <div className="col-6">
          <button className="btn btn-primary">Crear Programa</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default User;
