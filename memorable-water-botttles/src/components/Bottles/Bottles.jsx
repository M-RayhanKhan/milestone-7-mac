import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getToLStorage, removeItems } from "../../utility/localStorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {   
       if (bottles.length) {
        const getToLSItems = getToLStorage();
        const saveCart = [];
        for (const id of getToLSItems) {
            const bottle = bottles.find(bottle => bottle.id === id)
            if (bottle) {
              saveCart.push(bottle)
            }
        }
        setCart(saveCart);
       }
    }, [bottles])

    const removeCart = id =>{
        console.log(id);
        const remainingCart = cart.filter(bottol => bottol.id !== id);
        setCart(remainingCart)
        removeItems(id)
    }

    const handleBottleCount = bottle => {
        const newBottle = [...cart, bottle];
        setCart(newBottle)
        addToLS(bottle.id)
    }

    return (
        <div>
            <h2>water botles: {bottles.length}</h2>
            <Cart cart={cart} removeCart={removeCart}></Cart>

            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleBottleCount={handleBottleCount}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;