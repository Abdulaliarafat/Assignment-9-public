import React, { useEffect, useState } from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { useLoaderData, useParams } from 'react-router';
import Details from '../Components/Details';

const CompaniesDetails = () => {
    const {id}=useParams()
    const data=useLoaderData()
    console.log(id,data)
    const [details,setDetails]=useState([])
    useEffect(()=>{
        const fiteredData=data.filter(company=>company.id==id)
        setDetails(fiteredData)
    },[data,id])
   
    return (
        <div>
           <header>
           <Navber></Navber>
           </header>
           <main>
           {
            details.map(singleDetails=><Details key={singleDetails.id} singleDetails={singleDetails}></Details>)
           }
           </main>
           <footer>
           <Footer></Footer>
           </footer>
        </div>
    );
};

export default CompaniesDetails;