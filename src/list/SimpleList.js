import React from "react";
import Listitem from "./Listitems";

function SimpleList(props){
    const {
        data,
        actionDelete,
        actionLabel
    }= props
    return(
        <div className='app-list'>
                    {
                        data.map((obj)=>{
                            return <Listitem
                            onDelete={()=>{
                                actionDelete(obj)
                            }} 
                            key={obj.title} 
                            title={obj.title} 
                            descr={obj.descr} 
                            isActive={obj.isActive}
                            actionLabel={actionLabel}/>
                        })
                    }
                    
                    
                </div>
    )
}

export default SimpleList;