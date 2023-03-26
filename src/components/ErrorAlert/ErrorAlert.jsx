import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '../../redux/err/alertSlice';


function AlertDismissible() {
  const dispatch = useDispatch();
  const {show, message} = useSelector(state => state.alert);
  console.log(show, message)

  const handleClose = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      {show && (
        <Alert variant="danger" onClose={handleClose} dismissible>
          <Alert.Heading>Se produjo un error</Alert.Heading>
          <p>
              {message}
          </p>
        </Alert>
      )}
    </>
  );
}

export default AlertDismissible;
