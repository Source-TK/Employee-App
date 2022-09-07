import React from 'react'



function  Display(props) {

  const deleteItem= ((id)=>{
    props.delete(id)
  })

  return (
      <div>
      {props.data.map((EmployeeName)=>(
          <h1>
          {EmployeeName.name},{EmployeeName.surname},{EmployeeName.number},{EmployeeName.id},{EmployeeName.position}
          </h1>
          
      ))}

      </div>
      
  )

}


export default Display;