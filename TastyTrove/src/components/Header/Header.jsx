import { FaRegUserCircle } from "react-icons/fa";
import './Header.css'
const Header = () => {
    return (
     <div className="container mx-auto">
           <div className="space-y-3 px-2 lg:px-0 py-3 flex flex-col lg:flex-row justify-between items-center ">
           <h2 className="text-2xl font-semibold">Recipe Calories</h2>
           <div className="flex list-none gap-10 items-center">
           <li><a href="/">Home</a></li>
           <li><a href="/recipes">Recipes</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/search">Search</a></li>
           </div>
           <div className="flex gap-5 relative items-center">
           <div>
           <input type="text" name="" className="md:w-[200px] w-[150px] top-0   lg:right-12 lg:absolute md:hover:w-[240px] hover:w-[240px] duration-1000 bg-gray-200 px-4 py-3 rounded-full outline-none border-none" placeholder="Search"/>
            {/* search button */}

           </div>
            {/* green icons */}
           <button className="p-2 rounded-full bg-green-500"> <FaRegUserCircle className="text-2xl  "></FaRegUserCircle></button>
           </div>
        </div>
        {/* banner images */}
        <div  className="w-full space-y-3 flex flex-col justify-center items-center text-gray-300 text-center image bg-cover bg-center h-[30rem] mt-10 lg:h-[35.5rem] h-full rounded-2xl">
            <h1 className="md:text-4xl text-2xl max-w-[600px] font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div>
            <button className="font-bold rounded-full text-xl  px-8 py-4 bg-green-600 border-none ">Explore Now</button>

            <button className="font-bold mt md:ml-4 border border-white hover:bg-green-600 hover:border-none duration-1000 rounded-full text-xl  px-8 py-4 mt-8 md:mt-0">Our Feedback</button>
            </div>
        </div>
        {/* Our Recipes */}
        <div className="text-center my-16">
            <h3 className="text-4xl font-bold">Our Recipes</h3>
            <p className="max-w-[620px] mx-auto text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
     </div>
    );
};


export default Header;