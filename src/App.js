import React, {useEffect, useState} from "react";
import Navbar from "./Componentes/Navbar";
import Characters from "./Componentes/Characters";
import  Pagina  from "./Componentes/Pagina";
import  "./hojasEstilo/App.css";




function App () {

    const [characters, setCharacters] = useState([]);
    const  [info, setInfo] = useState({});
 
  const initialurl = "https://rickandmortyapi.com/api/character";

   const fetchCaharters = (url) => {
   fetch(url)
    .then(response => response.json())
    .then((data) => {
         setCharacters(data.results);
         setInfo(data.info);
         })
    .catch(error => console.log(error))

   };

   const onPrevius = () => {
      fetchCaharters(info.prev);
   }
   const onNext = () => {
    fetchCaharters(info.next);    
   }

    useEffect(() => {
        fetchCaharters(initialurl);
    }, [])
      
    return (
     <>
     <Navbar  brand="Rick y Morty Applicacíon"/>
     
      <div className="container mt-5 ">
        <Pagina  prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
       <Characters characters={characters} />
        <Pagina prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
      </div>

     </>
     
       
    );
}

export default App;