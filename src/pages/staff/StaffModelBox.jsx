import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SaffForm from './SaffForm';

const StaffModelBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                + Staff Register
            </Button>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>STAFF REGISTER </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SaffForm />
                </Modal.Body>
            </Modal>

            
            
        </div>
    )
}

export default StaffModelBox
