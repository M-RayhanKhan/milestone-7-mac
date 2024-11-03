import bookList from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex gap-8 mx-2 bg-[#f3f3f3] my-10 lg:p-16 p-4 items-center rounded-lg flex-col md:flex-row'>
            <div>
                <h3 className="md:text-5xl text-3xl font-medium">Books to freshen up your bookshelf</h3>
                <button className="btn mt-3 text-white bg-[#59bf30]">View The List</button>
            </div>
            <div>
                <img className='rounded-md' src={bookList} alt="" />
            </div>
        </div>
    );
};

export default Banner;