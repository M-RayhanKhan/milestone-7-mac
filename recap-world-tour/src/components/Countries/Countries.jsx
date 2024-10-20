import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        const newCountry = [...visitedCountry, country];
        setVisitedCountry(newCountry)
    }

    return (
        <div >
            <h3>countries: {countries.length}</h3>
            <div>
                <h4>visited countries: {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map(visit => <li key={visit.cca3}>{visit.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;