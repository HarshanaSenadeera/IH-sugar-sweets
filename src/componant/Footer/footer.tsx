import {Component} from "react";
/*import { MailIcon, FacebookIcon, TwitterIcon, InstagramIcon } from '@heroicons/react/outline';*/
import facebook from "../../assets/footer/facebook.png"
import twitter from "../../assets/footer/twitter.png"
import instagram from "../../assets/footer/instagram.png"
import gmail from "../../assets/footer/gmail.png"

export class Footer extends Component<any, any>{

    render() {
        return (

            <div className="bg-gradient-to-r from-purple-600 to-indigo-800 p-6 flex flex-col items-center text-white">
                <div className="text-2xl font-bold mb-4">Connect with Us</div>

                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="hover:text-purple-300 transition duration-300 ease-in-out"
                    >
                        <img
                            src={facebook}
                            alt="Facebook Icon"
                            className="w-6 h-6 inline"
                        />
                        Facebook
                    </a>
                    <a
                        href="#"
                        className="hover:text-purple-300 transition duration-300 ease-in-out"
                    >
                        <img
                            src={twitter}
                            alt="Twitter Icon"
                            className="w-6 h-6 inline"
                        />
                        Twitter
                    </a>
                    <a
                        href="#"
                        className="hover:text-purple-300 transition duration-300 ease-in-out"
                    >
                        <img
                            src={instagram}
                            alt="Instagram Icon"
                            className="w-6 h-6 inline"
                        />
                        Instagram
                    </a>
                </div>

                <div className="mt-4">
                    <p className="text-xs">
                        For inquiries, email us at{' '}
                        <a
                            href="harshanasenadeera64@gmail.com"
                            className="text-purple-300 hover:underline transition duration-300 ease-in-out"
                        >
                            <img
                                src={gmail}
                                alt="Mail Icon"
                                className="w-4 h-4 inline"
                            />
                            harshanasenadeera64@gmail.com
                        </a>
                    </p>
                </div>

                <div className="border-t border-purple-300 mt-6 pt-4 w-full text-center">
                    <p className="text-xs">
                        &copy; Harshana Senadeera {new Date().getFullYear()}
                    </p>
                </div>
            </div>

        );
    }

}