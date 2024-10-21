import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle, handleBottleCount}) => {
    // console.log(bottle);
    const {name, price, img} = bottle
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>name: <small>{name}</small></h3>
            <p>Price: ${price}</p>
            <button onClick={()=>handleBottleCount(bottle)}>Parches</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleBottleCount: PropTypes.func.isRequired
}
export default Bottle;