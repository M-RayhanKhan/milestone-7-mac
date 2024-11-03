import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/LocalStorage";


const BookDetails = () => {
    const { jhankarId } = useParams()
    const id = parseInt(jhankarId)
    const allData = useLoaderData()

    const book = allData.find(book => book.bookId === id);

    const { bookId, image, bookName, author, review, tags, category, totalPages, yearOfPublishing, rating, publisher } = book;

    const handleMarkAsRead = (id) => {
    
        addToStoredReadList(id)
    }

    const handleWishList = (id) => {
       
        addToStoredWishList(id)
    }

    return (
        <div>
            <h1 className="text-xl text-center">Book Details: {jhankarId}</h1>
            <div className="hero px-4 lg:px-0 mt-4 mb-10">
                <div className="flex gap-10 flex-col lg:flex-row">
                    <div className="md:flex-1 lg:h-[780px] md:h-[500px] md:p-12  rounded-lg bg-gray-200">
                        <img
                            src={image}
                            className="mx-auto h-full" />
                    </div>
                    <div className="md:flex-1 space-y-4">
                        <h1 className="md:text-5xl text-3xl font-bold">{bookName}</h1>
                        <p className="py-6">
                            By: {author}
                        </p>
                        <p className="py-4 border-t border-b">
                            {category}
                        </p>
                        <p>
                            <small className="font-bold text-xl">Review: </small>
                            <span className="text-gray-500">{review}</span>
                        </p>
                        {/* tag */}
                        <div className="text-center border-b pb-2 flex gap-4">
                            <p className="font-bold">Tags:</p> {
                                tags.map((tag, index) => <button key={index} className=" px-4 py-1 rounded-2xl text-[17px] bg-green-100 text-green-500">{tag}</button>)
                            }
                        </div>
                        <div className="flex gap-16">
                            <div className="space-y-2">
                                <p className="text-gray-500">Number of Pages:</p>
                                <p className="text-gray-500">Publisher:</p>
                                <p className="text-gray-500">Year of Publishing:</p>
                                <p className="text-gray-500">Rating:</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold">{totalPages}</p>
                                <p className="font-bold">{publisher}</p>
                                <p className="font-bold">{yearOfPublishing}</p>
                                <p className="font-bold">{rating}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleMarkAsRead(bookId)} className="btn mr-4 btn-outline btn-accent">Mark as Read</button>
                            <button onClick={ () => handleWishList(bookId)} className="btn btn-accent">Add To Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;