import React from "react";

import Tools from "../Components/Tools";
import SimpleList from "./SimpleList";

let arr = [
    {
        id:1,
        title:'Appointments for October',
        descr:'The patient is rescheduled for October',
        isActive:false
    },
    {
        id:2,
        title:'Appointments for November',
        descr:'The patient is rescheduled for November',
        isActive:true
    },
    {
        id:3,
        title:'Appointments for December',
        descr:'The patient is rescheduled for December',
        isActive:false
    }
]


class List extends React.Component{

  constructor(props){
    super(props);

    this.state= {
        data : arr,
        activeState:'all'
    }
  }

   
   onListAction = (evt)=>{
    console.log(evt.target.value);
    const value = evt.target.value
    this.setState({
    activeState:value
   })
   }

   handleDelete = (item) =>{
    console.log('Deleted',item);
   const newList = this.state.data.filter((element)=> element.id !== item.id)
   this.setState({
    data:newList
   })
   }

   handleLabel = (arg)=>{
    this.setState({
        activeState: arg
    })
   }
    render(){
        const {
            data,
            activeState
        }= this.state
        const newList = data.filter((item)=>{
            if(activeState === 'all'){
                return item;
            }
            if(activeState === 'active'){
                return item.isActive === true
            }
            if(activeState === 'inactive'){
                return item.isActive === false
            }   
                return false;
        })
        return(
            <Tools onAction ={this.onListAction}> 
                <SimpleList data={newList} actionDelete={this.handleDelete} actionLabel={this.handleLabel}/>
            </Tools>
        )
    }
}


export default List;