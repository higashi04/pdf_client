import React from 'react';
import { useParams } from 'react-router-dom';


const RolSemanalAcomodadores = () => {
    const { rolId } = useParams();
    console.log(rolId)
  return (
    <div className='mt-5'>
      hola {rolId}
    </div>
  )
}

export default RolSemanalAcomodadores
