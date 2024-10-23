
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Navbar from './components/Navbar/Navbar'

function App() {
const [bookmarks , setBookmarks] = useState([]);
const [readTime , setReadTime] = useState(0)

const handleBookmarks = blog => {
  const newBooks = [...bookmarks, blog] ;
  setBookmarks(newBooks)
}

const handleReadTime = (time, id) => {
 const newTime = readTime + time
 setReadTime(newTime)
 const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
 setBookmarks(remainingBookmarks)

}
  return (
    <>
    <Navbar></Navbar>
      <div className='lg:flex lg:max-w-5xl mx-auto'>
        <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
