import React, { useState } from 'react';
import { Container, InputGroup, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';

const AdminModelBox = () => {
    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup
            .string()
            .required()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                'Password must be 8-20 characters long, contain letters and numbers, special characters, and have at least one uppercase and one lowercase letter'
            ),
        confirmpassword: yup
            .string()
            .required()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleButtonClick = (values) => {
        const form = document.getElementById('yourFormId');
        const isFormValid = form.checkValidity();

        if (isFormValid) {
            console.log('Form data submitted:', values);
            handleClose();
            Swal.fire({
                title: 'Good job!',
                html: 'Successfully Created',
                text: 'You clicked the button!',
                icon: 'success',
            });
        } else {
            form.reportValidity(); // Highlight invalid fields
            handleButtonClickError();
        }
    };
    const handleButtonClickError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all required fields correctly.',
        });
    };

    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    handleButtonClick(values);
                }}
                initialValues={{
                    username: '',
                    password: '',
                    confirmpassword: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit} id="yourFormId">
                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} md="12" controlId="validationFormikUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="admin1"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} md="12" controlId="validationFormikpassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Admin123@"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="" as={Col} md="12" controlId="validationFormikconfirmpassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Admin123@"
                                    name="confirmpassword"
                                    value={values.confirmpassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmpassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmpassword}
                                </Form.Control.Feedback>
                                <Form.Text muted>
                                    <ol className="mt-3">
                                        <li>Your password must be 8-20 characters long</li>
                                        <li>Contain letters and numbers, special characters</li>
                                        <li>Not contain spaces</li>
                                        <li>Include one uppercase letter and one lowercase letter</li>
                                    </ol>
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Row style={{display:"flex",justifyContent:"end"}}>
                            <Button variant="primary" style={{width:"160px"}} className="btn" type="submit" onClick={() => handleButtonClick(values)}>
                                Save & Submit
                            </Button>
                        </Row>
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AdminModelBox;
