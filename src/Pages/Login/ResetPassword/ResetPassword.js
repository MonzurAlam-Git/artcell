import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ResetPassword = () => {
    const emailRef = useRef("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert("Sent email");
        } else {
            alert("PLease enter your email"
            );
        }
    }
    return (
        <div className='container w-50'>
            <h5 className="text-primary text-center mt-2 fw-bold"> Kindly type your email </h5>
            <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Button className='btn btn-primary w-50  d-block mx-auto fw-bold' variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;
