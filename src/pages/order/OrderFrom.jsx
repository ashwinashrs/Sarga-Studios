import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types'; 


const OrderFrom = ({ setFormData, nextStep }) => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        contact: yup.string().required(),
        email: yup.string().email().required(),
        Address: yup.string().required(),
        Place: yup.string().required(),
        district: yup.string().required(),
        pincode: yup.string().required(),
        Profile: yup.string().required('Customer Type is required'),
    });

    return (


        <div className='container'>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    setFormData(values);
                    console.log('Form data submitted:', values);
                    // If needed, you can call nextStep here to proceed to the next step
                    // nextStep();
                }}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    contact: '',
                    email: '',
                    Address: '',
                    Place: '',
                    district: '',
                    pincode: '',
                    Profile: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>


                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikFirstName">
                                <FloatingLabel controlId="floatingInputGrid" label="First Name">
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder=''
                                        style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.contact}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationFormikLastName">
                                <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder=''
                                        style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.contact}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="6" controlId="validationFormikContactNo">
                                <FloatingLabel controlId="floatingInputGrid" label="Contact No">
                                    <Form.Control
                                        type="tel"
                                        placeholder=""
                                        name="contact"
                                        style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                        value={values.contact}
                                        onChange={handleChange}
                                        isInvalid={!!errors.contact}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.contact}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>


                            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >

                                    <Form.Control
                                        type="email"
                                        placeholder="Email Id"
                                        style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                        aria-describedby="inputGroupPrepend"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>

                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="12" controlId="validationFormikAddress">
                                <FloatingLabel controlId="floatingInputGrid" label="Address">
                                    <Form.Control as="textarea" rows={3}
                                        type="textarea"
                                        placeholder="Address"
                                        style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                        name="Address"
                                        value={values.Address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Address} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Address}
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormikPlace">
                                <FloatingLabel controlId="floatingInputGrid" label="Place">
                                    <Form.Control
                                        type="text"
                                        placeholder="Place"
                                        style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                                        name="Place"
                                        value={values.Place}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Place}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.Place}
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikDistrict">
                                <FloatingLabel controlId="floatingInputGrid" label="District">
                                    <Form.Control
                                        type="text"
                                        placeholder="district"
                                        style={{ border: "none", borderBottom: "1px solid  silver", borderRadius: '0' }}
                                        name="district"
                                        value={values.district}
                                        onChange={handleChange}
                                        isInvalid={!!errors.district}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.district}
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormikPincode">
                                <FloatingLabel controlId="floatingInputGrid" label="Pincode">
                                    <Form.Control
                                        type="number"
                                        placeholder="pincode"
                                        style={{ border: "none", borderBottom: "1px solid  silver", borderRadius: '0' }}
                                        name="pincode"
                                        value={values.pincode}
                                        onChange={handleChange}
                                        isInvalid={!!errors.pincode}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.pincode}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>





                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikProfile">
                                <FloatingLabel
                                    controlId="floatingSelectGrid"
                                    label="Default file input example"
                                >
                                    <Form.Control
                                        type="file"
                                        name="Profile"
                                        placeholder="Select your photos"
                                        style={{ border: "1.5px solid silver"  }}
                                        value={values.Profile}
                                        onChange={handleChange}
                                        isInvalid={touched.Profile && !!errors.Profile}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Profile}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="mt-3 d-flex justify-content-end">

                            <Form.Group as={Col} md="6" className='text-end'>
                                <Button
                                    className="btn"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form.Group>
                        </Row>

                    </Form>
                )}
            </Formik>

        </div>
    );
};
OrderFrom.propTypes = {
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};
export default OrderFrom;