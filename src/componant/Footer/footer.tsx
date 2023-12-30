import {Component} from "react";

export class Footer extends Component<any, any>{

    render() {
        return (

            <div className="p-2 bg-purple-500 flex flex-col  items-center
                             text-1xl w-full md:w-auto text-white font-sans  font-bold">
                Copyright @ Harshana Senadeera 2023
            </div>
        );
    }

}