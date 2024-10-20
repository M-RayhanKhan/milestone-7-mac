import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleVisitedFlug }) => {

    const [isVisited, setVisited] = useState(false)

    const handleVisitedCountries = () => {
        setVisited(!isVisited)
    }
    const { name, flags, population, area, cca3 } = country
    return (
        <div className={`country ${isVisited ? 'visited' : "non-visited"}`}>
            <h4 style={{ color: isVisited ? 'purple' : 'black' }}>Name: <small>{name?.common}</small></h4>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedFlug(flags.png)}>All Flug</button> <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark Country</button> <br />
            <button onClick={handleVisitedCountries}>{isVisited ? "visited" : "Going"}</button>
            {
                isVisited ? " I have visited this country" : "I want to going"
            }
            <hr />
    grid-area: ;
            <CountryDetails country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlug={handleVisitedFlug}></CountryDetails>
        </div>
    );
};

export default Country;