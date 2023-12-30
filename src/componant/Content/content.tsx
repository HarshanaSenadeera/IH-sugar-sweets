import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/home";
import {About} from "../../pages/About/about";
import {Cart} from "../../pages/Cart/cart";
import {Contact} from "../../pages/Contact/contact";

export class Content extends Component<any, any>{

    render() {
        return (

            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/cart" Component={Cart}></Route>
                </Routes>
            </div>
        );
    }

}