import React, {Component} from "react";
import AddButton from "./AddButton";

export default class ShopItem extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className='shopItem'>
                <div className='shopItem-title'>{this.props.productContent.name}</div>
                <div className='shopItem-color'>{this.props.productContent.color}</div>
                <img className='shopItem-img' src={this.props.productContent.img} alt={this.props.productContent.name}/>
                <div className='shopItem-container'>
                    <div className='shopItem-price'>${this.props.productContent.price}</div>
                    <AddButton/>
                </div>

            </div>
        );
    }
}
