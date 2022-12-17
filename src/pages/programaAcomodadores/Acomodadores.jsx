import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SemanaBox from '../../components/SemanaBox/SemanaBox';

const Acomodadores = () => {
  const [isLoaded, setIsloaded] = useState(false);
  const [weeks, setWeeks] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const apiPoint = 'http://localhost:8080/semanas/';
  const navigate = useNavigate();

  useEffect(() => {
    if(user === null){
        navigate("/");
    }
  });

  useEffect(() => {
    if(isLoaded === false)
    {
      const fetchWeeks = async() => {
        const response = await fetch(apiPoint + "getWeeks", 
        {
          method: "GET",
          headers: {'Content-Type': 'application/json'},
        });
        const json = await response.json()
        setWeeks(json.allWeeks);
        setIsloaded(true)
      }
      fetchWeeks()
    }
  }, [setWeeks, isLoaded, setIsloaded, weeks])

  return (
    <>
    <div className='mt-5'>
    <h1 className='m-5'>Crear Programa de Acomodadores</h1>
     {weeks.map(week => <SemanaBox key={week._id} data={week} />)}
    </div>
    </>
  )
}

export default Acomodadores
