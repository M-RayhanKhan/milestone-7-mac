import PropTypes from "prop-types";
import Book from "../Book/Book";

const Bookmarks = ({ bookmarks , readTime}) => {
    return (
        <div className="lg:w-1/3 border bg-gray-300 px-2">
            <button className="border-2 rounded-xl border-purple-600">
                <h3 className="text-2xl rounded-xl px-5 py-4 bg-gray-100 text-purple-700 font-bold">Send time on read:  <small className="ml-2">{readTime}</small></h3>
            </button>
            <h1 className="text-xl font-bold">Bookmarked: {bookmarks.length}</h1>
            {
                bookmarks.map((book, index) => <Book key={index} book={book}></Book>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number
}
export default Bookmarks;