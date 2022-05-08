import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import imggoogle from '../../img/google.icon/2.png'
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../navBar/NavBar';

const Sign = () => {


    // all usestates are here
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, seterror] = useState('')

    // location 
    const MainUser = useAuthState(auth)
    console.log(MainUser)
    const naviget = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    // gooogle and git hub
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    // forget password updata
    const [sendPasswordResetEmail, sending, passworderror] = useSendPasswordResetEmail(auth);
    // sign in form 
    const heandelSignInSignUp = (e) => {
        e.preventDefault();
        setemail(e.target.email.value);
        setpassword(e.target.password.value);
    };

    const hendelcreateUserlogIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                seterror(errorMessage)

            })
        if (MainUser[0]) {
            naviget(from, { replace: true })
        }
    }

    const forgetpassword = async () => {
        toast('sending email for new password')
        if (email) {
            await sendPasswordResetEmail(email)
            if (passworderror) {
                seterror(passworderror.message)
            }
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='form-main-div'>
                {/* form title  */}
                <h1 className='form-title'>Please Log In</h1>

                {/* all input filds  */}
                <form onSubmit={heandelSignInSignUp}>
                    <div className='all-inputfild-div '>
                        <div>
                            <input className='input-filds' type="email" name="email" placeholder='Enter Email Id' required />
                            <input className='input-filds' type="password" name="password" placeholder='Enter Password' required />
                            <p className='text-center'>{errors}</p>
                            <Link to='/Registor' className='ms-4 nav-link'>Want to create an account</Link>
                            <small className='nav-link ms-4' onClick={forgetpassword}>Forget password ?</small>

                            <div className='mx-4'>
                                <button className='card-button w-100' onClick={hendelcreateUserlogIn}>Log In</button>
                            </div>
                            <div className='or-part mt-3 mx-3'>
                                <hr />
                                <h5 className='text-or'>or</h5>
                                <hr />
                            </div>
                            <div className='main-icon-div'>
                                <img className='icon-img' onClick={() => {
                                    signInWithGoogle()
                                        .then(() => {
                                            naviget(from, { replace: true })
                                        })
                                }} src={imggoogle} alt="" />
                            </div>
                        </div>
                    </div>
                </form>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Sign;