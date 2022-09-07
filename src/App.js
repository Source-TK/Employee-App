import logo from './logo.svg';
import './App.css';
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

const deleteItem = (()=>{
  let id = list((id))


  return (
  <div className="App">
  <Add add={addItem}/>
  <Display data={list}/>
      
    </div>
  );

  }

export default App;