import PropTypes from "prop-types";
const Book = ({book}) => {
    return (
     <div>
           <div className="relative mt-4 shadow-xl shadow-blue-400">
          <img className="w-10 rounded-full absolute -left-4 -top-3" src={book.author_img} alt="" />
            <h2 className="text-xl p-4 text-w rounded-md mb-6 bg-gray-200 font-semibold">{book.title}</h2>
        </div>
     </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}
export default Book;