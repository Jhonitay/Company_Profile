import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Sliderkomen = () => {
    const [contacts , setComent]= useState([]);

  useEffect(()=>{
    getComent();
  },[]);

  const getComent = async () => {
    const response = await axios.post("http://localhost:5000/getcontacts");
    console.log(response.data.contacts.contacts);
    setComent(response.data.contacts.contacts);
  }

  return (
<>
{contacts.map((contact) => (
        <div className="grid" key={contact.contacts_Id}>
          <h2>{contact.name}</h2>
          <p className="dari">{contact.email}</p>
          <p>{contact.message}</p>
        </div>
      ))}
</>
      
  
  );
};

export default Sliderkomen;
