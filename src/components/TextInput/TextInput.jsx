import React from "react";
import {BsSearch} from 'react-icons/bs'

const TextInput = ({data, onInputChange}) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        onInputChange(inputValue);
      }
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{data.Text}</span>
      <input
        name={data.Name}
        value={data.Default}
        className="form-control"
        type="text"
        onChange={onInputChange}
      />
      {data.Text !== "Aseo" && <button className="btn btn-dark"> <BsSearch/> </button>}
    </div>
  );
};

export default TextInput;
