import {Component} from "react";
import {CartItems} from "../../module/CartItem";

interface CartProps {
    itemList:CartItems[];
}
export class Cart extends Component<CartProps>{

    render() {
        return (
            <>
                <h1>This is Cart</h1>
            </>
        );
    }

}