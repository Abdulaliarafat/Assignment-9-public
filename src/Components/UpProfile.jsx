import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const UpProfile = () => {
    const {setUser,userProfile}=use(AuthContext)
    const handleRegisterFrom=(e)=>{
     e.preventDefault()
     const form=e.target;
     const name=form.name.value;
     const photo=form.photo.value;
     console.log(name,photo)
     userProfile({displayName:name,photoURL:photo}).then(()=>{
        setUser({displayName:name,photoURL:photo})
     })
     .catch((error) => {
       alert(error)
      });

    }
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10">
                <div className="card-body bg-gradient-to-b from-blue-300 to-red-100">
                    <h1 className="text-2xl font-bold text-center">Register your account</h1>
                    <form onSubmit={handleRegisterFrom} className="form  space-y-1">
                        <label className="label font-bold text-md">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        <label className="label font-bold text-md">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                        <button type='submit' className="btn w-full mt-4 bg-gradient-to-t from-blue-700 to-blue-400 text-white">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpProfile;