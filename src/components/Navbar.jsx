import { NavLink } from "react-router-dom";
import logo from "../assets/image1.svg";

const Navbar = () => {
  return (
    <>
      {/* Header Part */}
      <header className="py-2 px-36 sticky top-0 bg-white shadow-md">
        <div className="container flex justify-center items-center">
          {/* Logo */}
          <div className="logo-brand">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-8v mt-2" />
            </NavLink>
          </div>

          {/* Navbar Part */}
          <nav className="flex justify-center items-center ml-2">
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/servicedetails">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/servicedetails">App Ideas</NavLink>
              </li>
              <li>
                <NavLink to="/servicedetails">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/servicedetails">Content</NavLink>
              </li>
            </ul>
            <button
              onClick={() => console.log("Button clicked")}
              className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-700 ml-7"
            >
              App Cost Calculator
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
