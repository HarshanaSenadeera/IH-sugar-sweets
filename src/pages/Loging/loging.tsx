import {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export class Login extends Component<any, any>{


    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-500">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-80">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Log In
                        </button>

                        <div className="flex mt-4 justify-center">
                            {/* Facebook Login Icon */}
                            <button className="bg-blue-600 text-white rounded p-2 mr-2">
                                <FontAwesomeIcon icon={faFacebook} />
                            </button>
                            {/* Google Login Icon */}
                            <button className="bg-red-600 text-white rounded p-2">
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                            {/* Add more social icons as needed */}
                        </div>
                    </form>

                </div>

            </div>
        );
    }

}