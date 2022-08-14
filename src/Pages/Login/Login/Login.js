import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useNavigate, useLocation } from "react-router-dom";
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';




const Login = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    let navigate = useNavigate("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate("/home");
    }
    return (
        <div className='container w-50 mt-5 mb-5'>
            <h4 className='text-danger fw-bold text-center'>Sign In  </h4>
            <Form onSubmit={handleLogin} className='mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='mx-auto w-100' variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center mt-3 fw-semibold
            '>New with us? Then Click on the <Link className='text-decoration-none text-danger fw-bold' to="/register"> Register </Link> </p>

            {/* <p className='text-center mt-3 fw-semibold
            '> Forget Password ? Dont Worry! Simply Click on <Button onClick={async () => {
                    const email = emailRef.current.value;
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }} className='text-decoration-none text-danger fw-bold'> Reset Password </Button> </p> */}
            <p className='text-center mt-3 fw-semibold
            '> Forget Password ? Dont Worry! Simply Click on <Link to="/resetPassword" className='text-decoration-none text-danger fw-bold'> Reset Password </Link> </p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;
