import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className="user">
            <h3>Id : {id}</h3>
            <h2>Title: {title}</h2>
            <p>{body}</p>
           <Link to={`/post/${id}`}>
           <button>Show Details</button>
           </Link>
           <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;