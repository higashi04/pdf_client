import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./BrotherHolder.css";
const BrotherHolder = ({ data }) => {
  const [activo, setActivo] = useState(data.activo);
  const handleCheckChange = () => {
    setActivo(!activo);
  };
  const apiPoint = 'http://localhost:8080/bros/';
  const navigate = useNavigate();
//   useEffect(() =>{
//     if(data.activo) {
//         setActivo(true)
//       }  
//   }, [setActivo, data.activo])

  const handleSaveData = async() => {
    const bodyReq = {
      id: data._id,
      activo: activo,
    };
    console.log(bodyReq);
    const response = await fetch(
        apiPoint + "editStatus", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bodyReq)
          }
    )
    //const json = await response.json();
    if(response.ok){
        navigate(0);
    }
  };
  return (
    <div className="brotherHolderBox">
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h2>{data.nombre}</h2>
          </div>
          <div className="col">Activo: {data.activo ? "Sí" : "No"}</div>
        </div>
        <div className="row mb-3 brotherHolderChangeStatus">
          <div className="col">
            <div className="form-check">
              {data.activo ? (
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="broActive"
                  defaultChecked
                  onChange={handleCheckChange}
                />
              ) : (
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="broActive"
                  onChange={handleCheckChange}
                />
              )}
              <label className="form-check-label" htmlFor="broActive">
                Activo
              </label>
            </div>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={handleSaveData}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrotherHolder;
