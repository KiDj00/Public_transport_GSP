import React, { useEffect, useState } from 'react'
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

    function brojautobuskihLinija(){
      let brojac=0;
      for(let i=0;i<linije.lenght;i++){
        if(linije[i].tipLinije==1){
            brojac++;
        }
      }
      return brojac;  

    }
    function brojtamvajskihLinija(){
      let brojac=0;
      for(let i=0;i<linije.lenght;i++){
        if(linije[i].tipLinije==2){
            brojac++;
        }
      }
      return brojac;  

    }

  return (
    <main>

<h1 className='adminNaslov'>Dobrodosli na AdminDashBoard</h1>
          <div className="admin"> 


              <div className='statistikeLevo'>

             </div>
             <div className='statistikeDesno'>
                <div className='statistika'>
                    <p>Broj linija </p>
                    <p>{linije.length}</p>
                </div>
                <div className='statistika'>
                    <p>Broj autobuskih linija</p>
                    <p>{brojautobuskihLinija()}</p>
                </div>
                <div className='statistika'>
                    <p>Broj tramvajskih linija</p>
                    <p>{brojtamvajskihLinija()}</p>
                </div>
             </div>

      
      </div>
    
  </main>




);

}

export default AdminDashboard