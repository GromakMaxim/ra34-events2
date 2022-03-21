import React from "react";
import ShopItem from "./ShopItem";

export default function ListView(props) {

    let arr = [];
    props.products.forEach(p => {
        arr.push(<ShopItem productContent={p} type='list' key={p.id}/>)
    })
    return (
        <div className='listView'>
            {arr}
        </div>
    );

}
