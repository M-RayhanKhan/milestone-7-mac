import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    // const {country,handleVisitedCountry ,handleVisitedFlug} = props
    // console.log(props);
    return (
        <div>
            <h4>country details</h4>
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;