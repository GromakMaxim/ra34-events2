import React, {Component} from "react";
import ListView from "./ListView";
import ViewSwitcher from "./ViewSwitcher";
import CardsView from "./CardsView";

export default class Store extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {type: 'card'};
        this.changeViewType = this.changeViewType.bind(this);

        this.pics = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
            id: 1
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
            id: 2
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
            id: 3
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
            id: 4
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
            id: 5
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
            id: 6
        }];
    }

    changeViewType() {
        let prevType = this.state.type;
        if (prevType === 'card') this.setState({type: 'list'});
        if (prevType === 'list') this.setState({type: 'card'});
    }

    clickHandler() {
        this.changeViewType();
    }


    render() {
        let obj;
        let type = this.state.type;

        if (type === 'card') obj = <CardsView products={this.pics}/>;
        if (type === 'list') obj = <ListView products={this.pics}/>;

        return (
            <div className='mainContainer'>
                <ViewSwitcher
                    func={
                        (e) => this.clickHandler(e)
                    }
                    type={type}
                />
                {obj}
            </div>
        );
    }
}
