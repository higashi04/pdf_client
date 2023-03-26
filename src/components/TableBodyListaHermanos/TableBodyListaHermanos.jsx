import React from 'react'

const TableBodyListaHermanos = ({data, counter, handleClick}) => {
  return (
    <tr onClick={handleClick}>
      <td>{counter}</td>
      <td>{data.nombre}</td>
    </tr>
  )
}

export default TableBodyListaHermanos
