import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=> {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div className="my-5">
            <h2 className="text-center text-xl font-bold">Books: {books.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;