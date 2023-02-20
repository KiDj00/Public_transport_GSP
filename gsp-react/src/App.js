import './App.css';
import Footer from './komponente/Footer';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Kontakt from './komponente/Kontakt';
import Linije from './komponente/Linije';
import { useEffect, useState } from "react";
import axios from "axios";
import Omiljene from './komponente/Omiljene';
import LoginPage from './komponente/LoginPage';
import RegisterPage from './komponente/RegisterPage';
import AdminDashboard from './komponente/AdminDashboard';
import Poruke from './komponente/Poruke';
import DodajLiniju from './komponente/DodajLiniju';
import IzmeniLiniju from './komponente/IzmeniLiniju';
import RedVoznje from './komponente/RedVoznje';
import Linija from './komponente/Linija';
import KupiKarte from './komponente/KupiKarte';


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  const [brojOmiljenihLinija, setBrOmLinija] = useState(0);
  const [id, setID] = useState(0);


  const [linije,setLinije] = useState([ ]);
  const [destinacije,setDestinacije] = useState([ ]);
  const[token,setToken] = useState();
  const [poruke,setPoruke] = useState([]);
  const [dolasci,setDolasci] = useState([]);

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

  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/kontakt",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setPoruke(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [ axiosInstance]);

  useEffect(() => {
    const getRandomLists3 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/destinacije",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setDestinacije(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists3();
  }, [ axiosInstance]);

  useEffect(() => {
    const getRandomLists4 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/dolazak",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setDolasci(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists4();
  }, [ axiosInstance]);


function dodajOmiljenu(id){
    linije.forEach((l)=>{
      if(l.id==id){
        l.omiljena=1;
        setBrOmLinija(brojOmiljenihLinija+1)

      }
    })
}

function dodeliID(id){
  console.log(id)
  linije.forEach((l)=>{
    if(l.id==id){
      l.omiljena=1;
      setID(l)

    }
  })
}

function addToken(auth_token){
  setToken(auth_token);
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
      <NavBar token={token} ></NavBar>

        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>} />
          <Route path="/kontakt" element={<Kontakt></Kontakt>} />
          <Route path="/linije" element={<Linije linije={linije} dodajOmiljenu={dodajOmiljenu} dodeliID={dodeliID} ></Linije>} />
          <Route path="/linije/*" element={<Linija linija={id}></Linija>} />
          <Route path="/karte" element={<KupiKarte></KupiKarte>} />
          
          <Route path="/omiljene" element={<Omiljene linije={linije} brojOmiljenih={brojOmiljenihLinija} izbaciIzOmiljenih={izbaciIzOmiljenih}  dodeliID={dodeliID}>  </Omiljene>} />
          <Route path="/login" element={<LoginPage addToken={addToken}></LoginPage>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/redVoznje" element={<RedVoznje linije = {linije} dolasci={dolasci}></RedVoznje>} />

          <Route path="/admin" element={<AdminDashboard linije={linije}></AdminDashboard>} />
          <Route path="/admin/poruke" element={<Poruke poruke={poruke}></Poruke>} />
          <Route path="/admin/dodajLiniju" element={<DodajLiniju destinacije={destinacije}> </DodajLiniju>} />
          <Route path="/admin/izmeniLiniju" element={<IzmeniLiniju destinacije={destinacije}> </IzmeniLiniju>} />
         x
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
