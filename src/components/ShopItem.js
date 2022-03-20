import React, {Component} from "react";
import AddButton from "./AddButton";

export default class ShopItem extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={'shopItem ' + this.props.type}>
                <img className={'shopItem-img ' + this.props.type} src={this.props.productContent.img} alt='bla bla'/>
                <div className={'shopItem-title ' + this.props.type}>{this.props.productContent.name}</div>
                <div className={'shopItem-color ' + this.props.type}>{this.props.productContent.color}</div>
                <div className={'shopItem-container ' + this.props.type}>
                    <div className={'shopItem-price ' + this.props.type}>${this.props.productContent.price}</div>
                    <AddButton/>
                </div>

            </div>
        );
    }
}
