import React from 'react';
import logo from './logo.svg';
import  './App.css';
import Add from './Components/Add';
import Display from './Components/Display';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';


function App() {
  const[list,setlist] = useState ([])

  const addName = (name, surname, number, id, position) => {

    if(name ==""&& surname =="" && number ==""&& id ==""&& position){
      alert("please enter employee details")
    }else{
      let EmployeeName={
        name: name,
      }

      setlist((list)=> [...list,{name:name, surname:surname, number:number, position:position, id:uuidv4()}]);
    console.log(list)
    }

};

const deleteItem = ((i)=>{
  let id = list.filter(list=>list.id !==i);

  setlist(id)

})

return (
  <div className="App">
    <Add add ={addName}/>
    <Display data={list}  delete={deleteItem} />
    
    </div>
  );

  }

export default App;