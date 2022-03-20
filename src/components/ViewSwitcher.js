import React, {Component} from "react";

export default class ViewSwitcher extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.type === 'card') return <span className="material-icons md-48" onClick={this.props.func}>view_list</span>;
        if (this.props.type === 'list') return <span className="material-icons md-48" onClick={this.props.func}>view_module</span>;

    }

}
