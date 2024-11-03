import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getToLocalStorageReadList } from '../../utility/LocalStorage';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();
    // console.log(allData);

    useEffect(() => {
        const storedReadList = getToLocalStorageReadList();
        const readListNumber = storedReadList.map(id => parseFloat(id))

        const readBookList = allBooks.filter(book => readListNumber.includes(book.bookId))
        setReadList(readBookList);
    }, [])

        const handleSort = (sortType)=> {
          if (sortType === 'no of pages') {
            const sortTotapPages = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortTotapPages)
          }
          if (sortType === 'ratings') {
            const sortRatings = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortRatings)
          }
        }


    return (
        <div>
           <div className='flex justify-center my-2'>
           <div className="dropdown  dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `sort by: ${sort}` : 'sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li onClick={() => handleSort('ratings')}><a>Ratings</a></li>
                  <li onClick={() => handleSort('no of pages')}><a>No of pages</a></li>
                </ul>
            </div>
           </div>
            <h3 className='text-3xl my-8'>Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Whish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl font-semibold'>Books I read: {readList.length}</h2>
                    <div className='grid md:grid-cols-3 gap-4 mb-5'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;