import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {

    const [counries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlug, setVisitedFlug] = useState([]);

    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
     
    const handleVisitedCountry = (country) =>{
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }

    const handleVisitedFlug = (flug) =>{
       const newFlugCountry = [...visitedFlug, flug];
       setVisitedFlug(newFlugCountry);
    }

    return (
        <div>
            <h3>Countries: {counries.length}</h3>
            {/* visited country */}
            <div>
                <h2>visited countries: {visitedCountry.length}</h2>
               <ul>
               {
                    visitedCountry.map(coun=> <li key={coun.cca3}>{coun.name.common}</li>)
                }
               </ul>
               <div className="flug-container">
                {
                    visitedFlug.map((flug, idx) => <img key={idx} src={flug}></img>)
                }
               </div>
            </div>
            {/* display all countries */}
          <div className="countries">
          {
                counries.map(country => <Country
                     key={country.ccn3} 
                     country={country}
                     handleVisitedCountry={handleVisitedCountry}
                     handleVisitedFlug={handleVisitedFlug}
                     ></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;