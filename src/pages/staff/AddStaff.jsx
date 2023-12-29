import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as formik from 'formik';
import * as yup from 'yup';

function AddStaff() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().required(),
    Address: yup.string().required(),
    Place: yup.string().required(),
    district: yup.string().required(),
    pincode: yup.string().required(),

  });
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          city: '',
          state: '',
          zip: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.contact}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.contact}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">

              <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                <Form.Label>Contact No</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                  <Form.Control
                    type="contact"
                    placeholder="Contact No"
                    aria-describedby="inputGroupPrepend"
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
                    isInvalid={!!errors.contact}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.contact}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                <Form.Label>Email Id</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email Id"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

            </Row>
            <Row className="mb-3">

              <Form.Group as={Col} md="12" controlId="validationFormik03">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2}
                  type="textarea"
                  placeholder="Address"
                  name="Address"
                  value={values.Address}
                  onChange={handleChange}
                  isInvalid={!!errors.Address} />
                <Form.Control.Feedback type="invalid">
                  {errors.Address}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Place"
                  name="Place"
                  value={values.Place}
                  onChange={handleChange}
                  isInvalid={!!errors.Place}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.Place}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik04">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="district"
                  name="district"
                  value={values.district}
                  onChange={handleChange}
                  isInvalid={!!errors.district}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.district}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationFormik05">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="pincode"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  isInvalid={!!errors.pincode}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.pincode}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mt-4 d-flex justify-content-end ">
              <Form.Group className='text-end' as={Col} md="6">
                <Button style={{ width: '150px' }} type="submit">Next
                  <FontAwesomeIcon icon={faArrowRight} /></Button>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default AddStaff