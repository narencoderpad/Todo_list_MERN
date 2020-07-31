import React,{useState} from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

function TaskListComponent(props){
    const [status,setStatus]= useState("");
    const [Name,setName]= useState("");
    const handleChange = (data)=>{
        setName(data);
    }
    const handleClick = ()=>{
        if(Name){
            props.SaveChange(status,Name);
            setStatus("")
        }
        
    }
    const onEditList =(id,name)=>{
        setName(name);
        setStatus(id);
    }
   const handleCancelClick=()=>{
        setStatus("")
   }
    return(
     <div>
         {props.TaskList && props.TaskList.map((item,i)=>(
             <div key={item._id} className="pad15">
                 {status !== item._id ? (<div>
                 <span className={item.btnClass}>{item.name}</span>
                 <i className="fa fa-edit pad10" onClick={() => onEditList(item._id,item.name)}></i>
                <i className="fa fa-remove pad10" onClick={() => props.onRemoveList(item._id)}></i>
                </div>):""}
                 
                {status === item._id ? (<div>
                   <InputComponent type="text" placeholder="Enter value" value={Name} handleChange={handleChange} />
                   <ButtonComponent handleClick={handleClick} BtnText="save"/>
                   <ButtonComponent handleClick={handleCancelClick} BtnText="Cancel"/>
                 </div>):""}   
             </div>
         ))}
     </div>
    )
}
export default TaskListComponent;