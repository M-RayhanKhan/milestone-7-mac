import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
   const usersAllData = useLoaderData();
    // stata --> data
    // state --> loader
    // useEffect
    // fetch --> state set ---> set state

    return (
        <div>
            <h2>Out users: {usersAllData.length}</h2>
            <div className="users">
                {
                    usersAllData.map(users=> <User key={users.id} users={users}></User>)
                }
            </div>
        </div>
    );
};

export default Users;