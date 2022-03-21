import React from "react";
import AddButton from "./AddButton";

export default function ShopItem(props) {
    return (
        <div className={'shopItem ' + props.type}>
            <img className={'shopItem-img ' + props.type} src={props.productContent.img} alt='bla bla'/>
            <div className={'shopItem-title ' + props.type}>{props.productContent.name}</div>
            <div className={'shopItem-color ' + props.type}>{props.productContent.color}</div>
            <div className={'shopItem-container ' + props.type}>
                <div className={'shopItem-price ' + props.type}>${props.productContent.price}</div>
                <AddButton/>
            </div>

        </div>
    );
}
