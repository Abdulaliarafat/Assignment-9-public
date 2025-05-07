import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import Loading from './Loading';
import { Link } from 'react-router';

const Profile = () => {
    const {user}=use(AuthContext)
    if(!user ){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='max-w-3xl mx-auto px-10 py-5  my-10 space-y-3 bg-gradient-to-b from-blue-300 to-red-100 rounded-2xl shadow-2xl'>
                <img className='block mx-auto w-40' src={user.photoURL} alt="" />
                <p className='text-center font-bold text-xl'>Name : {user.displayName}</p>
                <p className='text-center font-semibold text-xl'>Email : {user.email}</p>
              <Link to='/'>
              <button className='btn w-30 block mx-auto font-semibold  bg-gradient-to-r from-blue-700 to-blue-400 text-white hover:bg-gradient-to-t hover:from-blue-900 hover:to-blue-500'>Home</button>
              </Link>
            </div>
        </div>
    );
};

export default Profile;