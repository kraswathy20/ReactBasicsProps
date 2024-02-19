import React from "react";
import './Label.css'



class Label extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? {background:'Green' }: {background: 'Orange'}
        return <span  className="labels" onClick={()=>{
            props.actionLabel(props.isActive ? 'active' : 'inactive')
        }} style={style}>{props.isActive ? 'Active' : 'Inactive'}</span>
        
    }
}

export default Label ;