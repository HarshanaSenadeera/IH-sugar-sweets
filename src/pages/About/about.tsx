import {Component} from "react";

export class About extends Component<any, any>{

    render() {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">About Our Cake Shop</h1>

                <p className="mb-6">
                    Welcome to I & H Sugar Sweets, where we bake happiness! Our passion
                    for creating delicious and beautiful cakes has been our driving force
                    since 2020.
                </p>

                <p className="mb-6">
                    At I & H Sugar Sweets, we believe that every celebration deserves a
                    sweet touch. Whether it's a birthday, wedding, anniversary, or just a
                    moment to satisfy your sweet cravings, our expert bakers are here to
                    craft the perfect cake for you.
                </p>

                <p className="mb-6">
                    What sets us apart is our commitment to quality ingredients and
                    attention to detail. Each cake is made with love, using the finest
                    ingredients to ensure a taste that lingers in your memory long after the
                    last bite.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

                <p className="mb-6">
                    Our mission at I & H Sugar Sweets is to spread joy through the art of
                    baking. We aim to create not just cakes but delightful experiences that
                    become a memorable part of your special moments.
                </p>

                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>

                <p className="mb-6">
                    Come visit our store located at Wakwella Road, Galle. Experience the
                    sweet aroma, indulge in a variety of flavors, and let our friendly
                    staff assist you in finding the perfect cake for your occasion.
                </p>

                <p className="mb-6">
                    Thank you for choosing I & H Sugar Sweets for your sweet
                    celebrations. We look forward to being a part of your joyous moments!
                </p>
            </div>
        );
    }

}