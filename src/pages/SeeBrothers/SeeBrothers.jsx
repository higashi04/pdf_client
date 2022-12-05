import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import BrotherHolder from '../../components/BrotherHolder/BrotherHolder';

const SeeBrothers = () => {
    const [data, setData] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const apiPoint = 'http://localhost:8080/bros/';
    const navigate = useNavigate();


    useEffect(() => {
        if(user === null){
            navigate("/");
        }
    })
    useEffect(() => {
      if(dataLoaded === false) {
        const fetchBros = async() => {
            const datos = {
                congregation: user.congregacion
            }
            const response = await fetch(
                apiPoint + "consultar", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(datos)
                  }
            );
            const json = await response.json();
            setData(json);
            setDataLoaded(!dataLoaded); 
        }
        fetchBros()
      }
    }, [dataLoaded, user.congregacion])
    
  return (
    <div className='mt-5'>
      {data.map(item => <BrotherHolder key={item._id} data={item} />)}
    </div>
  )
}

export default SeeBrothers
