import { Link, NavLink } from 'react-router-dom';
import  './Navbar.css'
const Navbar = () => {
    return (
        <div>
          
           <nav className='nav'>
            <span>My Website</span> <br />
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/meals'>Meals</NavLink>
           </nav>
        </div>
    );
};

export default Navbar;