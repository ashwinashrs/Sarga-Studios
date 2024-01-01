import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function AddStaff() {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().email().required(),
    Address: yup.string().required(),
    Place: yup.string().required(),
    district: yup.string().required(),
    pincode: yup.string().required(),
  });

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => console.log(values)} // Handle form submission logic here
        initialValues={{
          firstName: '',
          lastName: '',
          contact: '',
          email: '',
          Address: '',
          Place: '',
          district: '',
          pincode: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {/* ... (Your existing form groups) */}
            <Row className="mt-4 d-flex justify-content-end">
              <Form.Group className="text-end" as={Col} md="6">
                <Button style={{ width: '150px' }} type="submit">
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddStaff;
