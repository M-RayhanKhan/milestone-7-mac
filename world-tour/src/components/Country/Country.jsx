import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const {name , flags} = country
    return (
        <div className='country'> 
            <h4>Name: <small>{name?.common}</small></h4>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Country;