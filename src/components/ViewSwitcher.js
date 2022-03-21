import React from "react";

export default function ViewSwitcher(props) {

    if (props.type === 'card') {
        return <span className="material-icons md-48" onClick={props.func}>view_list</span>;
    }
    if (props.type === 'list') {
        return <span className="material-icons md-48" onClick={props.func}>view_module</span>;
    }
}
