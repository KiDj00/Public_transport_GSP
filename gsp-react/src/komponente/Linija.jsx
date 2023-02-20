import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaBus} from "react-icons/fa"
import MyMapComponent from './MyMapComponent';
 
 
function Linija({linija}) {  
 
    console.log(linija)

      let redovi=[]
      for (let i=4;i<24;i++){
        if(linija.interval<10 && (i==6 || i==7 || i==8 || i==13 || i==14 || i ==17 || i==16)){ 
            redovi.push(<tr><th><b>{i}</b></th><td>{7+linija.interval}</td><td>{17+linija.interval}</td><td>{27+linija.interval}</td><td>{37+linija.interval}</td>{47+linija.interval}</tr>)
        }else if(linija.interval<20){
            redovi.push(<tr><th><b>{i}</b></th><td>{3+linija.interval}</td><td>{17+linija.interval}</td><td>{39+linija.interval}</td></tr>)
        }else if(i==22 || i==23){
            redovi.push(<tr><th><b>{i}</b></th><td>{linija.interval}</td><td>{10+linija.interval}</td></tr>)
        }else{
            redovi.push(<tr><th><b>{i}</b></th><td>{linija.interval}</td><td>{10+linija.interval}</td><td>{15+linija.interval}</td></tr>)
        }
      }
  return (
    <div className='linija' >
        
        <h1> <FaBus></FaBus>       {linija.brojLinije}</h1>
        <h2> {linija.pocetnaDestinacija.naziv}</h2>
        <h2> {linija.zavrsnaDestinacija.naziv}</h2>
        <h3> {linija.vreme} min.</h3>
        <h4> Red voznje: </h4>
        <table>
                <thead>
                    <tr><td>Sat</td><td>Minut</td></tr>
                </thead>
                <tbody>
                    {redovi.map((r)=>r)}

                </tbody>


        </table>
        <MyMapComponent></MyMapComponent>
    </div>
  );
}

export default Linija;