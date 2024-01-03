import {Component} from "react";
import call from "../../assets/home/phone-call (1).png";

export class Contact extends Component<any, any>{

    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-500 ">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-90">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Your Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Type your message here"
                            ></textarea>
                        </div>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <a
                    href="tel:+777454885"
                    className="bg-green-500 text-white p-3 rounded-full fixed bottom-4 right-4 shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
                >
                    <img
                        src={call}
                        alt="call"
                        className="w-6 h-6 "
                    />

                </a>
            </div>
        );
    }

}