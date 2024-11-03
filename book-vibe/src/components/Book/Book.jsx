import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, image, author, bookName, rating,tags, category, totalPages } = book
    return (
    <Link to={`/bookdetails/${bookId}`}>
        <div className="card bg-base-100 p-4 shadow-xl">
            <figure className="py-6 rounded-2xl  bg-gray-300">
                <img
                    className="h-[166px]"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className="text-center flex gap-4">
                    {
                        tags.map((tag, index)=> <button key={index} className=" px-4 py-1 rounded-2xl text-[17px] bg-green-100 text-green-500">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 py-2 border-dashed"></div>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="rating">
                        <div className="mr-2">
                            {totalPages}
                        </div>
                        <div>
                            {rating}
                        </div>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                    </div>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default Book;