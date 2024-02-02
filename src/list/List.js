import React from "react";
import Listitem from "./Listitems";
import Tools from "../Components/Tools";

const arr = [
    {
        title:'Appointments for October',
        descr:'The patient is rescheduled for October',
        isActive:false
    },
    {
        title:'Appointments for October',
        descr:'The patient is rescheduled for October',
        isActive:true
    },
    {
        title:'Appointments for October',
        descr:'The patient is rescheduled for October',
        isActive:false
    }
]


class List extends React.Component{
    render(){
        return(
            <Tools>
                <div className='app-list'>
                    {
                        arr.map((obj)=>{
                            return <Listitem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                        })
                    }
                    
                    
                </div>
            </Tools>
        )
    }
}


export default List;