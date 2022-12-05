import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './Brothers.css'

const Brothers = () => {
  const [name, setName] = useState(null);
  const [active, setActive] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const apiPoint = 'http://localhost:8080/bros/';

  const handleCheckChange = () =>{
    setActive(!active);
  };

  const handleSaveData = async() => {
    try {
      const data = {
        brother: {
          nombre: name,
          congregacion: user.congregacion,
          activo: active,
        },
      };
      const response = await fetch(
        apiPoint + "new", {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
      );
      if (response.ok) {
        const json = await response.json();
        console.log(json)
      } else {
        throw response
      }
    } catch (error) {
      const err = await error.json()
      console.error(err)
    }
  }

  return (
    <div className="brothersContainer">
      <div className="container mt-5">
        <div className="row">
          <div className="row mb-3">
            <div className="col">
              <div className="form-floating mt-3">
                <input
                  className="form-control"
                  placeholder="Nombre"
                  name="name"
                  id="name"
                  type="text"
                  onInput={(event) => {
                    setName(event.target.value);
                  }}
                />
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="broActive"
                  onChange={handleCheckChange}
                />
                <label className="form-check-label" htmlFor="broActive">
                  Activo
                </label>
              </div>
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={handleSaveData}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brothers;
