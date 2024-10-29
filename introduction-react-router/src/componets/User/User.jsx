import { Link } from 'react-router-dom';
import './User.css'

const User = ({users}) => {
    const {id ,name, email, phone} = users;
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show details</button></Link>
            <Link to={`/user/${id}`}>
            <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;