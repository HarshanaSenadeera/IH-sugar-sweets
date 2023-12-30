import React, { Component } from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductsProps {
    data: any;
}

interface ProductState {
    isActive: boolean;
    imageSrc: string | null; // Updated type to allow for a string or null
}

export class Product extends Component<ProductsProps, ProductState> {
    constructor(props: ProductsProps) {
        super(props);
        this.state = {
            isActive: false,
            imageSrc: null, // Initialize to null
        };
    }

    // Use componentDidMount to initiate the dynamic import
    componentDidMount() {
        this.loadImage();
    }

    // Use an async function to handle the asynchronous nature of dynamic imports
    private async loadImage() {
        const { data } = this.props;

        try {
            // Dynamically load the image
            const module = await import(`../../assets/products/${data.image}`);
            // Set the imageSrc once the Promise is resolved
            this.setState({ imageSrc: module.default });
        } catch (error) {
            console.error("Error loading image:", error);
        }
    }

    render() {
        const { data } = this.props;
        const { imageSrc } = this.state;

        // If imageSrc is still a Promise (not resolved), you can show a loading state or return null
        if (!imageSrc) {
            return null; // or return a loading state
        }

        return (
            <div className="bg-white p-4 rounded-lg shadow-md mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img
                    className="w-full h-32 object-cover mb-4 rounded-md"
                    src={imageSrc}
                    alt="Cake Name"
                />
                <h2 className="text-lg font-bold mb-2">{data.name}</h2>
                <p className="text-gray-700 mb-2">{data.description}</p>
                <p className="text-purple-500 font-bold">Price: {data.price + data.currency}</p>


                   {/* <button
                        className="mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={this.addToCartOnClick}
                    >
                        Add to Cart
                    </button>*/}

                <div className={"flex justify-center"}>{
                    this.state.isActive ? <ModifyCart data={{product: data, isAdded: this.state.isActive}}/>:
                        <button className={"mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"}
                                onClick={this.addToCartOnClick}>Add to Cart
                        </button>
                }

                </div>

            </div>
        );
    }

    private addToCartOnClick = () => {
        this.setState({ isActive: !this.state.isActive }, () => {
            console.log(this.state.isActive);
            alert(this.state.isActive);
        });
    };
}
