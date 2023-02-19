import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



function NavBar({token}) {
  function handleLogout(){ 
    console.log("USAO")

    var config = {
      method: 'post',
      url: '/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")

      },
    };
    console.log(window.sessionStorage.getItem("auth_token"))

    axios(config)
    .then(function (response) {

      console.log(response);

      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 


    })
    .catch(function (error) {


      console.log(error);


    }); 
  }
  return (
    <div >

        <div className="topnav">
        <Link to="/"   >Početna strana</Link>

{token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
    <>  
        <Link to="/login"   >Uloguj se  </Link>

        <Link to="/register">Registruj se</Link>
        <Link to="/kontakt">Kontakt</Link>

     </> 
     :  //ako jeste ulologovan treba da vidimo da li je admin ili nije admin
     <>  

        {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
        //admin moze da vidi poruke i da dodaje nove proizvode
            <> 
              <Link to="/admin"   >Dashboard </Link>
              <Link to="/admin/dodajLiniju"   >Dodaj liniju </Link>
                     <Link to="/admin/izmeniLiniju"   >Izmeni liniju </Link>
                     <Link to="/admin/poruke"   > Poruke </Link>


            </>
        : //ulogovani korisnici koji nisu admin mogu da vide raspored, da dodaju nove smene  
            <>

             <Link to="/linije">Linije</Link>
             <Link to="/omiljene">Omiljene</Link>
             <Link to="/redVoznje">Red voznje</Link>


            </>

        //svi korisnici mogu da se odloguju
        }
         <a href="/" className="navbar-items" onClick={handleLogout}> Odjavi se </a>

     </>

}











        </div>
    </div>
  );
}

export default NavBar;