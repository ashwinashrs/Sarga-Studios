import React from 'react'
<<<<<<< HEAD
import Enquiries from './EnqTable'
import Container from 'react-bootstrap/Container';


function Index() {
    return (
            <Container>
                <Enquiries />
            </Container>
        
    )
}

export default Index
=======
import Enquiries from './Enquiries'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

function index() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#fbfeff', border: '1px solid #dfdfdb', borderRadius: '15px' }}>
            <Container >
                <Row>
                    <Col>
                    <h5 style={{ color: '#818181', fontWeight: '700' }}>Customer Enquiries</h5>
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
                                <div style={{ border: '1px solid #dfdfdb', borderRadius: '5px', padding: '5px', backgroundColor:'rgb(235 239 243)'}}>
                                    Count <Badge bg="secondary">1</Badge>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Enquiries />
            </Container>
        </div>
    )
}

export default index
>>>>>>> e4765e95afa90c216796db57cc1f77ee374228af
