import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl text-center font-bold">Books {books.length}</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;