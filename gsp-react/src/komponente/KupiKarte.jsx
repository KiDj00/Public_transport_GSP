import axios from 'axios';
import React, { useEffect, useState } from 'react'; 


const KupiKarte = ( ) => {
    const [prikazi, setPrikazi] = useState(0);
    const [redoviTabele, setRedoviTabele] = useState([]);

      //javni web servis da dobijemo koeficijent RSD_EUR
      const [RSD_EUR, setRSDEUR] = useState([]);
      useEffect(() => {
          axios({
            method: "GET",
            url:
              "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=EUR",

          })
            .then((response) => {
            console.log(response.data.data['RSD'].value);//117.58
            setRSDEUR(response.data.data['RSD'].value);

            })
            .catch((error) => {
              console.log(error);
          });
      }, []);



  //javni web servis da dobijemo koeficijent RSD_USD
  const [RSD_USD, setRSDUSD] = useState([]);
      useEffect(() => {
        axios({
          method: "GET",
          url:
            "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=USD",

        })
          .then((response) => {
            console.log(response.data.data['RSD'].value);
            setRSDUSD(response.data.data['RSD'].value);

          })
          .catch((error) => {
            console.log(error);
        });
    }, []);
    let redovi = [];
    function prikaziCenovnik(){

        setPrikazi(1)
        var valute = document.getElementById('currency');
        var trenutnaValuta  = valute.selectedIndex 
        var koeficijentValute=1;
        var oznakaValute="RSD";
        if(trenutnaValuta===1)//EUR
        {
            koeficijentValute=RSD_EUR;
            oznakaValute="EUR";
        }else if(trenutnaValuta==2){ //USD
            koeficijentValute=RSD_USD;
            oznakaValute="USD";

        }else{
            koeficijentValute=1;
            oznakaValute="RSD";
        }
        redovi.push(<tr key={1}><td>Za zaposlene</td><td>{(3000/koeficijentValute).toFixed(2)} {oznakaValute}</td></tr>)
        redovi.push(<tr key={2}><td>Za nezaposlene</td><td>{(1500/koeficijentValute).toFixed(2)} {oznakaValute}</td></tr>)
        redovi.push(<tr key={3}><td>Za studente</td><td>{(1200/koeficijentValute).toFixed(2)} {oznakaValute}</td></tr>)
        redovi.push(<tr key={4}><td>Za penzionere</td><td>{(500/koeficijentValute).toFixed(2)} {oznakaValute}</td></tr>)
        setRedoviTabele(redovi)
    }



  return (
    <div className='cenovnik' >
            <h1>CENOVNIK</h1>

            <label htmlFor="currency">U kojoj valuti zelite da vam se prikazu cene karata</label>

            <select name="currency" id="currency"  >
            <option value="RSD" >RSD</option>
            <option value="EUR" >EUR</option>
            <option value="USD" >USD</option>

            </select>
            <p><button onClick={()=>prikaziCenovnik()}>Prikazi cenovnik</button></p>
            {prikazi==1?
                <>
                    <p>Navedene cene su na mesecnom nivou</p>
                    <table>
                        <tbody>
                            {redoviTabele.map((r)=>r)}


                        </tbody>
                    </table>

                </>
                :
                <></>
            }
    </div>







  )
}

export default KupiKarte