import {Component} from "react";
import {CartItems} from "../../module/CartItem";

interface ModifyCartsProps{
    data: any
}

interface ModifyCartState{
    itemCount: number
}
export class ModifyCart extends Component<ModifyCartsProps, ModifyCartState>{

    public static itemsList: CartItems[] = [];

    constructor(props: ModifyCartsProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const {itemCount}=this.state;

        if (this.props.data.isAdded){
            if (!ModifyCart.itemsList.find(item =>item.product.id === this.props.data.product.id)){
                ModifyCart.itemsList.push({product: this.props.data.product, itemCount: itemCount})
            }

        }
        console.log(ModifyCart.itemsList)
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartsProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        let { itemCount } = this.state;

        let item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);

        // @ts-ignore
        let index = ModifyCart.itemsList.indexOf(item);

        ModifyCart.itemsList.splice(index, 1);
        ModifyCart.itemsList.push({
            product: this.props.data.product, itemCount: itemCount
        });

        console.log(ModifyCart.itemsList);
    }
    render() {

            let {itemCount} = this.state

        const onDecreaseItemCount = () =>{
            if (itemCount > 1){
                this.setState({itemCount: --itemCount})
            }else {
                // @ts-ignore
                alert("Item Count Can't Be Less Than One")
            }
        }

        const onIncreaseItemCount = () =>{
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div className={"mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"}>

                <button className={"float-left text-[15px]  rounded-lg h-6 w-7 space-x-0.5 mr-2"} onClick={onDecreaseItemCount}>-</button>
                <small className={"text-[15px] hover:text-white"}>{itemCount}</small>
                <button className={"float-right text-[15px] rounded-lg h-6 w-7 space-x-10 ml-2"} onClick={onIncreaseItemCount}>+</button>

            </div>
        );
    }

}