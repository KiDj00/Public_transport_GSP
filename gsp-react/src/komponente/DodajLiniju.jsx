import React from 'react'; 
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DodajLiniju = ({destinacije}) => {

    const [linijaData,setLinijaData]=useState({
        brojLinije:0,
        vreme:0,
        pocetnaDestinacija:1,
        zavrsnaDestinacija:1, 
        tipLinije:1,
        zona:1,
        interval:1,
    });
    function handleInput(e){  
        let newProductData = linijaData;  

        newProductData[e.target.name]=e.target.value;
        console.log(newProductData);
        console.log(e.target.name)
        console.log(e.target.value)
        setLinijaData(newProductData);  

    }
    let navigate = useNavigate();
    function handleAdd(e){


            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/linije", linijaData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
                .then((res)=>{  
                    console.log(res.data);
                     alert("USPESNO")
                     navigate("/");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);

                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }

                  });
    }



  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                Dodaj novu liniju
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleAdd}>

                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Name is required">
                        <span className="label-input100">Tip linije </span>

                                 <select  className="input100" name="tipLinijeID" id="1" onInput={handleInput}>

                                    <option  className="input--style-3" value="1" id={1} >autobuska</option>
                                    <option className="input--style-3" value="2" id={2} >tramvajska</option> 
                                    <option className="input--style-3" value="3" id={3} >voz</option> 

                                 </select>

                    </div>
                    <br /><br /> 


                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Broj linije is required">
                        <span className="label-input100">Broj linije</span>
                        <input className="input100" type="text"  placeholder="Broj linije" name="brojLinije" required onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />

                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Price is required">
                        <span className="label-input100">Pocetna Destinacija</span>
                        <select  className="input--style-3" name="pocetnaDestinacija" id="1" onInput={handleInput}>
                        {destinacije.map(d=><option  className="input--style-3" value={d.id} id={d.id} key={d.id}  >{d.naziv}</option>)}


                                 </select>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Price is required">
                        <span className="label-input100">Zavrsna Destinacija</span>
                        <select  className="input--style-3" name="pocetnaDestinacija" id="1" onInput={handleInput}>
                        {destinacije.map(d=><option  className="input--style-3" value={d.id} id={d.id}  key={d.id} >{d.naziv}</option>)}



                                 </select>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Image is required">
                        <span className="label-input100">Zona</span>
                        <input className="input100" type="text" name="zona" id="zona" placeholder="Zona" onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />

                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Obavezno polje">
                        <span className="label-input100">Vreme voznje</span>
                        <input className="input100" type="text" placeholder="Vreme voznje" name="vreme"required onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
                    
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Obavezno polje">
                        <span className="label-input100">Interval</span>
                        <input className="input100" type="text" placeholder="Unesi interval" name="interval"required onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />

                <div className="container-login100-form-btn">

                    <button className="login100-form-btn" id="dodaj" name="dodaj"> 	Dodaj 	</button>
                </div>
            </form>
        </div>
    </div>

    </div>







  )
}

export default DodajLiniju