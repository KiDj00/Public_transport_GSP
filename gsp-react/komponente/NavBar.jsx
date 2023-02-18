import React from 'react'
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <div >

        <div className="topnav">
            <Link to="/">Pocetna</Link>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/linije">Linije</Link>
            <Link to="/omiljene">Omiljene</Link>
        </div>
    </div>
  );
}

export default NavBar;