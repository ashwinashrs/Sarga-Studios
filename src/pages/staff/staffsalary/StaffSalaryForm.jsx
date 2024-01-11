import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container } from "react-bootstrap";
import PropTypes from 'prop-types';


const StaffSalaryForm = ({ setFormData, nextStep }) => {
    const schema = yup.object().shape({
        WorkHour: yup.string().required(),
        HourRate: yup.string().required(),
        Advance: yup.string().required(),
        Pending: yup.string().email().required(),
    });

    return (


        <div className='container'>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="card text-white bg-primary p-3">
                            <img className="card-img-top" src="holder.js/100px180/" alt="Title"
                                height={'180px'} width={'50px'} style={{ backgroundColor: 'red' }} />
                            <div className="card-body">
                                <p>STA002</p>
                                <h4 className="card-title">Muhsin</h4>
                                <p className="card-text">8593856881
                                    <br />Manjeri
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values) => {
                                setFormData(values);
                                console.log('Form data submitted:', values);
                                // If needed, you can call nextStep here to proceed to the next step
                                // nextStep();
                            }}
                            initialValues={{
                                WorkHour: '',
                                HourRate: '',
                                Advance: '',
                                Pending: '',
                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>



                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationFormikFirstName">
                                            <FloatingLabel controlId="floatingInputGrid" label="Work Hour">
                                                <Form.Control
                                                    type="number"
                                                    name="WorkHour"
                                                    placeholder=''
                                                    style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                                    value={values.WorkHour}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.WorkHour}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.WorkHour}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationFormikLastName">
                                            <FloatingLabel controlId="floatingInputGrid" label="Hour Rate">
                                                <Form.Control
                                                    type="number"
                                                    name="HourRate"
                                                    placeholder=''
                                                    style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                                    value={values.HourRate}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.HourRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.HourRate}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">

                                        <Form.Group as={Col} md="6" controlId="validationFormikContactNo">
                                            <FloatingLabel controlId="floatingInputGrid" label="Advance Payment">
                                                <Form.Control
                                                    type="number"
                                                    placeholder=""
                                                    name="Advance"
                                                    style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                                    value={values.Advance}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.Advance}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.Advance}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>


                                        <Form.Group as={Col} md="6" controlId="validationFormikEmail">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Pending Payment"
                                                className="mb-3"
                                            >

                                                <Form.Control
                                                    type="number"
                                                    placeholder=""
                                                    style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                                    name="Pending"
                                                    value={values.Pending}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.Pending}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.Pending}
                                                </Form.Control.Feedback>

                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>

                                    <Row className="mt-3 d-flex justify-content-end">
                                        <Col>
                                            <h1>0.00</h1>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} md="6" className='text-end'>
                                                <Button
                                                    className="btn"
                                                    type="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

StaffSalaryForm.propTypes = {
    nextStep: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
};

export default StaffSalaryForm;