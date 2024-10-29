import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {postId} = useParams()

    console.log(postId);

    const {title, id} = post;
   
    const navigate = useNavigate()
    const handleGoback = () => {
        navigate(-1)
    }
    return (
        <div className="user">
            <h2>Id: {id}</h2>
            <h3>title: {title.slice(0,35)}</h3>
            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default PostDetails;