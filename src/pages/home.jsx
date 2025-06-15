import { Link } from "react-router-dom";
import "./../styles/home.css"
import logo from './../assets/images/logo.png';

const Home = () => {
    return (
        <>
            <img className="logo" src={logo} alt="Logo" /> &nbsp;
            <h1>Home Page</h1> <br /><br />
            <Link to="/about">About Us</Link> <br />
            <Link to="/about">Services</Link>
        </>
    );
}

export default Home;