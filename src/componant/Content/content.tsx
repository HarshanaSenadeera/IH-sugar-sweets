import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About/about";
import {Cart} from "../Cart/cart";
import {Contact} from "../../pages/Contact/contact";
import {Home} from "../../pages/Home/home";
import {ModifyCart} from "../ModifyCart/ModifyCart";



export class Content extends Component<any, any>{

    render() {
        return (

            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/cart" element={<Cart itemList={ModifyCart.itemsList}/>}></Route>
                </Routes>
            </div>
        );
    }

}