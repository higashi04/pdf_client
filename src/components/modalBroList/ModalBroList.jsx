import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "../../redux/err/alertSlice";

import TableBodyListaHermanos from '../TableBodyListaHermanos/TableBodyListaHermanos';

const ModalBroList = ({onBrotherSelect}) => {
  const [show, setShow] = useState(false);
  const [brothers, setBrothers] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const apiPoint = "http://localhost:8080/bros/";
  const dispatch = useDispatch();

  const fetchBros = async() => {
    const datos = {
      congregation: user.congregacion,
      activo: true,
    };
    try {
      const response = await fetch(apiPoint + "fetchActive", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos)
      });
      if(response.ok) {
        const json = await response.json()
        setBrothers(json)
      } else {
        throw response
      }
    } catch (error) {
      const jsonErr = await error.json();
      dispatch(showAlert(jsonErr.Messasge));
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    await fetchBros();
    setShow(true);
  };
  const handleSelection = (selection) => {
    setShow(false)
    onBrotherSelect(selection)
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <BsSearch/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione un hermano de la lista.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {brothers.map((brother, index) => <TableBodyListaHermanos key={brother._id} data={brother} counter={index + 1} handleClick={() => handleSelection(brother.nombre)} />)}
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBroList;