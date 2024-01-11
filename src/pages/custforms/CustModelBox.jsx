import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Step2 from './Step2';
import SteppForm from './SteppForm'

const CustModelBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                + Register
            </Button>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>CUSTOMER REGISTER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SteppForm />
                </Modal.Body>
            </Modal>
            {/* <Step2/> */}
        </div>
    )
}

export default CustModelBox