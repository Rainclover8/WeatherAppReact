
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {


  const [search, setSearch] = useState()
  const [city, setCity] = useState("")


  let key = 'a158c460bd9302b2f583a08d4ae8a0ca'
 


  useEffect(() =>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`)
    .then(res =>{
      return res.json()
    })
    .then((data) =>{
      setCity(data)
      console.log(data)
    })
  },[search])

  const changeHandler = (e) =>{
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hava Durumu Uygulaması</h1>
      <input type="text" onChange={changeHandler} />
      <Weather city={city}/>
    </div>
  );
}

export default App;
