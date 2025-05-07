import React from 'react';
import { Link } from 'react-router';

const handleSignIn=(e)=>{

}
const LogIn = () => {
    return (
        <div>
              <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form onSubmit={handleSignIn} className="form space-y-3">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email"  required/>
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                            <p className='text-red-600 font-bold'>Please give currect password</p>
                        <button type='submit' className="btn btn-neutral w-full mt-4">Login</button>
                        <p className='mt-3 font-medium text-center'>Dont’t have an account please  ? 
                        <Link className='font-bold text-red-400 underline' to=''>Register</Link>
                        </p>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default LogIn;