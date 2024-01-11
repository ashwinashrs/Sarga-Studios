
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderFrom from './OrderFrom';
import { Card, Col, Container, Row, } from 'react-bootstrap';

const OrderModelBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                + Add Order
            </Button>

            <Modal size="xl" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD ORDER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col lg={3} md={12} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Card style={{ width: '16rem', backgroundColor: '#87e37b' }}>

                                    <Card.Body>
                                        <Card.Title><h4><u>Customer Details</u></h4></Card.Title>
                                        <Card.Text>
                                            <div>Cust Id</div>
                                            <h5>CUST002</h5>
                                            <div>Full Name</div>
                                            <h5>Muhsin</h5>
                                            <div>Phone No</div>
                                            <h5>8593856881</h5>
                                            <div>Email Id</div>
                                            <h5>muhsin@gmial.com</h5>
                                            <div></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={9} md={12}>
                                <OrderFrom />
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
            </Modal>

        </div>
    )
}

export default OrderModelBox
