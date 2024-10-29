import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    // console.log(navigation);
    console.log(location);
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <p>loading</p> :  <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;