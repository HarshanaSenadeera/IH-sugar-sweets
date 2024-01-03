import {Component} from "react";
import {CartItems} from "../../module/CartItem";
import call from "../../assets/home/phone-call (1).png";

interface CartProps {
    itemList:CartItems[];
}
export class Cart extends Component<CartProps>{

    render() {
        return (
            <>
                <h1>This is Cart</h1>

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
            </>
        );
    }

}