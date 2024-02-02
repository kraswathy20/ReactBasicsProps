import React from "react";
import Label from "./label";
import "./Listitems.css";

function Listitem(props) {
const { 
    title,
    descr,
    isActive
} = props

  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
      </div>
      <div className="list-desc">{descr}</div>
      <div className="list-label">
        <Label onAction={()=>{
          console.log('Parent Clicked');
        }} isActive={isActive} />
      </div>
    </div>
  );
}

export default Listitem;
