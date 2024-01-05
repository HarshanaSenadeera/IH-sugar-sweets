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
                <div className="flex justify-center
                  items-center min-h-screen">
                    <table className="w-full mx-6">
                        <tr className="bg-gray-400">
                            <th className="text-[9px]
                        font-normal border-black
                        border-[0.5px]  px-1">Id</th>
                            <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Name</th>
                            <th className="text-[9px] font-normal border-black border-[0.5px] px-1">UnitPrice</th>
                            <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Quantity</th>
                            <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Total Price</th>
                        </tr>

                        {
                            this.props.itemList.length === 0 ?
                                <tr>
                                    <td colSpan={5}
                                        className="border-black
                                    border-[0.5px] px-1">
                                        <p className="text-center
                                    text-[8px]">No Items to Display!
                                        </p>
                                    </td>
                                </tr>
                                : this.props.itemList.map((item) => (
                                    <tr className="border-black border-[0.5px] px-1">
                                        <td className="text-[9px]
                                                   border-black
                                                   border-[0.5px] px-1">
                                            {item.product.id}</td>
                                        <td className="text-[9px] border-black border-[0.5px] px-1">{item.product.name}</td>
                                        <td className="text-[9px] border-black border-[0.5px] px-1">{item.product.price + ' ' + item.product.currency}</td>
                                        <td className="text-[9px] border-black border-[0.5px] px-1">{item.itemCount}</td>
                                        <td className="text-[9px] border-black border-[0.5px] px-1">{(item.product.price * item.itemCount) + ' ' + item.product.currency}</td>
                                    </tr>
                                ))
                        }
                    </table>
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
            </>
        );
    }

}