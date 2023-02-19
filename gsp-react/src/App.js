import './App.css';
import Footer from './komponente/Footer';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from './komponente/Kontakt';
import Linije from './komponente/Linije';
import { useEffect, useState } from "react";
import axios from "axios";
import Omiljene from './komponente/Omiljene';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  const [brojOmiljenihLinija, setBrOmLinija] = useState(0);

  const [linije,setLinije] = useState([ ]);
  useEffect(() => {
    const getRandomLists = async () => {
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
        setLinije(res.data.data);
        console.log(linije);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [ axiosInstance]);

    // {
    //   id:10,
    //   brojLinije:65,
    //   pocetnaStanica:"Karaburma 2",
    //   krajnjaStanica:"Paviljoni",
    //   vreme: 42,
    //   zona:1, 
    //   omiljena:0

    // },

function dodajOmiljenu(id){
    linije.forEach((l)=>{
      if(l.id==id){
        l.omiljena=1;
        setBrOmLinija(brojOmiljenihLinija+1)

      }
    })
}

function izbaciIzOmiljenih(id){
  linije.forEach((l)=>{
    if(l.id==id){
      l.omiljena=0;
      setBrOmLinija(brojOmiljenihLinija-1)

    }
  })
}





  return (


    <div >
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>} />
          <Route path="/kontakt" element={<Kontakt></Kontakt>} />
          <Route path="/linije" element={<Linije linije={linije} dodajOmiljenu={dodajOmiljenu} ></Linije>} />
          <Route path="/omiljene" element={<Omiljene linije={linije} brojOmiljenih={brojOmiljenihLinija} izbaciIzOmiljenih={izbaciIzOmiljenih}>  </Omiljene>} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
