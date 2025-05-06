import React, { use } from 'react';
import { NavLink } from 'react-router';
 const CompaniesPromise=fetch('/Company.json').then(res=>res.json())
const Companies = () => {
    const company=use(CompaniesPromise)
    console.log(company)
    return (
        <div className='md:max-w-6xl max-w-5xl mx-auto'>
            <h1 className='font-bold text-2xl text-center mb-4'>Search your jobs in  the world top companies</h1>
            <p className='font-medium text-gray-500 text-center text-balance'>Search top global companies' jobs to explore roles, <br /> benefits, growth opportunities, and application processes easily.</p>
           <div className='grid md:grid-cols-3 lg:grid-cols-4 shadow-md rounded-md my-5 py-10 px-5 bg-white gap-6  bg-gradient-to-b from-blue-50 to-red-50'>
             {
                company.map(oneCompanies=>
                <NavLink to={`/company/${oneCompanies.id}`} key={oneCompanies.id}>
                    <div className='space-y-2 rounded-2xl py-7 shadow-xl  bg-gradient-to-b from-blue-200 to-blue-100 hover:bg-gradient-to-b hover:from-blue-600 hover:to-blue-200'>
                    <img className='w-26 rounded-3xl bg-white block mx-auto' src={oneCompanies.logo} alt="logo" />
                    </div>
                </NavLink>)
             }
           </div>
        </div>
    );
};

export default Companies;