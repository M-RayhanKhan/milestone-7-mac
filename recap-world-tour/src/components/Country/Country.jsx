import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
  
    const [visited, setVisted] = useState(false);
    const handleVisited = () =>{
        setVisted(!visited)
    }

    const {name, flags, population, area , languages} = country
    return (
        <div className={`country ${visited ? "visited" : "non-visited"}`}>
            <h2>name: <small>{name.common}</small></h2>
            <img src={flags.png} alt="" />
            <p>language: {languages?.eng}</p>
            <p>population: {population}</p>
            <p>area: {area}</p>
            <button onClick={()=>handleVisitedCountry(country)}>mark country</button>
            <br />
            
            <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
            {
                visited ? "I hanve to visited this country" : 'I want to Going'
            }
        </div>
    );
};

export default Country;