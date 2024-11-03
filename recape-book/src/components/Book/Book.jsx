import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, rating, category, tags } = book
    return (
        <div className="border rounded-lg bg-base-100 ">
            <figure className=" rounded-2xl bg-slate-200 m-4">
                <img
                    className="h-[160px] mx-auto py-4 rounded-xl"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div>
                    {
                        tags.map((tag, index) => <button key={index} className="btn btn-sm text-green-400 mr-4 rounded-2xl">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p className="border-b-2 border-dashed pb-2">By: {author}</p>
                <div className="card-actions justify-end">
                    <p>{category}</p>
                    <div className="flex items-center mt-2 gap-3">
                        <p>{rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-black" />
                         
                        </div>
                    </div>
                </div>
               <Link to={`/bookDetails/${bookId}`}><button className="btn btn-error w-full">Details</button></Link>
            </div>
        </div>
    );
};

export default Book;