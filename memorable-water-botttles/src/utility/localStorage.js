const getToLStorage = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
       return JSON.parse(storedCart)
    }
    return[]
}

const saveToLSCart = cart => {
    const stringifyToLS = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyToLS)
}

const addToLS = id =>   {
    const cart = getToLStorage()
    cart.push(id)
    // save to LS
    saveToLSCart(cart)
}

const removeItems = id =>{
    const cart = getToLStorage();
    const button = cart.filter(idx => idx !== id )
    saveToLSCart(button)
}

export {addToLS, getToLStorage, removeItems}