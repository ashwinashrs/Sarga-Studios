import React, { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row, Container, } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import * as yup from 'yup';
import "./css/stepper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

// 
const CustForm = ({ setFormData,formData, nextStep }) => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().email().required(),
    Address: yup.string().required(),
    Place: yup.string().required(),
    district: yup.string().required(),
    pincode: yup.string().required(),
    CustomerType: yup.string().required('Customer Type is required'),
    CompanyName: yup.string().required('Company Name is required'),
    Description: yup.string().required('Description is required'),
  });

  CustForm.propTypes = {
    setFormData: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    nextStep: PropTypes.func.isRequired,
  };

  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Customer Info", "Customer Type", "Completed"];
  const [complete, setComplete] = useState(false);

  const handleButtonClick = () => {
    Swal.fire({
      title: 'Good job!',
      html: `Do you want to place the <b>Order</b>? Then click
        <a href="#">here</a>.`,
      text: 'You clicked the button!',
      icon: 'success',
    });
  };



  return (
    <div className='container'>
      <Container >
        <Row className='StepName1'>
          <Col xs={12} md={4} className='StepName'>

            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                  } `}
              >
                <div className="step">
                  {i + 1 < currentStep || complete ? (
                    <FontAwesomeIcon icon={faCheck} size={24} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="">{step}</p>
              </div>
            ))}

          </Col>
          <Col xs={12} md={8}>
            <Formik
              onSubmit={(values) => {
                setFormData(values);
                console.log('Form data submitted:', values);
                setCurrentStep((prev) => prev + 1);
              }}
              initialValues={{
                firstName: '',
                lastName: '',
                contact: '',
                city: '',
                email: '',
                Place: '',
                district: '',
                pincode: '',
                CustomerType: '',
                CompanyName: '',
                Description: '',
              }}
              validateOnChange={false} // Disable automatic validation on change
              validateOnBlur={false}   // Disable automatic validation on blur
            >
              {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  {currentStep === 1 && (
                    // CustForm Form
                    <div>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormikFirstName">
                          <FloatingLabel controlId="floatingInputGrid" label="First Name">
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder=""
                              style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                              value={values.firstName}
                              onChange={handleChange}
                              isInvalid={touched.firstName && !!errors.firstName}
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
                    </div>

                  )}

                  {currentStep === 2 && (
                    <div>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormikCustomerType">
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Customer Type"
                          >

                            <Form.Control
                              as="select"
                              name="CustomerType"
                              placeholder="Company Name"
                              style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                              value={values.CustomerType}
                              onChange={handleChange}
                              isInvalid={touched.CustomerType && !!errors.CustomerType}>
                              <option value="">Select Customer Type</option>
                              <option value="1">Primary</option>
                              <option value="2">Company Base</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              {errors.CustomerType}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Form.Group></Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormikEmail">
                          <FloatingLabel controlId="floatingInputGrid" label="Company Name">
                            <Form.Control
                              type="text"
                              name="CompanyName"
                              placeholder="Company Name"
                              style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                              value={values.CompanyName}
                              onChange={handleChange}
                              isInvalid={touched.CompanyName && !!errors.CompanyName}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.CompanyName}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormikDescription">
                          <FloatingLabel controlId="floatingInputGrid" label="Description">
                            <Form.Control
                              as="textarea"
                              type="textarea"
                              placeholder="Description"
                              style={{ border: "none", borderBottom: "1px solid silver", borderRadius: '0' }}
                              name="Description"
                              value={values.Description}
                              onChange={handleChange}
                              isInvalid={touched.Description && !!errors.Description}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.Description}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Form.Group>
                      </Row>
                    </div>
                  )}

                  <Row className="mt-3 d-flex justify-content-end">
                    {currentStep > 1 && (
                      <Form.Group as={Col} md="6">
                        <Button
                          style={{ marginRight: '20px' }}
                          type="button"
                          onClick={() => setCurrentStep((prev) => prev - 1)}
                        >
                          Prev
                        </Button>
                      </Form.Group>
                    )}
                    <Form.Group as={Col} md="6" className='text-end'>
                      <Button
                        className="btn"
                        type="submit"
                        disabled={!isValid} // Disable the "Next" button if the form is not valid
                      >
                        {currentStep === steps.length ? "Finish" : "Next"}
                      </Button>

                      <Button
                        style={{ width: '200px', marginRight: '20px' }}
                        type="submit"
                        onClick={handleButtonClick}
                        disabled={!isValid} // Disable the "Submit" button if the form is not valid
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container >



    </div >
  );
};

export default CustForm;