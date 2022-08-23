import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import SocialLogin from '../SocialLogin/SocialLogin';




const Register = () => {
    const [agree, setAgree] = useState(false);

    const emailRef = useRef("");
    const passwordRef = useRef("");
    let errorMsg;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    if (error) {
        errorMsg = <p className='text-danger fw-bold text-center bg-danger text-white w-75 mx-auto'>Error: {error?.message} </p>
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

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
                <Form.Group className="mb-3 ms-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? "ps-2 text-primary" : "ps-2 text-danger"} onClick={() => setAgree(!agree)} type="checkbox"
                        label="I agree the terms and Conditions" />
                </Form.Group>
                <Button disabled={!agree} className='mx-auto w-100' variant="danger" type="submit">
                    Submit
                </Button>

                <SocialLogin></SocialLogin>
            </Form>
            <p className='text-center mt-3 fw-semibold
            '>Already have an account ? Then Click on  <Link className='text-decoration-none text-danger fw-bold  ' to="/login"> Login </Link> </p>
            {errorMsg}
        </div>
    );
};

export default Register;