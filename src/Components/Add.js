
import {useState}  from 'react'


function Add (props) {
    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [number,setNumber]=useState('');
    const [id,setID]=useState('');
    const [position,setPosition]=useState('')
    const addEmployeeName = (()=>{
      
        props.add(name,surname,number,id,position);
        props.delete(name,surname,number,id,position);
        
    })  

    return (
<div className='border'>
    <h1>
        EMPLOYEE MANAGEMENT APP
    </h1>

   
    <input type="text" placeholder="Enter Employee Name" onChange ={(event)=>setName(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee Surname"onChange ={(event)=>setSurname(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee Number"onChange ={(event)=>setNumber(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee ID"onChange ={(event)=>setID(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee Position"onChange ={(event)=>setPosition(event.target.value)}/><br/><br/>
    <button className='button' onClick={addEmployeeName} >Add</button>
    <button className='button' onClick={addEmployeeName} >Delete</button>
    
</div>
)

}
export default Add;


