import React from "react";
import './Tools.css'
import Addnew from "../list/Addnew";

class Tools extends React.Component{
    render(){
     const {
        children,
        onAction
     } =this.props

    const onlychild = React.Children.only(children)
    const count = React.Children.count(onlychild.props.children)
        return(
           <div className="tools">
                <div className="tools-header">
                    <select onChange={onAction} className="status">
                        <option name='all' value='all'>All</option>
                        <option name='Active' value='active'>Active</option>
                        <option name='Inactive' value='inactive'>Inactive</option>
                    </select>
                </div>
                <Addnew/>
                {children}
                <div className="tools-footer">
                
                    <span>There are {count} items here.</span>
                </div>
           </div>
        )
    }
}

export default Tools