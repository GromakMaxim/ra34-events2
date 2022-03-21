import React from "react";
import ShopItem from "./ShopItem";

export default function CardsView(props) {
    let arr = [];
    props.products.forEach(p => {
        arr.push(<ShopItem productContent={p} type='card' key={p.id}/>)
    })
    return (
        <div className='cardsView'>
            {arr}
        </div>
    );
}
