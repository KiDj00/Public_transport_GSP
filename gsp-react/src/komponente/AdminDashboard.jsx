import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css";
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
const AdminDashboard = ({linije}) => {

    const [stavke,setStavke] = useState([ ]);
    useEffect(() => {
      const getRandomLists4 = async () => {
        try {
          const res = await axiosInstance.get( "http://127.0.0.1:8000/api/linije",
            {
              headers: {
                token:
                  "Bearer " +
                  ( window.sessionStorage.getItem("auth_token")),
              },
            }
          );
          setStavke(res.data);
          console.log(res.data)
        } catch (err) {
          console.log(err);
        }
      };
      getRandomLists4();
    }, [ axiosInstance]);


  return (
    <main>

<div className="main__container">

      <div className="main__title">
        <div className="main__greeting">
          <h1>Zdravo </h1>
          <p>Admin dashboard</p>
        </div>
      </div>

     
      <div className="main__cards"> 
        <div className="cardAdmin">

          <div className="card_inner">
          <p className="text-primary-p">Broj linija</p>
            <span className="font-bold text-title">{linije.length}</span>
          </div>
        </div>

      
      </div>
    </div>
    
  </main>




);

}

export default AdminDashboard