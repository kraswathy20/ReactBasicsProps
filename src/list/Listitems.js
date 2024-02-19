import React from "react";
import Label from "./label";
import "./Listitems.css";

function Listitem(props) {
const { 
    title,
    descr,
    isActive,
    onDelete,
    actionLabel
} = props

  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list-desc">{descr}</div>
      <div className="list-label">
        <Label  actionLabel={actionLabel}
        isActive={isActive} />
      </div>
    </div>
  );
}

export default Listitem;
