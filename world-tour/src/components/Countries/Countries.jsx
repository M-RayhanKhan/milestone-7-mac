import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [counries, setCountries] = useState([])
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>Countries: {counries.length}</h3>
            {
                counries.map(country => <Country key={country.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;