import React, { use } from 'react';
import { Link, useNavigate} from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const Register = () => {
    const {createUser,setUser,userProfile}=use(AuthContext)
    const navigate=useNavigate()
    const handleRegisterFrom=(e)=>{
    e.preventDefault()
    const from=e.target;
    const name=from.name.value;
    const photo=from.photo.value;
    const email=from.email.value;
    const password=from.password.value;
    createUser(email,password).then(result=>{
        const userRes=result.user
        userProfile({displayName:name,photoURL:photo})
        .then(()=>{
            setUser({...userRes,displayName:name,photoURL:photo})
            navigate('/')
            alert('Register Successesfully')
        })
        .catch((error) => {
            setUser(userRes)
          });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }
    return (
        <div>
             <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Register your account</h1>
                    <form onSubmit={handleRegisterFrom} className="form  space-y-1">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name"  required/>
                        {/* {error && <p className='text-red-500 font-sans'>{error}</p>} */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL"   required/>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email"  required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral w-full mt-4">Register</button>
                        <p className='mt-3 font-medium text-center'>Already have an account please   ? <Link className='font-bold text-red-400 underline' to='/logInLayout/login'>Login</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;