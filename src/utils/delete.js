'use client'
import React from 'react'

const Deleteuser = (props) => {
  const userId= props.id
  console.log(userId);
 async function deleteUser(){
let result = await fetch('http://localhost:3000/api/users'+userId,{
  method:'delete',

});
result=await result.json()
if(result.success){
  alert('true')
}

  }
  return (
    <div>
        <button onClick={deleteUser}>delete</button>
    </div>
  )
}

export default Deleteuser