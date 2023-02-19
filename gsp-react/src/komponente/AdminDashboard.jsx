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



    function brojProdatihProizvoda(){
         var brojac=0;
        
    }
    function cenaTelefona(id){
        
        return 0;
    }
    function prihod(){
        var suma=0;
      
        return suma;
   }


  return (
    <main>

<div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        {/* <img src={hello} alt="hello" /> */}
        <div className="main__greeting">
          <h1>Zdravo </h1>
          <p>Dobrodosli na admin stranicu</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}

      {/* <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="cardAdmin">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Broj prodatih proizvoda</p>
            <span className="font-bold text-title">{brojProdatihProizvoda()}</span>
          </div>
        </div>

        <div className="cardAdmin">

          <div className="card_inner">
            <p className="text-primary-p">Broj proizvoda</p>
            <span className="font-bold text-title">{linije.length}</span>
          </div>
        </div>

        <div className="cardAdmin">
          <i
            className="fa fa-video-camera fa-2x text-yellow"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Ukupni prihod</p>
            <span className="font-bold text-title">{prihod()}</span>
          </div>
        </div>


      </div>
      {/* <!-- MAIN CARDS ENDS HERE --> */}


    </div>
  </main>




);

}

export default AdminDashboard