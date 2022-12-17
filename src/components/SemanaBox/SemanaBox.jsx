import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SemanaBox.css";

const SemanaBox = ({data}) => {
    const navigate = useNavigate();
    const apiPoint = 'http://localhost:8080/semanas/';
    const handleClick = async() => {
        const reqBody = {
            fecha: data.Fecha
        }
        const response = await fetch(apiPoint + "rolAcomodadores", {
            method: "POST",
            headers: {'Content-Type': 'application/json'
          },
            body: JSON.stringify(reqBody)
          })
        const json = await response.json();
        console.log(json._id)
        navigate({
            pathname: "/acomodadores/:rolId",
            state: {rolId: json._id}
        })
    }

  return (
    <div className='semanaBox row' onClick={() => handleClick()}>
      <div className="semanaRow">
        {data.Fecha}
      </div>
    </div>
  )
}

export default SemanaBox
