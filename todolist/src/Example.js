import React, { useState } from 'react'
import {Modal,Button} from 'react-bootstrap'


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[value,setValue]=useState([]);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <i   className="fa-solid fa-pen  icon" ></i>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updation window</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type='text' onChange={(e)=>setValue(e.target.value)}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<Example />);