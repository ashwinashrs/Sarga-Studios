import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import AddCustomer from './AddCustomer';
import CustDetail from './CustDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';


function Index() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ padding: '20px', backgroundColor: '#fbfeff', border: '1px solid #dfdfdb', borderRadius: '15px' }}>
      <Container >
        <h5 style={{ color: '#818181', fontWeight: '700' }}>Customer Register</h5>
      </Container>
      <hr />
      <Container >
        <Row>
          <Col>
            <Button style={{ backgroundColor: '#5cadff', border: 'none' }} variant="primary" onClick={handleShow}>
              + ADD CUSTOMER
            </Button>
          </Col>
          <Col xs="auto">
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '20px' }}>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </div>
              <div>
                <div style={{ border: '1px solid #dfdfdb', borderRadius: '5px', padding: '5px', backgroundColor: '#9da5b1' }}>
                  <FontAwesomeIcon icon={faBolt} className='me-2' />
                  Count <Badge bg="secondary">1</Badge>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCustomer />
        </Modal.Body>
      </Modal>
      <Container style={{ marginTop: '20px' }}>
        <CustDetail />
      </Container>
    </div>
  );
}

export default Index;
