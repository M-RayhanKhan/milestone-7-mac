import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks, handleReadTime}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="lg:w-4/6  mt-2 md:mr-4">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleReadTime={handleReadTime}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}
export default Blogs;