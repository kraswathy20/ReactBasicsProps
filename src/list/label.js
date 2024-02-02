import React from "react";
import "./Label.css";

class Label extends React.Component {
  render() {
    const props = this.props;
    const style = props.isActive
      ? { background: "Green" }
      : { background: "Orange" };
    return <span onClick={props.onAction} className="labels" style={style}>{props.isActive?'Active':'Inactive'}</span>;
  }
}

export default Label;
