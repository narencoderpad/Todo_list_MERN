import React,{useState,useEffect,useReducer } from 'react';
import './App.css';
import LabelComponent from "./Component/LabelComponent";
import InputComponent from "./Component/InputComponent";
import ButtonComponent from "./Component/ButtonComponent";
import TaskListComponent from "./Component/TaskListComponent";
import axios from "axios";
import { useSelector,useStore } from 'react-redux';

function App() {
  const [Item,setItem] = useState("");
  const store = useStore();
  useEffect(() => {
    getDetails();
  },[]);
  const getDetails = ()=>{
    fetch("/getList")
            .then(function (response) {
            console.log(response)
                response.json().then(function (responseText) {
                  store.dispatch({type: 'GET_DATA', TaskList: responseText.userList});
                });
            });
   }

  const handleChange = data=>{
    setItem(data);
  }
  const handleClick =()=>{
    if(Item){
      axios.post("/addList",{name:Item})
      .then(result=>{
            getDetails();
            setItem("")
      })
      .catch(err=>{
        console.log(err);
      })
    }else{
       alert("Enter value")
    }
  }
  const onRemoveList = (id)=>{
    axios.delete("/deleteList",{data:{id:id}})
    .then(result=>{
          getDetails();
          setItem("")
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  const SaveChange=(id,name)=>{
    if(name){
      axios.put("/editList",{name,id})
      .then(result=>{
            getDetails();
      })
      .catch(err=>{
        console.log(err);
      })
    }else{
       alert("Enter value")
    }
  }
  const TaskLists = useSelector(state => state && state.TaskList);
  return (
    <div className="App">
         <div className="pad15"><LabelComponent className = "Heading" textName={"Todo App"}/></div>
         <InputComponent type="text" placeholder="Enter value" value={Item} handleChange={handleChange} />
         <ButtonComponent handleClick={handleClick} BtnText="Add"/>
         <div>
           <TaskListComponent  TaskList={TaskLists} onRemoveList={onRemoveList} SaveChange={SaveChange}/>
         </div>
    </div>
  );
}

export default App;
