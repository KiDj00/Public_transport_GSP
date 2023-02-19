import React, { useState } from 'react'

function RedVoznje({dolasci,linije}) {
    const [brojLinije, setBrojLinije] = useState(0);
    var random=0;
    function randomNumberInRange(min, max) {
        //  get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    function handleInput(e){
        setBrojLinije(e.target.value);
        console.log(e.target.value);
    }
    function postojiLinija(broj){
        var postoji=0;
        for(var i=0;i<linije.length;i++){
            if(linije[i].brojLinije==broj){
                postoji=1;
                random=randomNumberInRange(5, 35);
            }

        }
        return postoji;
    }
    return (<div className='redvoznje' >

    <div className="wrap-input100 validate-input m-b-26" data-validate="Name is required">
            <span className="label-input100">Broj linije</span>
            <input className="input100" type="text" name="brojLinije" id="brojLinije" placeholder="Unesi brojLinije" onInput={handleInput}/>
            <span className="focus-input100"></span>
    </div>

                {postojiLinija(brojLinije)==0?
                    <>
                        <p>Ne postoji izabrana linija</p>
                    </>

                :
                <>
                <br /><br /><br />
                    <table  >
                        <tbody>
                            <tr><th>7</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>8</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>9</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>10</th><td> {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>11</th><td>  {randomNumberInRange(1, 11)}</td> <td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>12</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>13</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>14</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>15</th><td>  {randomNumberInRange(1, 11)}</td> <td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>16</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>17</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>18</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>19</th><td>  {randomNumberInRange(1, 11)}</td> <td>  {randomNumberInRange(41, 60)}</td></tr>
                            <tr><th>20</th><td>  {randomNumberInRange(1, 11)}</td><td>  {randomNumberInRange(12, 40)}</td><td>  {randomNumberInRange(41, 60)}</td></tr>
                        </tbody>


                    </table>
            </>}






</div>
);
}