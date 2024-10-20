
const CountryData = (props) => {
     const {country, handleVisitedFlug} = props;
    //  console.log(country);
    return (
        <div>
            <h4>name: <small>{country.name.common}</small></h4>
        </div>
    );
};

export default CountryData;