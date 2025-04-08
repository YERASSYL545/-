import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/home">Home</Link> |<Link to="/gallery">Book Gallery</Link>
  </nav>
);

export default Navbar;
