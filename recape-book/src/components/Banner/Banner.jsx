import { Link } from "react-router-dom";
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="flex items-center flex-col md:flex-row bg-slate-200 p-10 rounded-xl my-8">
            <div>
                <h3 className="text-4xl font-bold">Books to freshen up your bookshelf</h3>
                <Link>
                <button className="btn mt-3 bg-green-600">View The List</button></Link>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;