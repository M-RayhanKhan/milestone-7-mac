import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const paramId = useParams();
    const id = parseInt(paramId.id)
    const books = useLoaderData()
  
    const book = books.find(book => book.bookId === id);
    console.log(book);
    
    const {image, bookId, author} = book
     
    return (
        <div>
            <h1 className="text-xl text-center font-bold">BookDetails id: {id}</h1>
            <div className="flex justify-center">
                <div className="h-[200px] w-ful">
                    <img className="h-full" src={image} alt="" />
                </div>
                <div>
                    <h3 className="text-3xl">{author}</h3>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;