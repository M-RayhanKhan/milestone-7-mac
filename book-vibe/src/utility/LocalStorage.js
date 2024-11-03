import { toast } from "react-toastify";

const warringToast = () => {
    toast.warn('already exists', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
}

const getToLocalStorageReadList = () =>{
    const storedBook = localStorage.getItem('list-book');
    if (storedBook) {
        const getStored = JSON.parse(storedBook);
        return getStored
    }
    return []
}

const addToStoredReadList = (id) => {
    const storedList = getToLocalStorageReadList();
    if (storedList.includes(id)) {
        warringToast()
    }else{
        storedList.push(id);
        const storedStringify = JSON.stringify(storedList)
        localStorage.setItem('list-book', storedStringify)
        toast('wow book added')
    }
}

const getStoredWishList = () => {
  const getStoredWishListStr = localStorage.getItem('wish-list');
  if (getStoredWishListStr) {
    return JSON.parse(getStoredWishListStr)
  }
  return [];
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        alert(id , 'already exists in the books')
    }else{
        storedList.push(id);
        const storedWishListStringify = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedWishListStringify)
    }
}



export { addToStoredReadList ,addToStoredWishList , getToLocalStorageReadList ,getStoredWishList};