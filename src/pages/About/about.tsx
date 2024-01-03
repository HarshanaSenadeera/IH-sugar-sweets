import {Component} from "react";

export class About extends Component<any, any>{

    render() {
        return (
            <div className="container mx-auto p-8 bg-gradient-to-br from-pink-100 to-purple-500 text-white font-bold">
                <h1 className="text-4xl font-bold mb-4">About Our Cake Shop</h1>

                <p className="mb-6">
                    Welcome to <span className="text-pink-500">I & H Sugar Sweets</span>, where we bake happiness! Our passion
                    for creating delicious and beautiful cakes has been our driving force since <span className="italic">2020</span>.
                </p>

                <p className="mb-6">
                    At <span className="text-pink-500">I & H Sugar Sweets</span>, we believe that every celebration deserves a
                    sweet touch. Whether it's a birthday, wedding, anniversary, or just a moment to
                    satisfy your sweet cravings, our expert bakers are here to craft the perfect cake for you.
                </p>

                <p className="mb-6">
                    What sets us apart is our commitment to <span className="font-bold">quality ingredients</span> and
                    attention to detail. Each cake is made with love, using the finest ingredients to
                    ensure a taste that lingers in your memory long after the last bite.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

                <p className="mb-6">
                    Our mission at <span className="text-pink-500">I & H Sugar Sweets</span> is to spread joy through the art of
                    baking. We aim to create not just cakes but delightful experiences that become a memorable part of your special moments.
                </p>

                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>

                <p className="mb-6">
                    Come visit our store located at <span className="text-pink-500">Wakwella Road, Galle</span>. Experience the
                    sweet aroma, indulge in a variety of flavors, and let our friendly staff assist you in finding the perfect cake for your occasion.
                </p>

                <p className="mb-6">
                    Thank you for choosing <span className="text-pink-500">I & H Sugar Sweets</span> for your sweet celebrations. We look forward to being a part of your joyous moments!
                </p>
            </div>
        );
    }

}