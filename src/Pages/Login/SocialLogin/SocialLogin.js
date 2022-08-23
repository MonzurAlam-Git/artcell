import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from "../../../images/google.png";
import gh from "../../../images/gh.png";
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate("");
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user_gh, loading_gh, error_gh] = useSignInWithGithub(auth);
    let errorMsg;

    if (error || error_gh) {
        errorMsg = <p className='text-danger fw-bold text-center bg-danger text-white w-75 mx-auto'>Error: {error?.message} {error_gh?.message}</p>
        // errorMsg = alert(`Error: ${error?.message} ${error_gh?.message}`)
    }

    if (user || user_gh) {
        navigate('/home')
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border border-1 border-danger w-50 me-2'></div>
                <p className='mt-2 fw-bold'>Or </p>
                <div className='border border-1 border-danger w-50 ms-2 me-2'></div>
            </div>
            {errorMsg}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark fw-bold w-50 mb-2 d-block mx-auto'> <img src={google} height="30" alt="" className='me-2' /> Google Sign In</button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark fw-bold w-50  mb-2 d-block mx-auto' > <img src={gh} height="30" alt="" className='me-2' /> GitHub Sign In</button>
            </div>


        </div>
    );
};

export default SocialLogin;