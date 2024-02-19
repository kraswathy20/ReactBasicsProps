import React from "react";
import './Addnew.css'

class Addnew extends React.Component{
    constructor(props){
        super(props);

        this.state={
            titleinput : ''
        }
    }

    handleChange = (evt) =>{
        const value = evt.target.value;
        this.setState({
         titleinput : value
        })
        
     }
     handlebtn =()=>{
        console.log(this.state.titleinput);
     }
 
render(){
    return(
        <div >
        <input onChange={this.handleChange} className="add-new"></input>
        <button onClick={this.handlebtn}>Click Here</button>
        </div>
    )
}

}

export default Addnew;