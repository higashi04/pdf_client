import React from "react";
import {BsSearch} from 'react-icons/bs'

const TextInput = ({data, onInputChange}) => {

  const handleClick = () => {
    alert(data.Name)
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{data.Text}</span>
      <input
        name={data.Name}
        value={data.Default}
        className="form-control"
        type="text"
        onChange={onInputChange}
        readOnly = {data.Text !== "Aseo"}
      />
      {data.Text !== "Aseo" && <button className="btn btn-dark" onClick={handleClick}> <BsSearch/> </button>}
    </div>
  );
};

export default TextInput;
