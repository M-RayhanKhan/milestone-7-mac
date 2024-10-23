import { FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({blog, handleBookmarks , handleReadTime}) => {
    const {id, title, author, author_img, cover, posted_date,reading_time, hashtags} = blog
    return (
        <div className="mb-10 px-4 space-y-3">
           <img className="h-[200px] lg:w-auto w-full" src={cover} alt={`cover image `} />
           <div className="md:flex md:pr-6 items-center justify-between">
            <div className="flex mt-2 items-center">
                <img className="w-14 mr-2" src={author_img} alt="" />
                <div>
                    <h3 className="text-xl font-semibold">{author}</h3>
                    <p className="text-gray-600">{posted_date}</p>
                </div>
            </div>
            <div>
                <button className="text-xl text-gray-600 flex items-center gap-3 font-semibold">{reading_time} min read
                    <FaRegBookmark onClick={()=>handleBookmarks(blog)}></FaRegBookmark>
                </button>
            </div>
           </div>
           <h2 className="text-3xl leading-[50px] font-bold">{title}</h2>
           <div>
            {
                hashtags.map((has, idx) => <span key={idx}><a href="#">  #{has}</a></span>)
            }
           </div>
           <button onClick={() => handleReadTime(reading_time, id)} className="text-purple-600 underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}
export default Blog;