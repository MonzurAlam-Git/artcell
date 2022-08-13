import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRef } from 'react';
import Alert from 'react-bootstrap/Alert';




const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        <Alert variant="success">
            <Alert.Heading>Thank You for connecting yourself with Artcell</Alert.Heading>
            <Alert.Link href="/home">Home Page </Alert.Link>
        </Alert>
    }


    return (
        <div>

            <Form onSubmit={handleRegister} className='mt-5 w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I Accept the terms and Conditions" />
                </Form.Group>
                <Button className='mx-auto w-100' variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center mt-3 fw-semibold
            '>Already have an account ? Then Click on  <Link className='text-decoration-none text-danger fw-bold  ' to="/login"> Login </Link> </p>
        </div>
    );
};

export default Register;