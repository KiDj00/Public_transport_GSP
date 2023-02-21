import React, { useState } from 'react'
import './KontaktStyle.css';
import axios from "axios";
import { useNavigate} from 'react-router-dom';
function Kontakt() {
	const [porukaData,setPorukaData]=useState({
        ime:"",
        email:"",
        poruka:""
    });
    function handleInput(e){  
        let newPorukaData = porukaData; 

        newPorukaData[e.target.name]=e.target.value;

        setPorukaData(newPorukaData);  
        console.log(newPorukaData);
    }
    let navigate = useNavigate();
    function handleSend(e){

        e.preventDefault();   


        axios
            .post('http://127.0.0.1:8000/api/kontakt', porukaData )
            .then((res)=>{ 
                console.log(res);
                if(res.data.success===true){
                    alert("USPESNO");
                   navigate("/");  



                }else{
                    alert("NEUSPESNO");
                }
            }).catch(error => console.error(error.response.data));


    }
  return (
    <div className='kontakt' >
        <div className="container">
	<div className="row">
			<h1 className='h1Kontakt'>contact us</h1>
	</div>
	<div className="row">
			<h4  >We'd love to hear from you!</h4>
	</div>
	<div className="row input-container">
	<form onSubmit={handleSend}>
			<div className="col-xs-12">
				<div className="styled-input wide">
				<input type="text" required  name ='ime' onInput={handleInput}/>
					<label>Name</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input">
				<input type="text" required  name = 'email' onInput={handleInput} />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
				<textarea required name="poruka" onInput={handleInput}></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
			<div className="btn-lrg submit-btn"><button type="submit"  >Posalji</button></div>
			</div>
			</form>
	</div>
	<br /> 
</div>

    </div>
  );
}

export default Kontakt;