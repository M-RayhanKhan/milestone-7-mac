
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

const handleReadTime = time => {
 setReadTime(readTime+time)
}
  return (
    <>
    <Navbar></Navbar>
      <div className='md:flex md:max-w-7xl mx-auto'>
        <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
