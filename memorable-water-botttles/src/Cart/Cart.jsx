import './Cart.css'
import PropTypes from 'prop-types'; 
const Cart = ({cart, removeCart}) => {
    return (
        <div>
            <p>water bottle count: {cart.length}</p>
            <div className="cart-container">
              <div className='cart'>
              {cart.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img} ></img>
                    <button onClick={()=>removeCart(bottle.id)}>remove</button>
                </div>)}
              </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    removeCart: PropTypes.func.isRequired
}
export default Cart;