import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const LogInPage = () => {
    const { LogInUser, googleSignIn,resetPassword } = use(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef=useRef()
    const handleSignIn = (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        LogInUser(email, password).then(result => {
            const userRes = result.user
            navigate(`${location.state ? location.state : '/'}`)
            toast.success("Login successfull");
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.warning("Invalid user")
            });

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (passwordRegExp.test(password) === false) {
            setError('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.')
            return
        }
    }
    const handleGoogleSignIn = () => {
        googleSignIn().then(result => {
            navigate('/')
        })
            .catch(error => {

            })
    }
    const handleForgetPassword=()=>{
       const email=emailRef.current.value;
       resetPassword(email).then(()=>{
        toast.success("Please check your email For reset password");
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.warn("Please  rest Passwoed");
      });
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
                <ToastContainer position='top-center' />
                <div className="card-body bg-gradient-to-b from-blue-300 to-red-100">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form onSubmit={handleSignIn} className="form space-y-3">
                        <label className="label font-bold text-md">Email</label>
                        <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />
                        <label className="label font-bold text-md">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                            title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
                             />
                        {
                            error && <p className='text-red-600 font-bold'>{error}</p>
                        }
                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn  w-full  bg-gradient-to-t from-blue-700 to-blue-400 text-white">Login</button>
                        <button onClick={handleGoogleSignIn} className="btn w-84 btn-ghost bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="30" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className='mt-3 font-medium text-center'>Dont’t have an account please  ? <Link className='font-bold text-red-400 underline' to='/logInLayout/register'>Register</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogInPage;