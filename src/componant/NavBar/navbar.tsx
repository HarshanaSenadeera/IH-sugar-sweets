import {Component} from "react";
import logo from "../../../public/remove_bg.png"
import {Link} from "react-router-dom";



export class Navbar extends Component{

    render() {
        return (
            <div className="bg-gradient-to-r from-purple-600 to-indigo-800 p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img
                        className="h-16 w-16 mb-2 md:mb-0 hover:cursor-pointer transform transition-transform hover:scale-110"
                        src={logo}
                        alt="Logo"
                    />
                </Link>

                {/* Navigation Links */}
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl w-full md:w-auto text-white font-sans font-bold">
                    <li className="md:ml-auto transform transition-transform hover:scale-110 hover:cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="transform transition-transform hover:scale-110 hover:cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="transform transition-transform hover:scale-110 hover:cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="transform transition-transform hover:scale-110 hover:cursor-pointer">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>

                {/* Sign-in and Login Buttons */}
                <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 md:space-x-2.5">
                    <Link to="/signin">
                        <button className="bg-white hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded-md hover:text-white hover:cursor-pointer">
                            Sign In
                        </button>
                    </Link>

                    <Link to="/login">
                        <button className="bg-white hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded-md hover:text-white">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

}