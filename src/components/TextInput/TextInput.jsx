import React, { useState } from "react";
import ModalBroList from "../modalBroList/ModalBroList";

const TextInput = ({ data, onInputChange }) => {
  const [selectBrother, setSelectBrother] = useState(data.Default);
  const handleSelectBrother = (name) => {
    setSelectBrother(name);
    onInputChange(data.Name, name)
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };
  return (
    <div className="col-12">
      <div className="input-group mb-3">
        <span className="input-group-text">{data.Text}</span>
        <input
          name={data.Name}
          value={selectBrother}
          className="form-control"
          type="text"
          onChange={(event) => handleInputChange(event)}
          
          onInput={(event) => handleSelectBrother(event.target.value)}
          disabled={data.Text !== "Aseo"}
        />
        {data.Text !== "Aseo" && (
          <ModalBroList onBrotherSelect={handleSelectBrother} />
        )}
      </div>
    </div>
  );
};

export default TextInput;
