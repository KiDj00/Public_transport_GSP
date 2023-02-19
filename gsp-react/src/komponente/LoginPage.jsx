import React from 'react';
import {useState} from "react";
 import './LoginStyle.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function LoginPage({addToken}) {



    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value; //newUserData['email']=e.target.value;
        console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    let navigate = useNavigate();
    function handleLogin(e){
        //ovo smo dodali tek nakon axios.post() i nakon e.preventDef. treba da sredimo onaj eror 419 u verifyCRFToken-u (vidi poslednje vezbe)
        //da bi axios radio moramo da odemo u /app/Http/Middleware/VerifyCsrfToken.php (vidi izmene koje smo tamo napravili)
        e.preventDefault(); // da zaustavi refresovanje na stranici da bi mogla da se izvrsi metoda handleLogin jer metoda onSubmit u formi vec ima neko svoje predefinisano ponasanje

        //za komunikaciju izmedju laravela i reacta cemo koristiti axios
        //moramo da pokrenemo npm install axios i da ga importujemo
        //"http://127.0.0.1:8000/api/login" je ruta na kojoj se ovo nalazi u laravelu
        axios
            .post("http://127.0.0.1:8000/api/login", userData )
            .then((res)=>{ //ako se uspesno izvrsi logovanje uci ce u funkciju (zbog ovog then)
                console.log(res.data[0]);
                if(res.data.success===true){
                   // alert("USPESNO");  


                    //token koji smo dobili od korisnika treba da sacuvamo u storag-u da bismo znali cemu taj korisnik ima pristup
                    window.sessionStorage.setItem("auth_token",res.data[0].token);
                    window.sessionStorage.setItem("auth_name",res.data[0].username);
                    window.sessionStorage.setItem("auth_id",res.data[0].id);

                    addToken(res.data[0].token);
                    console.log(res.data[0].token);
                    if(res.data[0].role === 'admin')
                    {
                         navigate("/admin")
                    }
                    else{
                        navigate("/"); //ovde cemo upisati na koju stranicu treba da ode ulogovani korisnik
                    }



                }else{
                    alert("NEUSPESNO");
                }
            });


    }
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                    Sign In
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleLogin}>
                <div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
                    <span className="label-input100">Email</span>
                    <input className="input100" type="email" name="email" id="email" placeholder="Enter email" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>
                <br /><br /><br />
                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" name="password" id="password" placeholder="Enter password" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="flex-sb-m w-full p-b-30">
                    <div className="contact100-form-checkbox">
                         <a href="/register">Create account!</a>

                    </div>


                </div>

                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" id="login" name="login"> 	Login 	</button>
                </div>
            </form>
        </div>
    </div>
</div>

    );
}

export default LoginPage;