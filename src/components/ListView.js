import React, {Component} from "react";
import ShopItem from "./ShopItem";

export default class ListView extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let arr = [];
        this.props.products.forEach(p => {
            arr.push(<ShopItem productContent={p} type='list' key={p.id}/>)
        })
        return (
            <div className='listView'>
                {arr}
            </div>
        );
    }
}
