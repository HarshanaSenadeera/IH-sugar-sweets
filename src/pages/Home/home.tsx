import {Component} from "react";
import {Product} from "../../componant/Product/product";

export class Home extends Component{

    constructor(props: {}| Readonly<{}>) {
        super(props);
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () =>{
        try {
            // @ts-ignore
            const response= await fetch('/Product.json');
            const jsonData = await response.json();
            this.setState({data:jsonData});
        }catch (error) {
            console.log("Error fetching Data")
        }
    }
    render() {

        // @ts-ignore
        const {data} = this.state;
        return (
            <div className="container mx-auto p-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Welcome to I & H Sugar Sweets</h1>
                    <p className="text-lg text-gray-600">
                        Indulge in the Sweet Delight of Our Irresistible Cakes
                    </p>
                </header>

                <div className="flex flex-wrap -mx-4 justify-center">

                    {
                        data.map((product: any) =>(
                            <Product key={product.id} data={product}/>
                        ))

                    }
                </div>
            </div>
        );
    }

}