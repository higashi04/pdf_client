import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SemanaBox.css";
import { useDispatch } from "react-redux";
import {  showAlert } from "../../redux/err/alertSlice";

const SemanaBox = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const apiPoint = 'http://localhost:8080/semanas/';
    const handleClick = async() => {
      try {
        const reqBody = {
          fecha: props.Text
      }
      const response = await fetch(apiPoint + "rolAcomodadores", {
          method: "POST",
          headers: {'Content-Type': 'application/json'
        },
          body: JSON.stringify(reqBody)
        })
      const json = await response.json();
      const rolId = json._id;
      navigate({
          pathname: `/acomodadores/${rolId}`,
          state: {rolId: rolId}
          // state: {data: json}
      });
      } catch (error) {
        dispatch(showAlert(error))
      }
    }

  return (
    <div className='semanaBox row' onClick={() => handleClick()}>
      <div className="semanaRow">
        {props.Text}
      </div>
    </div>
  )
}

export default SemanaBox
