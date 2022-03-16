import React, {Component} from "react";
import ShopItem from "./ShopItem";

export default class CardsView extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let arr = [];
        this.props.products.forEach(p => {
            arr.push(<ShopItem productContent={p}/>)
        })
        return (
            <div className='cardsView'>
                {arr}
            </div>
        );
    }
}
