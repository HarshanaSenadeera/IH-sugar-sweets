import {Component} from "react";
import logo from "../../../public/remove_bg.png"

export class Navbar extends Component<any, any>{

    render() {
        return (
            <div className="p-1 bg-amber-600 flex ">

                <img className="h-30 w-20 flex justify-start" src={logo}></img>
            </div>
        );
    }

}