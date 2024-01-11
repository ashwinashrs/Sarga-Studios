import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StaffSalaryForm from './StaffSalaryForm';


const StaffSalaryModelBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                + Salary 
            </Button>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>SALARY MANAGING</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StaffSalaryForm/>
                </Modal.Body>
            </Modal>
            
        </div>
    )
}

export default StaffSalaryModelBox
