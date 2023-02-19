import React from 'react'
import LinijeKartica from './LinijeKartica';
import {BsSearch} from "react-icons/bs"
import { useState } from "react";
function Linije({linije,dodajOmiljenu}) {
    const [searchTerm, setSearchTerm] = useState('');
    function handleInput(e){
        setSearchTerm(e.target.value.toLowerCase() );
        console.log(e.target.value);
      }


  return (
    <div>
        <input  className='search'type="text" placeholder='Pretraga...' onChange={handleInput}></input>  <BsSearch />
    <div className='sveLinije'>



    {searchTerm=='' ? 
        linije.map((l)=>(<LinijeKartica key={l.id} linija={l} dodajOmiljenu={dodajOmiljenu} mod={1} ></LinijeKartica>))
        :
        linije
        .filter((l)=> (l.pocetnaDestinacija.naziv.toLowerCase().includes(searchTerm) || l.zavrsnaDestinacija.naziv.toLowerCase().includes(searchTerm)) )
        .map((l)=>(<LinijeKartica key={l.id} linija={l} dodajOmiljenu={dodajOmiljenu} mod={1} ></LinijeKartica>))
    }
    </div>
    </div>
  );
}

export default Linije;