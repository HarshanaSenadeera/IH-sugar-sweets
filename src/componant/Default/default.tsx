import {Component} from "react";
import {Navbar} from "../NavBar/navbar";
import {Content} from "../Content/content";
import {Footer} from "../Footer/footer";

export class Default extends Component<any, any>{

    render() {
        return (
            <>

                <Navbar/>
                <Content/>
                <Footer/>
            </>
        );
    }
}